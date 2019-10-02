/* File: dijkstra_algorithm.cpp

Authors: M. Dausmann, J. Koch

Class DijkstraAlgorithm contains the implementation
of Dijkstra's Algorithm to compute a minimal route
through a graph from a starting vertex to an end vertex.

Reference: Chapter Graphs

*/

#include "dijkstra_algorithm.hpp"
#include <iostream>

DijkstraAlgorithm::DijkstraAlgorithm(const Graph& G)
: graph(G), table(G.vertices), weights(G) 
{}

//<-dijkstra_min--
Vertex DijkstraAlgorithm::minimalDistance() {
	Vertex i;
	double min = DijkstraTableau::DINFINITY;
	for (Vertex j : table.vertices.vertices)
	{
		if ( !table.finished[j] && table.distance[j] < min )
		{
			i = j;
			min = table.distance[i];
		}
	}
	return i;
}
//--dijkstra_min->

//<-dijkstra_route--
Route DijkstraAlgorithm::computeRoute(const Vertex& S, const Vertex& E)
{
	Route route;
	Vertex next = E;
	route.push_front(next);
	while (S != next)
	{
		next = table.predecessor[next];
		route.push_front(next);
	}
	return route;
}
//--dijkstra_route->

//<-dijkstra_distances--
void DijkstraAlgorithm::recomputeDistances(const Vertex& next)
{
	Vertices neighbors = graph.neighbors(next);
	for (Vertex V : neighbors.vertices)
	{
		if (!table.finished[V]) {
			double dist = weights.getWeight(next, V);
			if (table.distance[next] + dist < table.distance[V])
			{
				table.distance[V] = table.distance[next] + dist;
				table.predecessor[V] = next;
			}
		}
	}
}
//--dijkstra_distances->

//<-dijkstra_algorithm--
Route DijkstraAlgorithm::dijkstraAlgorithm 
		(const Vertex& S, const Vertex& E) {
	Vertex next = S;
	table.distance[next] = 0.0; table.finished[next] = true;
	printTable();
	while ( next != E )
	{
		recomputeDistances(next);
		next = minimalDistance(); table.finished[next] = true;
		printTable();
	}
	return computeRoute(S, E);
}
//--dijkstra_algorithm->

//<-dijkstra_length--
double DijkstraAlgorithm::lengthOfRoute(const Vertex& E) {
	return table.distance[E];
}
//--dijkstra_length->

void DijkstraAlgorithm::printTable() {
	if (GraphUtils::trace) cout << table.toString() << endl;
}





