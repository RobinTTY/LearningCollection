/* File: edge.hpp

Authors: M. Dausmann, J. Koch

Class Edge represents on edge of a graph. 
An edge can be undirected or directed and 
can have a weight.

Reference: Chapter Graphs

*/
#pragma once

#include "vertex.hpp"
using namespace std;

//<-edge_class--
class Edge {
public:
	static const double NOWEIGHT;
	Vertex start;
	Vertex end;
	double weight;
	bool isDirected;

	Edge(Vertex start, Vertex end, bool isDirected);
	Edge(Vertex start, Vertex end, double weight = NOWEIGHT, bool isDirected = false);
	Edge(string edge);

	bool isWeighted() const;
	bool operator== (const Edge& e) const;
	bool operator<(const Edge& e) const { return start < e.start; }
	string toString() const;
};
//--edge_class->
