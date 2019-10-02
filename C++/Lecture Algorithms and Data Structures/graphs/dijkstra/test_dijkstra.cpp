/* File: test_dijkstra.cpp

Authors: M. Dausmann, J. Koch

Main program to test Dijkstra's Algorithm and
Dijkstra's Tableau on different graphs.

Reference: Chapter Graphs

*/
#include <iostream>
#include "route.hpp"
#include "../basics/graphbasics.hpp"
#include "dijkstra_algorithm.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int main()
{
	cout << "Computation of a minimal route with Dijkstra's Algorithm" << endl;
	cout << "========================================================" << endl << endl;
	GraphUtils::chooseOutput();  // trace or not
	Graph graph {GraphUtils::chooseGraph()};
	cout << endl << endl;
	if (!graph.isWeighted()) {
		cout << "Sorry, wrong choice, graph must be weighted!" << endl;
		TheEnd; return 0;
	}
	Vertex S = GraphUtils::selectVertex 
		("Start of route",graph.vertices,true);
	Vertex E = GraphUtils::selectVertex
		("End of route", graph.vertices, true);
	cout << "The algorithm will compute a route" << endl;
	cout << "from " << S.toString() << " to " << E.toString();
	cout << endl << endl;

	DijkstraAlgorithm algo {graph};
	Route route = algo.dijkstraAlgorithm(S, E);

	cout << "The computed minimal route is:" << endl;
	cout << route.toString() << endl;
	cout << "Its length is: " << algo.lengthOfRoute(E) << endl;
	cout << endl;
	cout << "Now follows the contents of the Dijkstra Tableau:" << endl;
	GraphUtils::trace = true;
	algo.printTable();
	
	TheEnd;
	return 0;
}
