/*  File quicksort.cpp

Authors: J.Koch, M.Dausmann

This file implements the quick sort algorithm.

Reference: Chapter Sorting Algorithms

*/
#include "sort_interface.hpp"

//<-partition--
int QuickSort::partition(int a[], int left, int right)
{
	selectPivot(a, left, right); // selected pivot at a[right]
	int pivot = a[right];
	int i_left = left - 1;
	int i_right = right;
	while (true)
	{
		while (a[++i_left]  < pivot);
		while (a[--i_right] > pivot) 
		    if (i_right == left) break;
		if (i_left >= i_right) break;
		SortUtils::swap(a, i_left, i_right);
	}
	SortUtils::swap(a, i_left, right);
	return i_left;
}
//--partition->

//<-quicksort--
void QuickSort::sort(int a[], int left, int right)
{
	if (right > left)
	{
		int cut = partition(a, left, right);
		QuickSort::sort(a, left, cut - 1);
		QuickSort::sort(a, cut + 1, right);
	}
}
//--quicksort->

void QuickSort::trace(int data[], int left, int right, int part) {
	if (SortUtils::trace) {
		SortUtils::print(data, left, right);
		cout << "Array[" << left << ".." << right << "] ";
		cout << "is partitioned at position " << part << endl;		
	}
}
