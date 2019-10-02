/* File: connectivity_map.hpp

Authors: M. Dausmann, J. Koch

Class ConnectivityMap is used to store the 
connectivity info of a graph: each vertex is
associated to an integer using a map container.
Vertices associated with the same integer value
belong to the same connectivity component.

Reference: Chapter Graphs

*/
#pragma once

#include <map>
#include "../basics/graphbasics.hpp"
//<-connect_map--
class ConnectivityMap {
	map<Vertex, int> connectedComponents;
public:
	void setComponentID(const Vertex& v, const int compId);
	string toString() const;
};
//--connect_map->
