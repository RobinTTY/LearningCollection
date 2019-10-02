/* File: route.hpp

Authors: M. Dausmann, J. Koch

Class Route represents a path (route) through a graph.

It is just a wrapper class for a list of vertices.
Note that the sequence of the list is important.

Reference: Chapter Graphs

*/
#pragma once
#include <list>
#include <sstream>
#include "../basics/graphbasics.hpp"

//<-route_class--
class Route {
	list<Vertex> route;
public:
	void push_front(Vertex v) { route.push_front(v); }
	string toString() const {
		stringstream stst;
		for (Vertex next : route)
		{
			stst << next.toString();
			if (!(next == route.back())) stst << " -> ";
		}
		return stst.str();
	}
};
//--route_class->
