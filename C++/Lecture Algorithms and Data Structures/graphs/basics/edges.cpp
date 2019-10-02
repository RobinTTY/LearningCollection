/* File: edges.cpp

Authors: M. Dausmann, J. Koch

Class Edges represents a set of edges of a graph.
Note that the container set is not used yet
to implement this class.

Reference: Chapter Graphs

*/
#include <vector>
#include <algorithm>
#include "edges.hpp"

using namespace std;

// Example: Edges("{V1-V2,V2-V3}"), Edges("{V1->V2,V2->V3}")
Edges::Edges(string edgelist) {
	//trim edgelist not implemented yet to ignore whitespace 
	if (edgelist.empty()) return;
	string edge_str;
	size_t first = 1;
	size_t last;
	while (true) {
		last = edgelist.find(',', first);
		if (last == string::npos) break;
		edge_str = edgelist.substr(first, last - first);
		Edge EdgeToBeAdded(edge_str);
		if (!contains(EdgeToBeAdded))
			edges.push_back(EdgeToBeAdded);
		first = last + 1;
	}
	edge_str = edgelist.substr(first, edgelist.size() - first - 1);
	Edge EdgeToBeAdded(edge_str);
	if (!contains(EdgeToBeAdded))
		edges.push_back(EdgeToBeAdded);
}

// check, if at least one edge is directed 
bool Edges::isDirected() const {
	auto iterator = edges.begin();
	while (iterator != edges.end()) {
		if ((iterator->isDirected))
			return true;
		iterator++;
	}
	return false;
}

// check, if all edges are weighted 
bool Edges::isWeighted() const {
	auto iterator = edges.begin();
	while (iterator != edges.end()) {
		if (!iterator->isWeighted())
			return false;
		iterator++;
	}
	return true;
}

void Edges::add(const Edge& edge) {
	if (!contains(edge))
		edges.push_back(edge);      
}

bool Edges::contains(const Edge& edge) const {
	auto iterator = find(edges.begin(), edges.end(), edge);
	if (iterator == edges.end()) return false;
	else return true;
}

string Edges::toString() const {
	string string = "{";
	auto iterator = edges.begin();
	while (iterator != edges.end()) {
		string += iterator->toString();
		iterator++;
		if (iterator != edges.end()) string += ",";
	}
	string += "}";
	return string;
}
