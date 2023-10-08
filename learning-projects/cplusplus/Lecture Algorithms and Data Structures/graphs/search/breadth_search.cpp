/* File: breadth_search.cpp

Authors: M. Dausmann, J. Koch

Class BreadthSearch implements two algorithms using the
breadth-first strategy to traverse a graph:
search for an element and compute a spanning tree.

Reference: Chapter Graphs

*/
#include "breadth_search.hpp"
#include <deque>
#include <iostream>
using namespace std;

BreadthSearch::BreadthSearch(const Graph& graph)
	:graph (graph), visited {graph.vertices}
{}
	
//<-breadth_search--
bool BreadthSearch::breadthSearch(const Vertex& start,
		const Vertex& lookfor) {
	deque<Vertex> consider;     // Vertices to be considered
	consider.push_back(start);  // consider start vertex
	while (!consider.empty()) {
		// take first node from deque and visit it
		Vertex node = consider.front(); consider.pop_front();
		if (node == lookfor) return true;
		visited.setVisited(node);
		// consider neighbours of vertex node 
		for (Vertex k : graph.neighbors(node).vertices) {
			if (!visited.isVisited(k)) {
				traceSearch(node, k);	// if vertex k has not been visited
				consider.push_back(k);  // k must be considered later
			}
		}
	}
	return false;
}
//--breadth_search->

//<-span_tree--
Graph BreadthSearch::computeSpanTree(const Vertex& start)
{
	Graph tree=Graph(Vertices(), Edges()); // start with empty spanning tree
	deque<Vertex> consider;     // Vertices to be considered
	consider.push_back(start);  // consider start vertex
	tree.vertices.add(start);   // start belongs to tree
	while (!consider.empty()) {
		// take first node from deque and visit it
		Vertex node	= consider.front(); consider.pop_front();
		visited.setVisited(node);  
		tree.vertices.add(node); // node belongs to tree
		// consider neighbours of vertex node 
		for (Vertex k : graph.neighbors(node).vertices) {
			if ( ! visited.isVisited(k) ) { // if vertex k has not been visited
				traceVisit(node, k);	
				consider.push_back(k);  // k must be considered later
				// if k is in tree, it is already an endpoint of an edge
				// hence k cannot be the endpoint of another edge
				if (tree.vertices.contains(k)) continue;
				tree.vertices.add(k);	// k belongs to tree 
				// and an edge node -> k belongs to the tree
				tree.edges.add(Edge(node, k, true));
			}				
		}
	}
	return std::move(tree);
}
//--span_tree->

void BreadthSearch::traceVisit(const Vertex& from, const Vertex& to)
{
	if (GraphUtils::trace)
		cout << "Visit Edge " << from.toString() << " -> " << to.toString() << endl;
}

void BreadthSearch::traceSearch(const Vertex& from, const Vertex& to)
{
	if (GraphUtils::trace)
		cout << "Checking whether path from node " << from.toString() << " to node " 
         << to.toString() << " exists in Graph" << endl;
}
