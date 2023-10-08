/*  File mergesort.cpp

Authors: J.Koch, M.Dausmann

This file implements the merge sort algorithm.

Reference: Chapter Sorting Algorithms

*/

#include "sort_interface.hpp"

// zipper from left a[left, mid] 
// and from right a[mid+1, right]
//<-merge_begin--
void MergeSort::merge(int a[], int left, int mid, int right)
{
	// Need a copy, as result should be stored in a:
	int* b = SortUtils::copy(a, left, right);
	// l_i = Index for left part, r_i = Index for right part
	// a_i = Index for result a
	int l_i = left, r_i = mid + 1, a_i = left;
	while (l_i <= mid && r_i <= right) // compare two sides
//--merge_begin->
//<-merge_stabil--
		a[a_i++] = (b[l_i] <= b[r_i]) ? b[l_i++] : b[r_i++];
//--merge_stabil->
//<-merge_end--
	while (l_i <= mid)    // leftover on left side
		a[a_i++] = b[l_i++];
	while (r_i <= right)  // leftover on right side
		a[a_i++] = b[r_i++];
	delete[] b;
}
//--merge_end->

//<-mergesort--
void MergeSort::sort(int a[], int left, int right)
{
	if (right > left)
	{
		int mid = (left + right) / 2;
		MergeSort::sort(a, left, mid);
		MergeSort::sort(a, mid + 1, right);
		merge(a, left, mid, right);
	}
}
//--mergesort->

void MergeSort::trace_in(int data[], int left, int right) {
	if (SortUtils::trace) {
		recursionDepth++;
		cout << "Calling Merge-Sort, recursion depth:" <<
			recursionDepth << endl;
		SortUtils::print(data, left, right);
	}
}
void MergeSort::trace_out(int data[], int left, int right) {
	if (SortUtils::trace) {
		cout << "End of Merge-Sort, recursion depth:" <<
			recursionDepth << endl;
		recursionDepth--;
		SortUtils::print(data, left, right);
	}
}

int MergeSort::recursionDepth = 0;
/*
	if (right == left + 1)
	{
		if (a[left] > a[right]) SortUtils::swap(a, left, right);
	}
	else if (right > left)
*/
