/* File: adjacency_structure.hpp

Authors: M. Dausmann, J. Koch

Class AdjacencyStructure represents the adjacency information
of a graph as a list of neighbours of each vertex.

Reference: Chapter Graphs

*/
#pragma once

#include <map>
#include "../basics/graphbasics.hpp"
using namespace std;

//<-adjacency_struct--
class AdjacencyStructure {
public:
	map<Vertex, Vertices> adj_structure;
//--adjacency_struct->
	AdjacencyStructure(const Graph& graph);
	string toString() const;
//<-adjacency_struct2--
	// ...
};
//--adjacency_struct2->
