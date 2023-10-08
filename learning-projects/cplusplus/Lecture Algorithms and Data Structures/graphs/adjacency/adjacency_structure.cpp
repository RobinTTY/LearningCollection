/* File: adjacency_structure.cpp

Authors: M. Dausmann, J. Koch

Class AdjacencyStructure represents the adjacency information
of a graph as a list of neighbours of each vertex.

Reference: Chapter Graphs

*/
#include "../basics/graphbasics.hpp"
#include "adjacency_structure.hpp"
#include <sstream>
#include <iostream>

AdjacencyStructure::AdjacencyStructure(const Graph& graph) {
	auto iterator = graph.vertices.vertices.begin();
	while (iterator != graph.vertices.vertices.end())
	{
		Vertex vertex = *iterator;
		Vertices neighbors = graph.neighbors(vertex);
		adj_structure.insert(make_pair(vertex, neighbors));
		iterator++;
	}
}

string AdjacencyStructure::toString() const {
	stringstream  ss;
	ss << "Adjacency structure:" << endl;
	for (auto vertex : adj_structure) {
		ss << "Neighbors of " << vertex.first.toString()
			<< " : " << vertex.second.toString() << endl;
	}
	return ss.str();
}
