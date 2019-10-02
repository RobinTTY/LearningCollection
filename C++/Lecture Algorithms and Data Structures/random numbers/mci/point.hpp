/*  File point.hpp

Authors: M. Dausmann, J. Koch

Class Point is used in the monte-carlo-simulation
to compute integral values of real functions.

Reference: Chapter Random Numbers

*/
#pragma once

//<-point--
class Point {
public:
	double x, y;
	Point(double x, double y) : x(x), y(y) {}
};
//--point->

