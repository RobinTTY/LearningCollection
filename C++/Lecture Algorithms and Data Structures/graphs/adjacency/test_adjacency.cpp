/* File: test_adjacency.cpp

Authors: M. Dausmann, J. Koch

Main program to test some features of the
adjacency information of a graph.

Reference: Chapter Graphs

*/
#include <iostream>
#include "../basics/graphbasics.hpp"
#include "adjacency_structure.hpp"
#include "adjacency_matrix.hpp"
#include "adjacency_relation.hpp"
#include "weight_matrix.hpp"
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

bool testbasics = false; 
// true if functions should be tested with small data
// from the basic tests (for development purposes).
void testBasics();

int main() {
	cout << "Program shows adjacency and reachability matrix." << endl;
	testBasics();

	Graph G {GraphUtils::chooseGraph()};

	AdjacencyStructure AS(G);
	cout << "Ajacency Structure of this Graph:" << endl;
	cout << AS.toString() << endl;

	AdjacencyMatrix A(G);
	cout << "Ajacency Matrix of this Graph:" << endl;
	cout << A.toString() << endl;

	AdjacencyRelation R(G);
	AdjacencyRelation TC = R.transitiveClosure();
	cout << "Reachablity Matrix of this Graph:" << endl;
	cout << TC.toString() << endl;

	cout << "What power of the Adjacency Matrix:";
	int k;
	cin >> k;
	AdjacencyMatrix P = A.power(k);
	cout << k << "th power of Adjacency Matrix is:" << endl;
	cout << P.toString() << endl;

	if (G.isWeighted()) {
		WeightMatrix * WM = new WeightMatrix(G);
		cout << "Weight Matrix of this Graph:" << endl;
		cout << WM->toString() << endl;
	}

  TheEnd; 
	return 0;
}

void testBasics() {
	if (!testbasics) return;
	cout << "Starting the adjacency function tests" << endl;
	// nondirected, nonweighted
	Vertex V1("V1");
	Vertex V2("V2");
	Vertex V3("V3");
	Vertices V;
	V.add(V1);
	V.add(V2);
	V.add(V3);
	Edge E11(V1, V2);
	Edge E12(V1, V3);
	Edges E1;
	E1.add(E11);
	E1.add(E12);
	Graph G1(V, E1);
	cout << "Graph G1: " << endl;
	cout << G1.toString() << endl;

	AdjacencyStructure AS1 (G1);
	cout << "Adjacency Structure AS1: " << endl;
	cout << AS1.toString() << endl;

	AdjacencyMatrix AM1(G1);
	cout << "Adjacency Matrix AM1: " << endl;
	cout << AM1.toString() << endl;

	// directed, nonweighted
	Edge E21(V1, V2, true);
	Edge E22(V1, V3, true);
	Edges E2;
	E2.add(E21);
	E2.add(E22);

	Graph G2(V, E2);
	cout << "Graph G2: " << endl;
	cout << G2.toString() << endl;

	AdjacencyStructure AS2(G2);
	cout << "Adjacency Structure AS2: " << endl;
	cout << AS1.toString() << endl;

	AdjacencyMatrix AM2(G2);
	cout << "Adjacency Matrix AM2: " << endl;
	cout << AM2.toString() << endl;

	// directed, weighted
	Edge E31(V1, V2, 47.11, true);
	Edge E32(V1, V3, 0.815, true);
	Edges E3;
	E3.add(E31);
	E3.add(E32);

	Graph G3(V, E3);
	cout << "Graph G3: " << endl;
	cout << G3.toString() << endl;

	AdjacencyStructure AS3(G3);
	cout << "Adjacency Structure AS3: " << endl;
	cout << AS3.toString() << endl;

	AdjacencyMatrix AM3(G3);
	cout << "Adjacency Matrix AM3: " << endl;
	cout << AM3.toString() << endl;
	WeightMatrix WM3(G3);
	cout << "Weight Matrix WM3: " << endl;
	cout << WM3.toString() << endl;


	// basic adjacency functions
	cout << "Adjacency Matrix: " << endl;
	cout << AM1.toString() << endl;
	AdjacencyMatrix P = AM1.power(4);
	cout << "4th power of Adjacency Matrix is:" << endl;
	cout << P.toString() << endl;
	cout << "Adjacency Matrix: " << endl;
	cout << AM1.toString() << endl;

	cout << "Adjacency Relation: " << endl;
	AdjacencyRelation AR1 {G1};
	cout << AR1.toString() << endl;
	cout << "Reachability Matrix: " << endl;
	AdjacencyRelation reachables = AR1.transitiveClosure();
	cout << reachables.toString() << endl;

	cout << "End of the adjacency function tests" << endl;
  TheEnd; 
	exit(0);
}
