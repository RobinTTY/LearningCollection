/* File: dijkstra_tableau.cpp

Authors: M. Dausmann, J. Koch

Class DijkstraTableau contains the data structures
used by Dijkstra's Algorithm to compute a minimal route
commonly known as Dijkstra's Tableau.

Reference: Chapter Graphs

*/
#include "dijkstra_tableau.hpp"
#include <sstream>
#include <iomanip>

const double DijkstraTableau::DINFINITY = 
	numeric_limits<double>::infinity();

DijkstraTableau::DijkstraTableau(Vertices vertices) 
	: vertices(vertices) {
	Vertex nopred;
	for (Vertex v : vertices.vertices) {
		distance[v] = DINFINITY;
		predecessor[v] = nopred;
		finished[v] = false;
	}
}

string DijkstraTableau::toString() {
	stringstream stst;
	for (Vertex v : vertices.vertices) {
		stst << "distance[" << v.toString() << "] = ";
		stst << setw(7) << distance[v] << "   from: ";
		stst << predecessor[v].toString() << "    ";
		if (finished[v] == true)
			stst << "(finished)" << endl;
		else
			stst << "(not finished)" << endl;
	}
	stst << endl;
	return stst.str();
}
