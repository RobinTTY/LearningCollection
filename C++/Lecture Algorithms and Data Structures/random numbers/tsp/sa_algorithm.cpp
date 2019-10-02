/*  File sa_algorithm.cpp

Authors: M. Dausmann, J. Koch

This file contains the implementation of the
Simulated-Annealing-Algorithm to solve the TSP problem.

Reference: Chapter Random Numbers

*/
#include <random>
#include "tsp_algorithm.hpp"
#include "trace_utils.hpp"
#include "sa_temperature.hpp"
#include "montecarlo_utils.hpp"

SATemperature temperature(0.0, 0.0, 0.0);

random_device rd;
default_random_engine re(rd());
uniform_real_distribution<double> d;
	
SAAlgorithm::SAAlgorithm(DistanceMatrix & dist, RoundTrip & trip, int max) {
  maxTrials = max;
  this->trip = trip;
  this->dist = dist;
}

//<-tsp_sa_accept--
bool SAAlgorithm::checkAcceptance
	        (double oldD, double newD, double T)
{
	double z, e;
	z = d(re); // random number in [0.0,1.0]
	e = exp(-(newD - oldD) / T);
	return (z <= e);
}
//--tsp_sa_accept->

//<-tsp_simu_anneal--
RoundTrip SAAlgorithm::computeTrip() 
{
	// initialize cooling process
	temperature = SATemperature(1.0, 0.9, 0.1);

	// start with the given trip
	minTrip = trip;
	oldTrip = trip;
	oldDist = minDist = oldTrip.getTripLength(dist);

	for (int trial = 1; trial <= maxTrials; trial++) {
		// compute a new roundtrip and its length
		newTrip = MonteCarloUtils::insertPoint(oldTrip);
		newDist = newTrip.getTripLength(dist);
		if (newDist < minDist) {
			saveMinimum();
		}
		else if (newDist > minDist) {
			if (checkAcceptance(oldDist, newDist, temperature.T)) 
					acceptLongerTrip();
		}
		if (!temperature.coolDown()) {
			minimalTemperatureReached(); break;
		}
	}
	return minTrip;
}
//--tsp_simu_anneal->

void SAAlgorithm::saveMinimum() {
	minDist = newDist; 
	minTrip = newTrip;
	// swap for next iteration:
	oldDist = newDist; oldTrip = newTrip;
	TraceUtils::traceSA("Minimum was improved:", 
		minTrip, minDist, temperature.T);
}

void SAAlgorithm::acceptLongerTrip() {
	oldDist = newDist; oldTrip = newTrip;
	TraceUtils::traceSA("Longer roundtrip selected: ", 
		newTrip, newDist, temperature.T);
}

void SAAlgorithm::minimalTemperatureReached() {
	TraceUtils::traceSA("Minimal temperature reached and stopped: ", 
		minTrip, minDist, temperature.T);
}
