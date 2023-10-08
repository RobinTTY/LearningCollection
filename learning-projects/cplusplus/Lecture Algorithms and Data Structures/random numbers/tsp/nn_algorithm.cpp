/*  File nn_algorithm.cpp

Authors: M. Dausmann, J. Koch

This file contains the implementation of the
Nearest-Neighbour-Algorithm to solve the TSP problem.

Reference: Chapter Random Numbers

*/
#include "tsp_algorithm.hpp"
#include "trace_utils.hpp"

NNAlgorithm::NNAlgorithm(DistanceMatrix & dist, RoundTrip & trip) {
  this->trip = trip;
  this->dist = dist;
}

//<-tsp_greedy--
RoundTrip NNAlgorithm::computeTrip() 
{
	RoundTrip result(trip); // copy constructor

	// Starting at point with index 0 (ok from copy)
	excludeFromSearch(result[0]);
	for (int i = 1; i < trip.size(); i++)
	{
		// Nearest neighbour to last selected point
		Point & next = nearestNeighbour(result[i - 1]);
		result[i] = next;
		excludeFromSearch(next);
	}
	return result;
}
//--tsp_greedy->


// Search nearest point to the last one found (from)
Point & NNAlgorithm::nearestNeighbour(Point & from) {
	double minDist = DistanceMatrix::INFINIT;
	Point * minPoint = nullptr; 

	for (int j = 0; j < trip.size(); j++)
	{
		if (dist.getDistance(from, trip[j]) < minDist) {
			minDist = dist.getDistance(from, trip[j]);
			minPoint = &trip[j];
		}
	}
	TraceUtils::traceNN(*minPoint, from, minDist);
	return *minPoint;
}

void NNAlgorithm::excludeFromSearch(Point & p) {
	dist.setDistanceToInfinity(p);
}
