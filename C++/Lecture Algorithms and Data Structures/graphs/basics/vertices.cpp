/* File: vertices.cpp

Authors: M. Dausmann, J. Koch

Class Vertices represents a set of vertices of a graph.
Note that the container set is not used yet
to implement this class.

Reference: Chapter Graphs

*/
#include <algorithm>
#include "vertices.hpp"
using namespace std;

// Example: Vertices("{V1,V2,V3}")
Vertices::Vertices(string vertlist) {
	//trim vertlist not yet implemented to ignore whitespace
	if (vertlist.empty()) return;
	string name;
	size_t first = 1;
	size_t last;
	while (true) {
		last = vertlist.find(',', first);
		if (last == string::npos) break;
		name = vertlist.substr(first, last - first);
		if (!contains(name))
			vertices.push_back(Vertex(name));
			first = last + 1;
	}
	name = vertlist.substr(first, vertlist.size() - first -1);
	if (!contains(name))
		vertices.push_back(Vertex(name));
}

void Vertices::add(const Vertex& vertex) {
	if (!contains(vertex))
		vertices.push_back(vertex);
}

bool Vertices::contains(const Vertex& vertex) const {
	auto iterator =
		find(vertices.begin(), vertices.end(), vertex);
	if (iterator == vertices.end()) return false;
	else return true;
}

bool Vertices::contains(const string& name) const {
  for( auto it = vertices.begin(); it < vertices.end(); ++it){
    if( it->name == name ) 
      return true;
  }
  return false;
}

string Vertices::toString() const {
	string string = "{";
	auto iterator = vertices.begin();
	while (iterator != vertices.end()) {
		string += iterator->toString();
		iterator++;
		if (iterator != vertices.end()) string += ",";
	} 
	string += "}";
	return string;
}
