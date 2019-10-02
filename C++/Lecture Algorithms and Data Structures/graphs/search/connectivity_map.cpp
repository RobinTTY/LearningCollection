/* File: connectivity_map.hpp

Authors: M. Dausmann, J. Koch

Class ConnectivityMap is used to store the
connectivity info of a graph: each vertex is
associated to an integer using a map container.
Vertices associated with the same integer value
belong to the same connectivity component.

Reference: Chapter Graphs

*/

#include "connectivity_map.hpp"
#include <sstream>
#include <iomanip>


void ConnectivityMap::setComponentID(const Vertex& v, const int compId) {
	connectedComponents[v] = compId;
}

string ConnectivityMap::toString() const {
	stringstream result;
	result << "Connection ID     Vertices" << endl;
	for (auto cursor : connectedComponents)
		result << setw(2) << cursor.second 
		<<     "                 " 
		<< cursor.first.toString() << endl;
	return result.str();
}

