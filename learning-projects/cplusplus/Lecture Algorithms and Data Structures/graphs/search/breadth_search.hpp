/* File: breadth_search.hpp

Authors: M. Dausmann, J. Koch

Class BreadthSearch implements two algorithms using the
breadth-first strategy to traverse a graph:
search for an element and compute a spanning tree.

Reference: Chapter Graphs

*/
#pragma once

#include "../basics/graphbasics.hpp"
#include "visited_map.hpp"
using namespace std;

//<-breadth_search1--
class BreadthSearch {
//--breadth_search1->
	const Graph& graph;
	VisitedMap visited; 

	void traceVisit(const Vertex& from, const Vertex& to);
	void traceSearch(const Vertex& from, const Vertex& to);
//<-breadth_search2--
public:
	BreadthSearch(const Graph& graph);
	bool breadthSearch(const Vertex& start, const Vertex& lookfor);
	Graph computeSpanTree(const Vertex& start);
};
//--breadth_search2->
