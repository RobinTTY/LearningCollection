/*	File random_actions.hpp

Authors: J. Koch, M. Dausmann

Class RandomActions contains functions which show
the possibilities of the builtin generator
of random numbers.

Reference: Chapter Random Numbers

*/
#pragma once
#include <string>
#include <vector>
using namespace std;

class RandomActions {
	static void printNumbers(vector<double> x, string s);
public:
	static void testRandomDoubles(int numbers);
	static void testGaussianValues(int numbers);
	static void randomPermutation(int n, int what);
	static void simulateDice();
};

