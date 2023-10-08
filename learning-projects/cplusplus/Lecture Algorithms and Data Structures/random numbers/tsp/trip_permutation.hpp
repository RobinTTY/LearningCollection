/*  File trip_permutation.hpp

Authors: M. Dausmann, J. Koch

Class TripPermutation contains the functions
which support the Brute-Force-Strategy to solve
the TSP problem.
NextTrip():
return == true: trip stores the next permutation
return == false: there are no more permutations

Reference: Chapter Random Numbers

*/
#pragma once
#include "point.hpp"
#include "round_trip.hpp"

class TripPermutation {
private:
	RoundTrip points;
	int max;
	int * a; // array to be permuted
	
	static void swap(int a[], int i, int j);
	bool nextPermutation();

public:
	TripPermutation(RoundTrip & original);
  ~TripPermutation(){ delete [] a; };
	bool nextTrip(RoundTrip & rt);
};
