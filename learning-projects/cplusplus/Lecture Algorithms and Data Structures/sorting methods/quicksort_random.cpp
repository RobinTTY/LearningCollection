/*  File quicksort_random.cpp

Authors: J.Koch, M.Dausmann

This file implements the randomized quick sort algorithm.

This algorithm is used in chapter on random numbers, but is
integrated here with the other sorting algorithms.

Reference: Chapter Sorting Algorithms / Random numbers

*/
#include "sort_interface.hpp"
#include <random>
using namespace std;

int generateRandomNumber(int left, int right)
{
	static random_device rd{};
	static default_random_engine e(rd());
	uniform_int_distribution<int> d(left, right);
	// random number in [left..right]
	int result = d(e);
	if (SortUtils::trace) cout << "Random number: " << result << " in [" << left << ".."
		<< right << "]" << endl;
	return result;
}

//<-random_select--
// takes a randomly selected pivot element 
// and puts it at the rigth most position 
void QuickSortRandom::selectPivot(int a[], int left, int right)
{
	int pivot = generateRandomNumber(left, right);
	SortUtils::swap(a, right, pivot);
}
//--random_select->
