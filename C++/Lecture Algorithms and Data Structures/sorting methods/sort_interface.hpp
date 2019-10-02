/*  File sort_interface.cpp

Authors: J.Koch, M.Dausmann

Class SortInterface defines the interface
for the sorting algorithms.

This file contains the declaration of the
individual algorithms as derived classes
of the sorting interface.

In addition, in this file is the declaration
of the class SortUtils providing useful functions
for the sorting algorithms.

*/
#pragma once
#include <iostream>
using namespace std;

//<-sortinterface--
class SortInterface {
public: virtual
	// data[] array to be sorted in index range [left,right]
	// Result: Array data[] is sorted.
	void sort(int data[],	int left, int right) = 0;
  virtual ~SortInterface(){}
};
//--sortinterface->

class SortUtils {
public:
	static bool trace;

	static void swap(int a[], int left, int right);

	static void print(int a[], int left, int right);

	static int * copy(int a[], int left, int right);
};

class SelectionSort : public SortInterface {
public:
	void sort(int data[], int left,	int right) override;
private:
	void trace(int data[], int left, int right, int part);
};

class QuickSort : public SortInterface {
public:
	void sort(int data[], int left, int right) override;
	int partition(int a[], int left, int right);
	virtual void selectPivot(int a[], int left, int right) {}
	// if different strategies shall be used, this method can be 
	// overridden. Purpose is to select a pivot element 
	// and to put it to the rigth most position.
private:
	void trace(int data[], int left, int right, int part);
};

class QuickSortRandom : public QuickSort {
public:
	void selectPivot(int a[], int left, int right) override;
};

class MergeSort : public SortInterface {
public:
	void sort(int data[], int left, int right) override;
	// Zipper:
	void merge(int a[], int left, int mid, int right);
private:
	static int recursionDepth;
	void trace_in(int data[], int left, int right);
	void trace_out(int data[], int left, int right);
};

class BubbleSort : public SortInterface {
public:
	void sort(int data[], int left, int right) override;
private:
	void trace(int data[], int left, int right, int bubble);
};

class BubbleSortImproved : public BubbleSort {
public:
	void sort(int data[], int left, int right) override;
};

class InsertionSort : public SortInterface {
public:
	void sort(int data[], int left, int right) override;
private:
	void trace(int data[], int left, int right, int cons);
};
