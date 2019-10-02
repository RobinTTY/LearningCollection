/*	File lc_generator.cpp

Authors: J. Koch, M. Dausmann

The class LCGenerator implements the
the mechanism of a linear congruential
generator (LCG) that generates pseudo
random numbers.

Reference: Chapter Random Numbers

*/
#include <sstream>
#include "lc_generator.hpp"

using namespace std;

LCGenerator::LCGenerator(
		int m, int a, int r, int y0)
		: m(m), a(a), r(r), y0(y0) {
		yold = y0;
}

//<-linkongr_rekursion--
int LCGenerator::nextRandomNumber()
{
		long long ynew;
		ynew = ((long long)a*yold + r) % m;
		yold = (int)ynew;
		return yold;
}
//--linkongr_rekursion->

string LCGenerator::toString() {
		stringstream str;
		str << "LCG(";
		str << m << ", " << a << ", " << r << ", " << y0;
		str << ")";
		return str.str();
}
