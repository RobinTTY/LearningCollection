/*  File selectsort.cpp

Authors: J.Koch, M.Dausmann

This file implements the selection sort algorithm.

Reference: Chapter Sorting Algorithms

*/
#include "sort_interface.hpp"

//<-selectsort--
void SelectionSort::sort(int a[], int left, int right)
{
	for (int i = left; i < right; i++)
	{
		int min = i;
		for (int j = i + 1; j <= right; j++)
		{
			if (a[j] < a[min])
				min = j;
		}
		SortUtils::swap(a, min, i);
	}
}
//--selectsort->

void SelectionSort::trace(int data[], int left, int right, int part) {
	if (SortUtils::trace) {
		cout << "Selected index " << part << ", Array: ";
		SortUtils::print(data, left, right);
	}
}
