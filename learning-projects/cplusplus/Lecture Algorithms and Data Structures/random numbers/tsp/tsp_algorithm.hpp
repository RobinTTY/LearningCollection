/*  File tsp_algorithm.hpp

Authors: M. Dausmann, J. Koch

This file contains the interface of all algorithms
that try to solve the TSP problem. The abstract class
stores the first (trivial) trip and the distance matrix.

The classes of the implemented algorithms are defined herein.

Reference: Chapter Random Numbers

*/
#pragma once
#include "point.hpp"
#include "round_trip.hpp"
#include "distance_matrix.hpp"

class TSPAlgorithm {
public:
	RoundTrip trip;
	DistanceMatrix dist;

	virtual RoundTrip computeTrip() = 0;
  virtual ~TSPAlgorithm() {}
};

class BFAlgorithm : public TSPAlgorithm {
private:
	int iteration = 1;
	RoundTrip newTrip, minTrip;
	double newDist, minDist;

	double checkTrip(RoundTrip & rt);
	void saveMinimum();
public:
  BFAlgorithm(DistanceMatrix & dist, RoundTrip & trip);
	RoundTrip computeTrip() override;
};

class NNAlgorithm : public TSPAlgorithm {
private:
	Point & nearestNeighbour(Point & from);
	void excludeFromSearch(Point & p);
public:
  NNAlgorithm(DistanceMatrix & dist, RoundTrip & trip);
	RoundTrip computeTrip() override;
};

class CIPAlgorithm : public TSPAlgorithm {
private:
	RoundTrip newTrip, oldTrip, minTrip;
	double newDist, oldDist, minDist;
	int maxTrials;
	bool what; // true: swap edges, false: insert point
	void saveMinimum();
	void nextIteration(string s);
	static int iteration;
public:
	CIPAlgorithm(DistanceMatrix & dist, RoundTrip & trip, int max, bool swapEdge);
	RoundTrip computeTrip() override;
	bool improveTripSwappingEdges();
	bool improveTripInsertingPoint();
};

class SAAlgorithm : public TSPAlgorithm {
private:
	int maxTrials;
	RoundTrip newTrip, oldTrip, minTrip;
	double newDist, oldDist, minDist;

public:
	SAAlgorithm(DistanceMatrix & dist, RoundTrip & trip, int max);
	RoundTrip computeTrip() override;

private:
	bool checkAcceptance(double oldD, double newD, double T);
	void saveMinimum();
	void acceptLongerTrip();
	void minimalTemperatureReached();
};
