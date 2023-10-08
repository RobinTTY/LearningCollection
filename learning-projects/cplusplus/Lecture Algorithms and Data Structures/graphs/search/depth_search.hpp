/* File: depth_search.hpp

Authors: M. Dausmann, J. Koch

Class DepthSearch implements two algorithms using the
depth-first strategy to traverse a graph:
search for an element and compute connectivity information.

Reference: Chapter Graphs

*/
#pragma once
#include "../adjacency/adjacency_structure.hpp"
#include "connectivity_map.hpp"
#include "visited_map.hpp"

//<-depth_search1--
class DepthSearch {
//--depth_search1->
	AdjacencyStructure structure;
	VisitedMap visited;
	ConnectivityMap connected;
	int dimension;
	Vertices vert;
	int connectionID;

	void visitVertex(const int id, const Vertex& v);
	void traceVisit(const Vertex& from, const Vertex& to);
	void traceSearch(const Vertex& from, const Vertex& to);
//<-depth_search2--
public:
	DepthSearch(const Graph& graph);
	bool depthSearch(const Vertex& start, const Vertex& lookfor);
	ConnectivityMap computeConnectivity();
};
//--depth_search2->
