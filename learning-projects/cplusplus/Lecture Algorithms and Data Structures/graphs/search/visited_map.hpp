/* File: visited_map.hpp

Authors: M. Dausmann, J. Koch

Class VisitedMap is used by graph traversing algorithms
to store, whether a vertex has already been visited.
Thus multiple visits of the same vertex can be avoided
and in consequence the algorithm cannot loop forever.

Reference: Chapter Graphs

*/
#pragma once
#include <map>
#include "../basics/graphbasics.hpp"
using namespace std;

//<-visited_map--
class VisitedMap {
	map<Vertex, bool> visited;
public:
	VisitedMap(const Vertices& list);
	void setVisited(const Vertex& v);
	bool isVisited(const Vertex& v);
	void clear();
	string toString() const;
};
//--visited_map->
