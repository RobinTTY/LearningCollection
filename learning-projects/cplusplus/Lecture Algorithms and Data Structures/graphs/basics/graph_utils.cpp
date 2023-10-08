/* File: graph_utils.cpp

Authors: M. Dausmann, J. Koch

Class GraphUtils contains some useful functions
to work with a graph.
Basically it consists of functions that create
graphs as examples to work upon.

Reference: Chapter Graphs

*/
#include "graph_utils.hpp"
#include <iostream>
#include <limits>
using namespace std;

bool GraphUtils::trace = false;
void GraphUtils::chooseOutput() {
	int choice;
	cout << "Would you like to have a trace of this run?" << endl;
	cout << "1: Yes, else: No." << endl;
	cin >> choice;
	if (!cin) {
		choice = 0; cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}
	GraphUtils::trace = (choice == 1);
}

Graph GraphUtils::chooseGraph() {
	cout << "What graph should be worked on:" << endl;
	cout << "(1) Standard example from script" << endl;
	cout << "(2) Input of a user defined graph" << endl;
	cout << "(3) Graph from adjacency exercise" << endl;
	cout << "(4) Weighted graph example for Dijkstra's algorithm" << endl;
	cout << "(5) Weighted graph example from examination SS15" << endl;
	cout << "(6) Weighted graph for ICE-Net exercise" << endl;
	cout << "(7) Weighted graph example from Wikipedia" << endl;
	//	cout << "(7) Randomly generated graph" << endl;
	int what;
	cin >> what;
	if (!cin) {
		what = 0; cin.clear(); 
		cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}
  Graph choice {GraphUtils::generateGraph()};
	if (what == 1)
		choice = GraphUtils::generateGraph();
	else if (what == 2)
		choice = GraphUtils::readGraph();
	else if (what == 3)
		choice = GraphUtils::adjacencyExercise();
	else if (what == 4)
		choice = GraphUtils::weightedGraphScript();
	else if (what == 5)
		choice = GraphUtils::weightedGraphExam();
	else if (what == 6)
		choice = GraphUtils::weightedICEGraph();
	else if (what == 7)
		choice = GraphUtils::weightedGraphWikipedia();
  else{
		cout << "Wrong choice." << endl;
		cout << "Standard example will be used." << endl;
  }
	cout << "Basis is the Graph:" << endl;
	cout << choice.toString() << endl;
	return std::move(choice);
}

Vertex GraphUtils::selectVertex(const string text,
	const Vertices vset, bool mustcontain) {
	string vstring;
	if (mustcontain) {
		cout << "Select vertex out of: " << vset.toString() << endl;
	}
	cout << text << ": ";
	cin >> vstring;
	Vertex example {vstring};
	if (mustcontain) {
		if (!vset.contains(example))  // wrong input use default
			example = vset.vertices[0];
	}
	return std::move(example);
}

Graph GraphUtils::randomGraph() {
	cout << "Random choice not yet implemented." << endl;
	cout << "Standard example will be used." << endl;
	return std::move(GraphUtils::generateGraph());
}

Graph GraphUtils::readGraph() {
	string vertlist, edgelist;
	cout << "Enter set of vertices as {Name1,Name2,Name3,...}";
	cin >> vertlist;
	cout << "Enter set of edges as {Vertex1-Vertex2, ...}";
	cin >> edgelist;
	return std::move(Graph(vertlist, edgelist));
}

Graph GraphUtils::generateGraph() {
	string vertlist = "{V0,V1,V2,V3,V4,V5,V6}";
	string edgelist = "{V0-V2,V0-V6,V1-V4,V1-V5,V2-V3,V2-V6,V4-V5}";
	return std::move(Graph(vertlist, edgelist));
}

Graph GraphUtils::weightedGraphScript()
{
	Vertices vertices("{V0,V1,V2,V3,V4,V5,V6,V7}");
	Edges edges;
	//neighbours of V0;
	edges.add(Edge("V0-[3.0]->V1"));
	edges.add(Edge("V0-[5.0]->V2"));

	//neighbours of V1;
	edges.add(Edge("V1-[1.0]->V2"));
	edges.add(Edge("V1-[10.0]->V3"));
	edges.add(Edge("V1-[11.0]->V4"));

	//neighbours of V2;
	edges.add(Edge("V2-[3.0]->V1"));
	edges.add(Edge("V2-[2.0]->V3"));
	edges.add(Edge("V2-[3.0]->V4"));

	//neighbours of V3;
	edges.add(Edge("V3-[2.0]->V4"));
	edges.add(Edge("V3-[7.0]->V5"));
	edges.add(Edge("V3-[12.0]->V6"));

	//neighbours of V4;
	edges.add(Edge("V4-[15.0]->V1"));
	edges.add(Edge("V4-[7.0]->V2"));
	edges.add(Edge("V4-[2.0]->V6"));

	//neighbours of V5;
	edges.add(Edge("V5-[11.0]->V4"));
	edges.add(Edge("V5-[2.0]->V7"));

	//neighbours of V6;
	edges.add(Edge("V6-[3.0]->V5"));
	edges.add(Edge("V6-[2.0]->V7"));

	return std::move(Graph(vertices, edges));
}

Graph GraphUtils::weightedGraphExam()
{
	Vertices vertices("{V0,V1,V2,V3,V4,V5,V6,V7}");
	Edges edges;
	//neighbours of V0;
	edges.add(Edge("V0-[8.0]->V1"));
	edges.add(Edge("V0-[5.0]->V2"));

	//neighbours of V1;
	edges.add(Edge("V1-[3.0]->V2"));
	edges.add(Edge("V1-[8.0]->V3"));
	edges.add(Edge("V1-[7.0]->V4"));

	//neighbours of V2;
	edges.add(Edge("V2-[2.0]->V1"));
	edges.add(Edge("V2-[7.0]->V3"));
	edges.add(Edge("V2-[3.0]->V4"));

	//neighbours of V3;
	edges.add(Edge("V3-[2.0]->V5"));

	//neighbours of V4;
	edges.add(Edge("V4-[9.0]->V1"));
	edges.add(Edge("V4-[5.0]->V2"));
	edges.add(Edge("V4-[7.0]->V3"));
	edges.add(Edge("V4-[8.0]->V5"));
	edges.add(Edge("V4-[3.0]->V6"));

	//neighbours of V5;
	edges.add(Edge("V5-[1.0]->V7"));

	//neighbours of V6;
	edges.add(Edge("V6-[2.0]->V3"));
	edges.add(Edge("V6-[5.0]->V5"));
	edges.add(Edge("V6-[9.0]->V7"));

	return std::move(Graph(vertices, edges));
}

Graph GraphUtils::weightedICEGraph()
{
	Vertices vertices("{H,B,G,L,F,K,S,M,N}");
	Edges edges;
	//neighbours of H;
	edges.add(Edge("H-[1.75]-B"));
	edges.add(Edge("H-[1.80]-G"));

	//neighbours of B;
	edges.add(Edge("B-[2.50]-G"));

	//neighbours of G;
	edges.add(Edge("G-[3.00]-L"));
	edges.add(Edge("G-[1.75]-F"));
	edges.add(Edge("G-[3.50]-K"));

	//neighbours of L;
	edges.add(Edge("L-[3.70]-N"));

	//neighbours of F;
	edges.add(Edge("F-[1.75]-K"));
	edges.add(Edge("F-[1.30]-S"));

	//neighbours of K;
	edges.add(Edge("K-[1.40]-F"));

	//neighbours of S;
	edges.add(Edge("S-[2.25]-M"));
	edges.add(Edge("S-[2.00]-N"));

	//neighbours of M;
	edges.add(Edge("M-[1.00]-N"));

	return std::move(Graph(vertices, edges));
}

Graph GraphUtils::adjacencyExercise() {
	string vertlist = "{A,B,C,D,E}";
	string edgelist = "{A-B,A-E,B-C,B-D,B-E,C-D,C-E,D-E}";
	return std::move(Graph(vertlist, edgelist));
}

Graph GraphUtils::weightedGraphWikipedia()
{
	Vertices vertices("{V1,V2,V3,V4,V5,V6}");
	Edges edges;
	//neighbours of V1;
	edges.add(Edge("V1-[7.0]->V2"));
	edges.add(Edge("V1-[9.0]->V3"));
	edges.add(Edge("V1-[14.0]->V6"));

	//neighbours of V2;
	edges.add(Edge("V2-[7.0]->V1"));
	edges.add(Edge("V2-[10.0]->V3"));
	edges.add(Edge("V2-[15.0]->V4"));

	//neighbours of V3;
	edges.add(Edge("V3-[9.0]->V1"));
	edges.add(Edge("V3-[10.0]->V2"));
	edges.add(Edge("V3-[11.0]->V4"));
	edges.add(Edge("V3-[2.0]->V6"));

	//neighbours of V4;
	edges.add(Edge("V4-[15.0]->V2"));
	edges.add(Edge("V4-[11.0]->V3"));
	edges.add(Edge("V4-[6.0]->V5"));

	//neighbours of V5;
	edges.add(Edge("V5-[6.0]->V4"));
	edges.add(Edge("V5-[9.0]->V6"));

	//neighbours of V6;
	edges.add(Edge("V6-[14.0]->V1"));
	edges.add(Edge("V6-[2.0]->V3"));
	edges.add(Edge("V6-[9.0]->V5"));

	return std::move(Graph(vertices, edges));
}
