/*	File random_point.hpp

Authors: J. Koch, M. Dausmann

This class implements the generation of
points in the specified rectangle using
a specific random generator:
function rand() of stdlib from C.

Reference: Chapter Random Numbers

*/
#pragma once
#include "point.hpp"
#include <cstdlib>
#include <ctime>

class RandomPoint {
	double minX, maxX;
	double minY, maxY;
	double lengthX, lengthY;
public:
//<-use_c_rand--
	Point generateRandomPoint() {
		double x = (double)rand() / double(RAND_MAX) * lengthX + minX;
		double y = (double)rand() / double(RAND_MAX) * lengthY + minY;
		return Point(x, y);
	}
//--use_c_rand->
	RandomPoint(double minX, double maxX, double minY, double maxY)
		: minX(minX), maxX(maxX), minY(minY), maxY(maxY) {
		lengthX = maxX - minX;
		lengthY = maxY - minY;
		srand((unsigned int)time(NULL)); // use current calender time as seed for rand()-function
	}
};
