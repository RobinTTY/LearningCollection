/*  File round_trip.cpp

Authors: M. Dausmann, J. Koch

Class RoundTrip is used in TSP algorithms to store
the sequence of points of a trip. It stores only the
N points given, the return to the start point is
added internally in the functions.

Reference: Chapter Random Numbers

*/
#include <sstream>
#include <cassert>
#include "round_trip.hpp"

RoundTrip::RoundTrip(vector<Point> pointset) 
  : trip(pointset) {}

RoundTrip::RoundTrip(const RoundTrip & orig) 
  : trip(orig.trip) {}

string RoundTrip::toString() const {
	stringstream ss;
	for (unsigned int i = 0; i < trip.size(); i++) {
		ss << trip[i].toString() << " -> ";
	}
	ss << trip[0].toString(); // return to start
	return ss.str();
}

//<-trip_length--
double RoundTrip::getTripLength(DistanceMatrix& dm) 
{
	// Add return to starting point:
	double length = dm.getDistance(trip[trip.size()-1], trip[0]);
	for (unsigned int i = 0; i < trip.size()-1; i++) {
		length += dm.getDistance(trip[i], trip[i+1]);
	}
	return length;
}
//--trip_length->

//<-swap_edges--
RoundTrip RoundTrip::swapEdges(unsigned int i, unsigned int j) {
  assert( i <= trip.size()-3 && j>i+1 && j < trip.size() );
	RoundTrip res(*this); // copy constructor
  // trip[0..i] and trip[j+1..size()] unchanged
	for (unsigned int k = j, kr=i+1; k >= i + 1; k--, kr++) 
    res[kr] = trip[k]; // reverse order of travel
	return res;
}
//--swap_edges->

//<-insert_point--
RoundTrip RoundTrip::swapPoint(unsigned int i, unsigned int j) {
	RoundTrip res(*this); // copy constructor
	if (i < j) {
    // trip[0..i-1] and trip[j+1..size()] unchanged
		for (unsigned int k = i + 1; k <= j; k++) 
      res[k - 1] = trip[k];
		res[j] = trip[i];
	} else {
    // trip[0..j] and trip[i+1..size()] unchanged
		res[j + 1] = trip[i];
		for (unsigned int k = j + 1; k <= i - 1; k++) 
      res[k + 1] = trip[k];
	}
	return res;
}
//--insert_point->




