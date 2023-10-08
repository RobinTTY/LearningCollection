/*  File point.hpp

Authors: M. Dausmann, J. Koch

Class Point is used in TSP algorithms to store
the points to be visited. The id is used to
define a point uniquely, see operators == and <.

Reference: Chapter Random Numbers

*/
#pragma once
#include <string>
#include <vector>
using namespace std;

//<-point--
class Point {
public:
	double x, y;
	string id;
	bool operator==(const Point & p) const { return id == p.id; }
	bool operator<(const Point & p) const { return id < p.id; }
	Point(double x, double y, string id) : x(x), y(y), id(id) {}
	string toString() const { return id; }
};
//--point->

