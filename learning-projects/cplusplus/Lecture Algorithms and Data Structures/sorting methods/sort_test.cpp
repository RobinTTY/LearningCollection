/*  File sort_test.cpp

Authors: J.Koch, M.Dausmann

File sort_test contains the main program to test
the sorting algorithms. The user can choose the
algorithm to be used as well as which data
shall be sorted.

Reference: Chapter Sorting Algorithms

*/

#include <iostream>
#include <time.h>
#include "sort_interface.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

using namespace std;

int st_ex[10] = { 0, 8, 15, 47, 11, 0, 0, 7, -10, 8 };

int * generateData(int * howmany)
{
	int number;
	cout << "How many random numbers: ";
	cin >> number; *howmany = number;
	srand((unsigned int)time(NULL));
	int * data = new int[number];
	for (int i = 0; i < number; i++)
		data[i] = rand();
	return data;
}

int * readData(int * howmany)
{
	int number;
	cout << "How many numbers should be sorted: ";
	cin >> number; *howmany = number;
	int * data = new int[number];
	for (int i = 0; i < number; i++) {
		cout << "Number " << i + 1 << ": ";
		cin >> data[i];
	}
	return data;
}

SortInterface & getAlgorithm()
{
	while (true) {
		int choice;
		cout << endl;
		cout << "Choose the sorting algorithm to be used" << endl;
		cout << "Selection-Sort: 1" << endl;
		cout << "Quick-Sort:     2" << endl;
		cout << "Merge-Sort:     3" << endl;
		cout << "Bubble-Sort:    4" << endl;
		cout << "Insertion-Sort: 5" << endl;
		cout << "Selection-Sort with trace:  6" << endl;
		cout << "Quick-Sort with trace:      7" << endl;
		cout << "Merge-Sort with trace:      8" << endl;
		cout << "Bubble-Sort with trace:     9" << endl;
		cout << "Insertion-Sort with trace: 10" << endl;
		cout << "Bubble-Sort improved:      11" << endl;
		cout << "Quick-Sort randomized:     12" << endl;
		cout << "Quick-Sort random/trace:   13" << endl;

		cin >> choice;
		switch (choice) {

		case 1:	return (*(new SelectionSort()));
		case 2: return (*(new QuickSort()));
		case 3: return (*(new MergeSort()));
		case 4: return (*(new BubbleSort()));
		case 5: return (*(new InsertionSort()));
		case 6: SortUtils::trace = true; 
			return (*(new SelectionSort()));
		case 7: SortUtils::trace = true;
			return (*(new QuickSort()));
		case 8: SortUtils::trace = true; 
			return (*(new MergeSort()));
		case 9: SortUtils::trace = true; 
			return (*(new BubbleSort()));
		case 10: SortUtils::trace = true; 
			return (*(new InsertionSort()));
		case 11: return (*(new BubbleSortImproved()));
		case 12: return (*(new QuickSortRandom()));
		case 13: SortUtils::trace = true; 
			return (*(new QuickSortRandom()));
		default:
			cout << "Wrong input, please enter your choice again!" << endl;
			continue;
		}
	}
}

int * getData(int * howmany) {

	cout << endl << "Which data shall be sorted?" << endl;
	cout << "Standard example from script  (1)" << endl;
	cout << "or randomly generated numbers (2)" << endl;
	cout << "or your numbers after input?  (3)" << endl;
	int which;	cin >> which;
	switch (which) {
	case 1:
		*howmany = 10;
		return st_ex;
		break;
	case 2:
		return generateData(howmany);
		break;
	case 3:
		return readData(howmany);
		break;
	default:
		cout << "Wrong choice! Default is standard example." << endl;
		*howmany = 10;
		return st_ex;
	}
}

int main()
{
	int anz;
	int * a = getData(&anz);
	SortInterface & sa = getAlgorithm();
	cout << "Array before sorting:" << endl;
	SortUtils::print(a, 0, anz - 1);
	cout << endl;

	sa.sort(a, 0, anz-1);

	cout << endl << "Array after sorting:" << endl;
	SortUtils::print(a, 0, anz - 1);

  if( a != st_ex) delete[] a;
  delete &sa;
	TheEnd;
	return 0;
}
