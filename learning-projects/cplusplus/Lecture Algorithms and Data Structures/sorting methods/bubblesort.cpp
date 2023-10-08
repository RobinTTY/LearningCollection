/*	File bubblesort.cpp

Authors: J.Koch, M.Dausmann

This file implements the bubble sort algorithm,
also in this file is an improved version of the
bubble sort algorithm (solution of an exercise).

Reference: Chapter Sorting Algorithms

*/
#include "sort_interface.hpp"

//<-bubble_begin--
void BubbleSort::sort(int a[], int left, int right)
{
	int upto = right;
	for (int i = left; i < right; i++, upto--)
		for (int j = left + 1; j <= upto; j++)
//--bubble_begin->
//<-bubble_stabil--
			if (a[j - 1] > a[j]) {
				SortUtils::swap(a, j - 1, j);
//--bubble_stabil->
//<-bubble_end--
			}
}
//--bubble_end->

void BubbleSort::trace(int data[], int left, int right, int bubble) {
	if (SortUtils::trace) {
		cout << "Element at position " << bubble << " bubbles up: ";
		SortUtils::print(data, left, right);
	}
}

// Improved version of Bubble-Sort (exercise)
//<-bubblesort2--
void BubbleSortImproved::sort(int a[], int left, int right)
{
	int upto = right;
	for (int i = left; i < right; i++, upto--)
	{
		bool noChange = true;
		for (int j = left + 1; j <= upto; j++)
		{
			if (a[j - 1] > a[j])
			{
				SortUtils::swap(a, j - 1, j);
				noChange = false;
			}
		}
		if (noChange)
			break;
	}
}
//--bubblesort2->
