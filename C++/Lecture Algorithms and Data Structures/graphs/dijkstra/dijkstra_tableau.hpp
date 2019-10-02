/* File: dijkstra_tableau.hpp

Authors: M. Dausmann, J. Koch

Class DijkstraTableau contains the data structures
used by Dijkstra's Algorithm to compute a minimal route
commonly known as Dijkstra's Tableau.

Reference: Chapter Graphs

*/
#pragma once
#include <map>
#include <limits>
#include "../basics/graphbasics.hpp"
using namespace std;

//<-dijkstra_tableau--
class DijkstraTableau {
public:
	Vertices vertices;
	map<Vertex, double> distance;
	map<Vertex, Vertex> predecessor;
	map<Vertex, bool> finished;
//--dijkstra_tableau->
	DijkstraTableau(Vertices vertices);
	static const double DINFINITY;
	string toString();
//<-dijkstra_tableau2--
	// ...
};
//--dijkstra_tableau2->
