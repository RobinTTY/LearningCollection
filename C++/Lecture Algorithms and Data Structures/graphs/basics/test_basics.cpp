/* File: test_basics.cpp

Authors: M. Dausmann, J. Koch

Main program to test the basic classes 
used to implement a graph

Reference: Chapter Graphs

*/
#include "graphbasics.hpp"
#include <iostream>
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

//<-graph_test_main--
int main()
{
	Vertex V1("V1");
	Vertex V2("V2");
	Vertex V3("V3");
	Vertices V;
	V.add(V1);
	V.add(V2);
	V.add(V2); // no change
	V.add(V3);
	cout << "Vertices V: " << endl;
	cout << V.toString() << endl;

	// nondirected, nonweighted
	Edge E11(V1, V2);
	Edge E12(V1, V3);
	Edges E1;
	E1.add(E11);
	E1.add(E12);
	cout << "Edges E1: " << endl;
	cout << E1.toString() << endl;
	
	Graph G1(V, E1);
	cout << "Graph G1: " << endl;
	cout << G1.toString();
	cout << G1.toString(G1.getIndexMapping()) << endl;

	// directed, nonweighted
	Edge E21(V1, V2, true);
	Edge E22(V1, V3, true);
	Edges E2;
	E2.add(E21);
	E2.add(E22);

	Graph G2(V, E2);
	cout << "Graph G2: " << endl;
	cout << G2.toString();
	cout << G2.toString(G2.getIndexMapping()) << endl;

	// directed, weighted
	Edge E31(V1, V2, 47.11, true);
	Edge E32(V1, V3, 0.815, true);
	Edges E3;
	E3.add(E31);
	E3.add(E32);

	Graph G3(V, E3);
	cout << "Graph G3: " << endl;
	cout << G3.toString();
	cout << G3.toString(G3.getIndexMapping()) << endl;

	// Constructors using strings
	Vertices V5("{V1,V2,V3}");
	cout << "Vertices V5: " << endl;
	cout << V5.toString() << endl;

	Edge E51("V1-V2");
	Edge E52("V1->V2");
	Edge E53("V1-[1.5]-V2");
	Edge E54("V1-[5.4]->V2");
	cout << "Edge E51: " << endl;
	cout << E51.toString() << endl;
	cout << "Edge E52: " << endl;
	cout << E52.toString() << endl;
	cout << "Edge E53: " << endl;
	cout << E53.toString() << endl;
	cout << "Edge E54: " << endl;
	cout << E54.toString() << endl;
	Edges ES1("{V1-V2,V3->V4,V3-[3.4]->V4}");
	cout << "Edges ES1: " << endl;
	cout << ES1.toString() << endl;

	Graph G4("{V1,V2,V3}", "{V1-V2,V1-V3}");
	cout << "Graph G4: " << endl;
	cout << G4.toString();
	cout << G4.toString(G4.getIndexMapping()) << endl;

  TheEnd; 
	return 0;
}
//--graph_test_main->
