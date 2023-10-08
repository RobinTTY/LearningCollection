/*  File cip_algorithm.cpp

Authors: M. Dausmann, J. Koch

This file contains the implementation of the
Continuous-Improvement-Algorithms to solve the TSP problem:
swap edges resp. insert a point

The number of iterations for improving can be given (maxTrials).

Reference: Chapter Random Numbers

*/
#include <iostream>
#include "tsp_algorithm.hpp"
#include "trace_utils.hpp"
#include "montecarlo_utils.hpp"

int CIPAlgorithm::iteration = 1;

CIPAlgorithm::CIPAlgorithm(DistanceMatrix & dist, RoundTrip & trip, int max, bool swapEdge) :
		maxTrials(max), what(swapEdge) {
  this->trip = trip;
  this->dist = dist;
}

RoundTrip CIPAlgorithm::computeTrip() {
	// start with the given trip
	oldTrip = trip;
	minTrip = trip;
	oldDist = minDist = oldTrip.getTripLength(dist);

	bool isBetter;
	if (what) {
		isBetter = improveTripSwappingEdges();
	} else {   //  what == false means insert point
		isBetter = improveTripInsertingPoint();
	}
	if (isBetter) return minTrip;
	else return trip;
}

//<-tsp_kvp_edges--
bool CIPAlgorithm::improveTripSwappingEdges() {
	bool found = false;
	for (int i = 1; i <= maxTrials; i++) {
		// compute a new trip and its length
		newTrip = MonteCarloUtils::swapEdges(oldTrip);
		newDist = newTrip.getTripLength(dist);
		if (newDist < minDist)
		{
			saveMinimum(); found = true;
		}
		nextIteration("Swap Edges");
	}
	return found;
}
//--tsp_kvp_edges->

//<-tsp_kvp_points--
bool CIPAlgorithm::improveTripInsertingPoint() 
{
	bool found = false;
	for (int i = 1; i <= maxTrials; i++) {
		// compute a new trip and its length
		newTrip = MonteCarloUtils::insertPoint(oldTrip);
		newDist = newTrip.getTripLength(dist);
		if (newDist < minDist)
		{
			saveMinimum(); found = true;
		}
		nextIteration("Insert Point");
	}
	return found;
}
//--tsp_kvp_points->

void CIPAlgorithm::saveMinimum() {
	minDist = newDist;
	minTrip = newTrip;
	TraceUtils::traceIteration("Trace new Minimum", minTrip, minDist, iteration);
}

void CIPAlgorithm::nextIteration(string s) {
	TraceUtils::traceIteration("Trace " + s, newTrip, newDist, iteration);
	oldTrip = newTrip;
	iteration++;
}
