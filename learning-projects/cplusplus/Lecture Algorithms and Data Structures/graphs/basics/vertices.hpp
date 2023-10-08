/* File: vertices.hpp

Authors: M. Dausmann, J. Koch

Class Vertices represents a set of vertices of a graph.
Note that the container set is not used yet
to implement this class.

Reference: Chapter Graphs

*/
#pragma once

#include <vector>
#include "vertex.hpp"
using namespace std;

//<-vertices_class--
class Vertices {
public:
	vector<Vertex> vertices;
	Vertices() {}
	Vertices(string vertlist);
	void add(const Vertex& vertex);
	bool contains(const Vertex& vertex) const;
	bool contains(const string& name) const;
	string toString() const;
};
//--vertices_class->
