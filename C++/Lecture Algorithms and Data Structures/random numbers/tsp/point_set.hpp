/*  File point_set.hpp

Authors: M. Dausmann, J. Koch

Class PointSet is used in TSP algorithms to store
the set of points to be visited. It provides not
a type of its own, a vector is used to store the
points. But useful functions are implemented here.

Reference: Chapter Random Numbers

*/
#pragma once
#include "point.hpp"

using namespace std;

class PointSet {
public:
	static const int MAX_POINTS; // at most 10 points

	static void printPointset(const string & s, const vector<Point> & pl);
	static vector<Point> readPoints();
	static vector<Point> generatePoints();
	static vector<Point> pointsForStandardExample();
	static vector<Point> pointsForReducedExample();
	static vector<Point> pointsForExampleExamSS15();
	static vector<Point> choosePointset();

	//static vector<Point> pointsForExampleK();
};
