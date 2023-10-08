/* File: edges.hpp

Authors: M. Dausmann, J. Koch

Class Edges represents a set of edges of a graph.
Note that the container set is not used yet 
to implement this class.

Reference: Chapter Graphs

*/
#pragma once

#include <vector>
#include "edge.hpp"

using namespace std;

//<-edges_class--
class Edges {
public:
	vector<Edge> edges;
	Edges() {}
	Edges(string edgelist);
	bool isDirected() const;
	bool isWeighted() const;
	void add(const Edge& edge);
	bool contains(const Edge& edge) const;
	string toString() const;
};
//--edges_class->
