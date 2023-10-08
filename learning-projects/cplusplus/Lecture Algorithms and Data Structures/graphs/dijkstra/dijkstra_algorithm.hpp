/* File: dijkstra_algorithm.hpp

Authors: M. Dausmann, J. Koch

Class DijkstraAlgorithm contains the implementation 
of Dijkstra's Algorithm to compute a minimal route 
through a graph from a starting vertex to an end vertex.

Reference: Chapter Graphs

*/
#pragma once
#include "dijkstra_tableau.hpp"
#include "../adjacency/weight_matrix.hpp"
#include "route.hpp"

//<-dijkstra_class--
class DijkstraAlgorithm {
	const Graph& graph;
	DijkstraTableau table;
	WeightMatrix weights;

	Vertex minimalDistance();
	Route computeRoute(const Vertex& S, const Vertex& E);
	void recomputeDistances(const Vertex& next);
public:
	DijkstraAlgorithm(const Graph& G);
	Route dijkstraAlgorithm(const Vertex& S, const Vertex& E);
	double lengthOfRoute(const Vertex& E);
	void printTable();
};
//--dijkstra_class->
