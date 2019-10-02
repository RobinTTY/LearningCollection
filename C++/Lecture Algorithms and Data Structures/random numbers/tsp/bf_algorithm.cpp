/*  File bf_algorithm.cpp

Authors: M. Dausmann, J. Koch

This file contains the implementation of the
Brute-Force-Algorithm to solve the TSP problem. 

Reference: Chapter Random Numbers

*/
#include <iostream>
#include "tsp_algorithm.hpp"
#include "trace_utils.hpp"
#include "trip_permutation.hpp"

using namespace std;

BFAlgorithm::BFAlgorithm(DistanceMatrix & dist, RoundTrip & trip) {
  this->trip = trip;
  this->dist = dist;
}

double BFAlgorithm::checkTrip(RoundTrip & rt) {
	double distance = rt.getTripLength(dist);
	TraceUtils::traceIteration("Trace-Output of the trip:", 
		rt, distance, iteration);
	return distance;
}

void BFAlgorithm::saveMinimum() {
	// save a new minimum:
	minTrip = newTrip; 
	minDist = newDist;
}

//<-tsp_bruteforce--
RoundTrip BFAlgorithm::computeTrip() 
{
	// start with the given trip
	newTrip = trip;
	minTrip = trip;
	minDist = minTrip.getTripLength(dist);

	TripPermutation rp(trip);

	do {
		newDist = checkTrip(newTrip);
		if (newDist < minDist) saveMinimum();
    iteration++;
	} while (rp.nextTrip(newTrip));

	return minTrip;
}
//--tsp_bruteforce->
