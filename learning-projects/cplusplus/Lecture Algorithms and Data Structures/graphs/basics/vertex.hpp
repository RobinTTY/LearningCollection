/* File: vertex.hpp

Authors: M. Dausmann, J. Koch

Class Vertex represents a vertex of a graph.
A vertex is basically identified by its name.

Reference: Chapter Graphs

*/
#pragma once

#include <string>
using namespace std;

//<-vertex_class--
class Vertex {
public:
	string name;
	Vertex(const string& name = "") {
		this->name = name;
	}
	bool operator==(const Vertex& v) const {
		return this->name == v.name;
	}
	bool operator!=(const Vertex& v) const {
		return this->name != v.name;
	}
	bool operator<(const Vertex& other) const {
		return this->name < other.name;
	}
	string toString() const {
		return name;
	}
};
//--vertex_class->
