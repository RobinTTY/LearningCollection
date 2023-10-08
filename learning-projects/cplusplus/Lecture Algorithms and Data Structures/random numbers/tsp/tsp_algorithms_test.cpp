/*  File tsp_algorithms_test.cpp

Authors: J. Koch, M. Dausmann

This program allows to study the 
Travelling Salesman Problem. 
The pointset can be chosen as well as
the algorithm to solve the problem.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include <string>
#include <limits>
#include "point.hpp"
#include "tsp_algorithm.hpp"
#include "trace_utils.hpp"
#include "point_set.hpp"

using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int readNumberOfTrials() {
  int number;
  cout << "Number of trials for improving the trip: " << endl;
  cin >> number;
  return number;
}

bool readTraceDesired() {
  int what;
  cout << "Would you like to have a trace of this run?" << endl;
  cout << "1: Yes, else: No." << endl;
  cin >> what;
  if (!cin) {
    what = 0; cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
  }
  return (what == 1);
}

TSPAlgorithm * getAlgorithm(DistanceMatrix & distances, RoundTrip & trip) {
  int trials;
  int algo;
  while (true) {
    cout << "Choose the algorithm to work with:" << endl;
    cout << "1: Brute-Force" << endl;
    cout << "2: Nearest-Neighbour" << endl;
    cout << "3: Randomly inserting points" << endl;
    cout << "4: Randomly swapping edges" << endl;
    cout << "5: Simulated Annealing" << endl;
    cin >> algo;
    if (!cin) {
      algo = 0; cin.clear();
      cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
    if (algo == 1)
    {
      cout << "Brute-Force-Algorithm to solve " <<
              "the Travelling Salesman Problem (TSP)" << endl;
      if ( trip.size() > PointSet::MAX_POINTS) {
        cout << "The computation of a trip with brute force" << endl;
        cout << "may take long time as the pointset contains" << endl;
        cout << "more than " << PointSet::MAX_POINTS << " points." << endl;
        cout << "Do you want to proceed (1) or stop this run (else):" << endl;
        int stop;  cin >> stop;
        if (stop != 1) exit(99);
      }
      return new BFAlgorithm(distances, trip);
    }
    else if (algo == 2)
    {
      cout << "Nearest-Neighbour-Algorithm to solve " <<
        "the Travelling Salesman Problem (TSP)" << endl;
      return new NNAlgorithm(distances, trip);
    }
    else if (algo == 3)
    {
      cout << "Algorithm with randomly inserting points to " <<
        "solve the Travelling Salesman Problem (TSP)" << endl;
      trials = readNumberOfTrials();
      return new CIPAlgorithm(distances, trip, trials, false);
    }
    else if (algo == 4)
    {
      cout << "Algorithm with randomly swapping edges to " <<
        "solve the Travelling Salesman Problem (TSP)" << endl;
      trials = readNumberOfTrials();
      return new CIPAlgorithm(distances, trip, trials, true);
    }
    else if (algo == 5)
    {
      cout << "Algorithm with a Simulated Annealing to " <<
        "solve the Travelling Salesman Problem (TSP)" << endl;
      trials = readNumberOfTrials();
      return new SAAlgorithm(distances, trip, trials);
    }
    else
    {
      cout << "Wrong input, please try again!" << endl;
      continue;
    }
  }
}

int main() {
  vector<Point> points = PointSet::choosePointset();
  TraceUtils::tracePoints("The choosen Pointset is:", points);

  DistanceMatrix distances(points);
  cout << endl;
  cout << "Contents of distance matrix" << endl;
  cout << distances.toString() << endl << endl;

  RoundTrip trip(points);
  double length = trip.getTripLength(distances);
  cout << "The trivial Roundtrip is:" << endl;
  cout << trip.toString() << endl;
  cout << "This trip has a length of " << length << endl;
  cout << endl;

  TSPAlgorithm * tsp = getAlgorithm(distances,trip);

  TraceUtils::trace = readTraceDesired();

  RoundTrip comTrip = tsp->computeTrip();
  double comLength = comTrip.getTripLength(distances);

  cout << endl;
  cout << "The computed roundtrip is:" << endl;
  cout << comTrip.toString() << endl;
  cout << "This trip has a length of " << comLength << endl;

  delete tsp;
  TheEnd;
  return 0;
}

