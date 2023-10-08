/* File: graph.hpp

Authors: M. Dausmann, J. Koch

Class Graph represents a graph.
A graph basically consists of a set of vertices
and a set of edges that connects the vertices.

The class provides two methods for convenience:
to obtain the neighbors of a vertex and a 
mapping from vertex to indexes which is used
to build up matrices.

Reference: Chapter Graphs

*/
#pragma once

#include <map>
#include "vertices.hpp"
#include "edges.hpp"

//<-graph_class--
class Graph {
public:
	Vertices vertices;
	Edges edges;
//--graph_class->

	Graph(const Vertices& vertices, const Edges& edges);
	Graph(const string& vertlist, const string& edgelist);

	bool isWeighted() const;
	bool isDirected() const;
	int numVertices() const;
	Vertices neighbors(const Vertex& vertex) const;
	map<Vertex, int> getIndexMapping() const;
	string toString() const;
	static string toString(const map<Vertex, int> index);
//<-graph_class2--
	// ...
};
//--graph_class2->
