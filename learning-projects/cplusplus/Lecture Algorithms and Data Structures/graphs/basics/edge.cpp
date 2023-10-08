/* File: edge.cpp

Authors: M. Dausmann, J. Koch

Class Edge represents on edge of a graph.
An edge can be undirected or directed and 
can have a weight.

Reference: Chapter Graphs

*/
#include <sstream>
#include <limits>
#include "edge.hpp"


const double Edge::NOWEIGHT = numeric_limits<double>::infinity();

Edge::Edge(Vertex start, Vertex end, bool isDirected)
		: Edge(start, end, NOWEIGHT, isDirected) 
{}

Edge::Edge(Vertex start, Vertex end, double weight, bool isDirected)
	: start(start), end(end), weight(weight), isDirected(isDirected) 
{}

// Examples: Edge("V1-V2"), Edge("V1->V2"), Edge("V1-[47.11]-V2"), Edge("V1-[47.11]->V2")
Edge::Edge(string edge) {
	//trim not yet implemented to ignore whitespace
	weight = NOWEIGHT;
	isDirected = false;
	string name;
	int first = 0;
	int last;
	last = edge.find('-', first);
	name = edge.substr(first, last - first);
	start = Vertex(name);
	if (edge[last + 1] == '[') {
		first = last + 2;
		last = edge.find(']', first);
		stringstream ss(edge.substr(first, last - first));
		ss >> weight;
		last++; //char should be '-'
	}
	if (edge[last + 1] == '>') {
		isDirected = true; last++;
	}
	first = last + 1;
	name = edge.substr(first, edge.size() - first);
	end = Vertex(name);
}

bool Edge::isWeighted() const {
	return (NOWEIGHT != weight);
}

bool Edge::operator== (const Edge& e) const {
	if (isDirected) {
		return (this->start == e.start) && (this->end == e.end)
			&& (this->weight == e.weight);
	} 
	return (((this->start == e.start) && (this->end == e.end)) ||
		((this->start == e.end) && (this->end == e.start)))
		&& (this->weight == e.weight);
}

string Edge::toString() const {
	stringstream ss;
	ss << start.toString() << "-";
	if (NOWEIGHT != weight) {
		ss << "[" << weight << "]-";
	}
	if (isDirected) {
		ss << ">";
	} 
	ss << end.toString();
	return ss.str();
}

