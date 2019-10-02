/*  File montecarlo_utils.cpp

Authors: J. Koch, M. Dausmann

This class provides the functions that
support the monte-carlo-strategies that
try to solve the Travelling Salesman Problem.
- generate appropriate random numbers
- swap edges in a trip
- insert a point at a different place in a trip.

Reference: Chapter Random Numbers

*/
#include <random>
#include <iostream>
#include <cassert>

#include "trace_utils.hpp"
#include "montecarlo_utils.hpp"

using namespace std;

int MonteCarloUtils::getRandomNumber(int left, int right) {
	static random_device rd{};
	static default_random_engine e(rd());
	uniform_int_distribution<int> d(left, right);
	return d(e);
}

//<-tsp_insert--
RoundTrip MonteCarloUtils::insertPoint(RoundTrip trip) 
{
	const int n = trip.size();
  // algorithm only applicable for n > 2
  assert( n > 2 );
	// Generate two random numbers
	int i = getRandomNumber(1,n-1);
	int j;
  do{
    j = getRandomNumber(0,n-1);
  }while( j == i || j == i-1 );
	TraceUtils::traceRandomNumbers(i,j);
	RoundTrip swapped = trip.swapPoint(i,j);
	return swapped;
}
//--tsp_insert->

//<-tsp_swap--
RoundTrip MonteCarloUtils::swapEdges(RoundTrip trip) 
{
	const int n = trip.size();
  // algorithm only applicable for n > 2
  assert( n > 2 );
	// Generate two random numbers
	int i = getRandomNumber(0,n-3);
	int j = getRandomNumber(i+2,n-1);
	TraceUtils::traceRandomNumbers(i,j);
	RoundTrip swapped = trip.swapEdges(i,j);
	return swapped;
}
//--tsp_swap->

