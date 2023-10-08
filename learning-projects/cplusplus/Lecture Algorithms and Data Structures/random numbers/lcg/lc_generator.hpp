/*	File lc_generator.hpp

Authors: J. Koch, M. Dausmann

The class LCGenerator implements the 
the mechanism of a linear congruential
generator (LCG) that generates pseudo
random numbers.

The constructor allows to set the parameters.
nextRandomNumber() returns a pseudo random number.
getModulus() returns the the modulus (as set by
the constructor) because this information must be
used when the random numbers shall be transformed
into a different intervall or distribution.

Reference: Chapter Random Numbers

*/
#pragma once
#include <string>
using namespace std;

//<-linkongr_operator--
class LCGenerator {
	int m, a, r, y0;
	int yold;
public:
	LCGenerator() : m(0), a(0), r(0), y0(0) {}
	LCGenerator(int m, int a, int r, int y0);
	int nextRandomNumber();
	int getModulus() { return m; }
	string toString();
};
//--linkongr_operator->
