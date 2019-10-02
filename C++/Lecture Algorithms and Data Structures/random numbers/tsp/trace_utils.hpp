/*  File trace_utils.hpp

Authors: M. Dausmann, J. Koch

Class TraceUtils contains functions to support
the trace of the TSP algorithms.

Reference: Chapter Random Numbers

*/
#pragma once
#include "point.hpp"
#include "round_trip.hpp"

using namespace std;


class TraceUtils {
public:
	static bool trace; // if true, trace output will be produced

	static void tracePoints(const string & s, vector<Point> & pl);
	static void traceIteration(const string & s, RoundTrip & rt,
		double dist, int iteration);
	static void traceNN(Point & min, Point & from, double dist);
	static void traceSA(const string & s, RoundTrip & r,
		double dist, double temp);
	static void traceRandomNumbers(int r1, int r2);
};

