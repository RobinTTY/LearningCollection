/* File: visited_map.cpp

Authors: M. Dausmann, J. Koch

Class VisitedMap is used by graph traversing algorithms
to store, whether a vertex has already been visited.
Thus multiple visits of the same vertex can be avoided
and in consequence the algorithm cannot loop forever.

Reference: Chapter Graphs

*/
#include "visited_map.hpp"
#include <sstream>


VisitedMap::VisitedMap(const Vertices& list) {
	for (Vertex cursor : list.vertices)
		visited[cursor] = false;
}

void VisitedMap::clear() {
	for (pair<Vertex,bool> cursor : visited)
		visited[cursor.first] = false;
}

void VisitedMap::setVisited(const Vertex& v) {
	visited[v] = true;
}

bool VisitedMap::isVisited(const Vertex& v) {
	return visited[v];
}

string VisitedMap::toString() const {
	stringstream result;
	result << "Visited vertices of this Graph:" << endl;
	for (auto cursor : visited)
		result << cursor.first.toString() << ":    "
		<< cursor.second << endl;
	return result.str();
}

