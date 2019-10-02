/*  File montecarlo_utils.hpp

Authors: J. Koch, M. Dausmann

This class provides the functions that 
support the monte-carlo-strategies that
try to solve the Travelling Salesman Problem.
- generate appropriate random numbers
- swap edges in a trip
- insert a point at a different place in a trip.

Reference: Chapter Random Numbers

*/
#pragma once
#include "round_trip.hpp"

using namespace std;

class MonteCarloUtils {
private:
	static int getRandomNumber(int left, int right);
public:
	static RoundTrip insertPoint(RoundTrip trip);
	static RoundTrip swapEdges(RoundTrip trip);
};
