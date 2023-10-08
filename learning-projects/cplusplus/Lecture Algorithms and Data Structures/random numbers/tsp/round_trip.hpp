/*  File round_trip.hpp

Authors: M. Dausmann, J. Koch

Class RoundTrip is used in TSP algorithms to store
the sequence of points of a trip. It stores only the
N points given, the return to the start point is
added internally in the functions.

Reference: Chapter Random Numbers

*/
#pragma once
#include <string>
#include <vector>
#include "point.hpp"
#include "distance_matrix.hpp"
using namespace std;

//<-round_trip--
class RoundTrip {
	vector<Point> trip;
//--round_trip->
public:
	RoundTrip() {} // default constructor
	RoundTrip(vector<Point> pointset);
	RoundTrip(const RoundTrip & orig);
	Point & operator[] (int index) { return trip[index]; }
	string toString() const;
	int size() const { return trip.size(); }
	double getTripLength(DistanceMatrix & dm);
	RoundTrip swapEdges(unsigned int i, unsigned int j);
	RoundTrip swapPoint(unsigned int i, unsigned int j);
//<-Braces--
	// ...
};
//--Braces->
