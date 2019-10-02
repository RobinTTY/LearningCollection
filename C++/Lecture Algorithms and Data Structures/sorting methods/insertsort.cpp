/* File: insertsort.cpp

Authors: J.Koch, M.Dausmann

This file implements the insertion sort algorithm.
Not yet in manuscript, but adapted from exam WS15/16

Reference: Chapter Sorting Algorithms

*/
#include "sort_interface.hpp"


//<-insertsort--
void InsertionSort::sort(int a[], int left, int right) {
	for (int i = left; i <= right; i++) {
		int consider = a[i];
		int j = i;
		while (j >= 1 && a[j - 1] > consider) {
			a[j] = a[j - 1];
			j--;
		}
		a[j] = consider;
		trace(a, left, right, consider);
	}
}
//--insertsort->

void InsertionSort::trace(int data[], int left, int right, int cons) {
	if (SortUtils::trace) {
		cout << "Considered element: " << cons << endl;
		SortUtils::print(data, left, right);
	}
}