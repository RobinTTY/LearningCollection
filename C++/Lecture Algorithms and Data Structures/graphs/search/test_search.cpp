/* File: test_search.cpp

Authors: M. Dausmann, J. Koch

Main program to test the graph traversal algorithms.

Reference: Chapter Graphs

*/
#include <iostream>
#include <limits>
#include "../basics/graphbasics.hpp"
#include "depth_search.hpp"
#include "breadth_search.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

using namespace std;

int chooseAction() {
	char what;
	while (true) {
		cout << "What should be done with this graph:" << endl;
		cout << "(1) Search a vertex using depth-first strategy" << endl;
		cout << "(2) Compute connectivity information" << endl;
		cout << "(3) Search a vertex using breadth-first strategy" << endl;
		cout << "(4) Compute a spanning tree" << endl;
		cout << "(5) Exit program" << endl;
		cin >> what;
		if (!cin) {
			what = 0; cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
		}
		if (what < '1' || what > '5') {
			cout << "Wrong choice:" << what << "! Please select again." << endl;
		}
		else break;
	}
	return atoi(&what);
}

void searchDepthAction(Graph& G) {
	DepthSearch S {G};
	Vertex start = GraphUtils::selectVertex
		("Enter start vertex for search", G.vertices, true);
	Vertex find = GraphUtils::selectVertex
		("Enter vertex to look for", G.vertices, false);
	bool found = S.depthSearch(start, find);
	if (found)
		cout << find.toString() << " is contained in graph." << endl;
	else
		cout << find.toString() << " is not in graph." << endl;
	cout << endl;
}

void connectivityAction(Graph& G) {
	DepthSearch S {G};
	ConnectivityMap connected = S.computeConnectivity();
	cout << "The connectivity components of the given graph " << endl;
	cout << "contains the vertices with the same connection id." << endl;
	cout << connected.toString() << endl << endl;
}

void searchBreadthAction(Graph & G) {
	BreadthSearch BS {G};
	Vertex start = GraphUtils::selectVertex
		("Enter start vertex for search", G.vertices, true);
	Vertex find = GraphUtils::selectVertex
		("Enter vertex to look for", G.vertices, false);
	bool found = BS.breadthSearch(start, find);
	if (found)
		cout << find.toString() << " is contained in graph." << endl;
	else
		cout << find.toString() << " is not in graph." << endl;
	cout << endl;
}

void spanTreeAction(Graph& G) {
	BreadthSearch BS {G};
	Vertex root = GraphUtils::selectVertex
		("Enter root for spanning tree", G.vertices, true);
	Graph spanTree = BS.computeSpanTree(root);
	cout << "A spanning tree of the given graph " << endl;
	cout << "with root " << root.toString() << endl;
	cout << spanTree.toString() << endl << endl;
}

int main() {
	cout << "Program shows depth-first and breadth-first" << endl;
	cout << "traversal algorithms through a graph." << endl;
	GraphUtils::chooseOutput();
	Graph G {GraphUtils::chooseGraph()};
	bool stop = false;
	while (!stop) {
		int choice = chooseAction();
		switch (choice) {
		case 1:
			searchDepthAction(G);
			break;
		case 2:
			connectivityAction(G);
			break;
		case 3:
			searchBreadthAction(G);
			break;
		case 4:
			spanTreeAction(G);
			break;
		default: 
      stop = true;
			break;
		}
	}
	TheEnd;
	return 0;
}



