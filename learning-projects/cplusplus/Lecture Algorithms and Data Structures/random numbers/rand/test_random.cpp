/*	File test_random.cpp

Authors: J. Koch, M. Dausmann

This is the main program to study the
builtin generator of random numbers.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include <string>
#include <limits>
#include "random_actions.hpp"
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int readANumber(string s) {
	cout << s << endl;
	cout << "Number: ";
	int trials;
	cin >> trials;
	if (!cin) {
		trials = 1; cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}
	return trials;
}

int main()
{
	cout << endl;
	cout << "Program for studying builtin generator of random numbers" << endl;
	cout << "========================================================" << endl;
	cout << endl;

	cout << "What shall be done with the builtin generator?" << endl;
	cout << "1: Generate uniformly distributed double numbers in [0,1)" << endl;
	cout << "2: Generate gaussian distributed double values" << endl;
	cout << "3: Generate int numbers in [0,n] to permute the elements of an array - Algorithm 1" << endl;
	cout << "4: Generate int numbers in [0,n] to permute the elements of an array - Algorithm 2" << endl;
	cout << "5: Generate int numbers in [1,6] to simulate the rolling of a dice" << endl;
	int what;
	cin >> what;
	if (!cin) {
		what = 1; cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}
	int max = 1;
	switch (what) {
	case 1: max = readANumber("How many numbers shall be generated?");
		RandomActions::testRandomDoubles(max); break;
	case 2: max = readANumber("How many numbers shall be generated?");
		RandomActions::testGaussianValues(max); break;
	case 3: // continue to next case
	case 4: max = readANumber("How many numbers shall be permuted?");
		RandomActions::randomPermutation(max, what); break;
	case 5: RandomActions::simulateDice(); break;
	default: RandomActions::testRandomDoubles(max);
	}

	TheEnd;
	return 0;
}
