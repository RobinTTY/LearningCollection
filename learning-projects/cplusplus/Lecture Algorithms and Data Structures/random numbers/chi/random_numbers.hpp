/*	File random_numbers.hpp

Authors: J. Koch, M. Dausmann

This file contains the random numbers obtained from
the digits of PI. These numbers shall be prooven
with respect to their quality as random numbers.
(Exercise)

Reference: Chapter Random Numbers

*/
#pragma once
using namespace std;

class RandomNumbers {
public:
	const int Max = 50;		// number of generated digits
	const int digits = 10;  // number of possible digits
	static int random_numbers[50+1];
			// one more digit is used to build 50 pairs
	RandomNumbers() {}
};
