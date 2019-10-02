/*  File sort_utils.cpp

Authors: J.Koch, M.Dausmann

Class SortUtils contains utility functions to
support sorting algorithms.

Reference: Chapter Sorting Algorithms

*/

#include "sort_interface.hpp"
#include <iostream>
using namespace std;


bool SortUtils::trace = false;

//<-swap_begin--
void SortUtils::swap(int a[], int left, int right)
{
	int tmp = a[left];
	a[left] = a[right];
	a[right] = tmp;
}
//--swap_end->

void SortUtils::print(int a[], int left, int right)
{
	for (int i = left; i < right; i++)
		cout << a[i] << ',';
	cout << a[right] << endl;
}

int * SortUtils::copy(int a[], int left, int right) 
{
	int * b = new int[right + 1];
	for (int l = left; l <= right; l++)
		b[l] = a[l];
	return b;
}
