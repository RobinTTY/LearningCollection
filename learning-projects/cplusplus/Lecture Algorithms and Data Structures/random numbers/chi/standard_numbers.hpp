/*	File standard_numbers.hpp

Authors: J. Koch, M. Dausmann

This file contains the standard random numbers obtained
from a specific LCG which shall be
prooven according to its quality in generating random numbers.
(Example)

Reference: Chapter Random Numbers

*/
#pragma once
using namespace std;

class StandardNumbers {
	// implement the LCG and the transformation directly
	// lcg = new LCGenerator(2147483647, 16810, 0, 33554433);
	int m = 2147483647;  int a = 16810; int r = 0; int yold = 33554433;
	double nextStandardNumber()
	{	
		long long ynew;
		ynew = ((long long)a*yold + r) % m;
		yold = (int)ynew;
		return (double)yold / (double)m;
	}

public:
	const int Max = 100000;		// number of generated numbers
	double * random_numbers;
	StandardNumbers() {
		random_numbers = new double[Max+1]; // one more for pairs
		for (int i = 0; i < Max + 1; i++)
			random_numbers[i] = nextStandardNumber();
	}
	~StandardNumbers() { delete [] random_numbers; }
};
