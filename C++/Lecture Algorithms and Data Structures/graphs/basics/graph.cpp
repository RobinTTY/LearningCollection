/* File: graph.cpp

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

#include <sstream>
#include "graph.hpp"

Graph::Graph(const Vertices& vertices, const Edges& edges) {
	this->vertices = vertices;
	this->edges = edges;
}

Graph::Graph(const string& vertlist, const string& edgelist) {
	this->vertices = Vertices(vertlist);
	this->edges = Edges(edgelist);
}

bool Graph::isWeighted() const {
	return edges.isWeighted();
}

bool Graph::isDirected() const {
	return edges.isDirected();
}

int Graph::numVertices() const {
	return vertices.vertices.size();
}

Vertices Graph::neighbors(const Vertex& vertex) const {
	Vertices neighbors;
	if (vertices.contains(vertex)) {
		auto iterator = edges.edges.begin();
		while (iterator != edges.edges.end()) {
			if (iterator->start == vertex) {
				neighbors.add(iterator->end);
			} 
			if (!iterator->isDirected && iterator->end == vertex) {
				neighbors.add(iterator->start);
			} 
			iterator++;
		} 
	} 
	return std::move(neighbors);
}

map<Vertex, int> Graph::getIndexMapping() const {
	map<Vertex, int> index;
	for (int i = 0; i < numVertices(); i++)
		index.insert(make_pair(vertices.vertices[i], i));
	return index;
}

string Graph::toString() const {
	stringstream ss;
	ss << "Graph is ";
	if (!this->isDirected()) {
		ss << "not ";
	} 
	ss << "directed and ";
	if (!this->isWeighted()) {
		ss << "not ";
	} 
	ss << "weighted:" << endl;
	ss << "V=" << vertices.toString() << endl;
	ss << "E=" << edges.toString() << endl;
	return ss.str();
}

string Graph::toString(const map<Vertex, int> index) {
	stringstream ss;
	ss << "Vertices with column/row index: ";
	for (auto cursor : index) {
		ss << cursor.first.name << "(" << cursor.second << ") ";
	}
	ss << endl;
	return ss.str();
}
