/*  File trace_utils.cpp

Authors: M. Dausmann, J. Koch

Class TraceUtils contains functions to support
the trace of the TSP algorithms.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include <random>
#include "trace_utils.hpp"

using namespace std;

bool TraceUtils::trace = false; 

void TraceUtils::tracePoints(const string & s, vector<Point> & pl) {
	cout << s << endl;
	for (unsigned int i = 0; i < pl.size(); i++)
	{
		cout << pl[i].toString();
		if (i != pl.size() - 1) cout << ", ";
	}
	cout << endl;
}

void TraceUtils::traceIteration(const string & s, RoundTrip & rt,
	double dist, int iteration) {
	if (trace) {
		cout << s << endl << rt.toString() << endl;
		cout << "The " << iteration << "-th trip has a length of ";
		cout << dist << endl;
	}
}

void TraceUtils::traceNN(Point & min, Point & from, double dist) {
	if (trace) {
		cout << "Point " << min.toString() << " is nearest to Point ";
		cout << from.toString() << " with a distance of " << dist << endl;
	}
}

void TraceUtils::traceSA(const string & s, RoundTrip & r,
	double dist, double temp) {
	if (trace)
	{
		cout << s << endl << r.toString() << endl;
		cout << "The actually selected trip has a length of " << dist << endl;
		cout << "The actual temperature is: " << temp << endl;
	}
}

void TraceUtils::traceRandomNumbers(int r1, int r2) {
	if (trace)
		cout << "Trace Random Numbers:  " << r1 << "  " << r2 << endl;
}
