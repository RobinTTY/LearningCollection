/*  File trip_permutation.cpp

Authors: M. Dausmann, J. Koch

Class TripPermutation contains the functions
which support the Brute-Force-Strategy to solve
the TSP problem.
NextTrip():
return == true: trip stores the next permutation
return == false: there are no more permutations

An int-array with the values 1..n will be permuted. 
From that a new trip will be computed.
The original trip will be stored in the constructor
and from that a new trip will be generated this way.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include "trip_permutation.hpp"

inline void TripPermutation::swap(int a[], int i, int j){
	int temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

TripPermutation::TripPermutation(RoundTrip & original) {
	points = original;
	max = original.size() - 1;
	// element 0 of points is fix and need not being considered in permutation
	a = new int[max];
	for (int i = 0; i < max; i++) {
		a[i] = i + 1;
	}
}

//<-next_perm--
inline bool TripPermutation::nextPermutation() {
	int i;
	for (i = max - 2; i >= 0; i--) {
		if (a[i] < a[i + 1]) break;
	}
	if (i < 0) return false;

	for (int j = max - 1; j >= i; j--) {
		if (a[j] > a[i]) {
			swap(a, i, j);
			break;
		}
	}
	for (int j = i + 1; j < (max + i + 1) / 2; j++) {//from a[i+1] to a[N-1] 
		swap(a, j, max + i - j);
	}
	return true;
}
//--next_perm->

bool TripPermutation::nextTrip(RoundTrip & rt) {
	bool todo = nextPermutation();
	if (!todo) { return false; }
	rt[0] = points[0];
	// compute a trip from contents of int-Array
	for (int i = 0; i < max; i++) {
		rt[i + 1] = points[a[i]];
	}
	return true;
}

/*
//Using STL is possible, but not yet used
//as a similar algorithm is not provided by Java
#include <algorithm>
bool naechstePermutation(PunktListe & liste)
{
	bool fertig = next_permutation(liste.begin(), liste.end());
	return fertig;
}
*/
