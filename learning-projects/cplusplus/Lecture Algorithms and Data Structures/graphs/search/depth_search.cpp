/* File: depth_search.cpp

Authors: M. Dausmann, J. Koch

Class DepthSearch implements two algorithms using the
depth-first strategy to traverse a graph:
search for an element and compute connectivity information.

Reference: Chapter Graphs

*/
#include "depth_search.hpp"
#include <iostream>

DepthSearch::DepthSearch(const Graph& graph)
	: structure {AdjacencyStructure {graph}}, 
		visited {graph.vertices},
    connected {},
	  dimension {static_cast<int>(vert.vertices.size())},
	  vert {graph.vertices},
	  connectionID {0} 
  {}

//<-visit_vertex--
// prerequisite: prior to call the map visited needs to be cleared
void DepthSearch::visitVertex(const int id, const Vertex& v)
{
	visited.setVisited(v);				// v has been visited
	connected.setComponentID(v, id);	// v belongs to component id
	Vertices& neighbours = structure.adj_structure[v];
  // consider neighbours of v
	for (unsigned int j = 0; j < neighbours.vertices.size(); j++)
	{
		Vertex& k = neighbours.vertices[j];
		if (!visited.isVisited(k)) {    // visit k if not yet visited 
			traceVisit(v, k);
			visitVertex(id, k);
		}
	}
}
//--visit_vertex->

void DepthSearch::traceVisit(const Vertex& from, const Vertex& to)
{
	if (GraphUtils::trace)
		cout << "Visit Edge " << from.toString() << " -> " << to.toString() << endl;
}

void DepthSearch::traceSearch(const Vertex& from, const Vertex& to)
{
	if (GraphUtils::trace)
		cout << "Checking whether path from node " << from.toString() << " to node " 
         << to.toString() << " exists in Graph" << endl;
}

//<-depth_search--
// prerequisite: prior to call the map visited needs to be cleared
bool DepthSearch::depthSearch(const Vertex& start, const Vertex& lookfor)
{
	traceSearch(start, lookfor);
	if (!visited.isVisited(start))	// visit start if not yet visited
	{
		visited.setVisited(start);
		if (start == lookfor) return true;
		Vertices& neighbours = structure.adj_structure[start];
		// consider neighbours of start
		for (unsigned int j = 0; j < neighbours.vertices.size(); j++)
		{
			Vertex& v = neighbours.vertices[j];
			if ( depthSearch(v, lookfor) ) return true;
		}
		return false;
	}
	return false;
}
//--depth_search->

//<-compute_connect--
ConnectivityMap DepthSearch::computeConnectivity() 
{
	visited.clear();
  connectionID = 0;
	for (Vertex v : vert.vertices)		// consider all vertices
		if ( ! visited.isVisited(v))		// visit v if not yet visited
		{
			connectionID++;					// if v has not been visited it
			visitVertex(connectionID, v);   // belongs to a new component
		}
	return connected;
}
//--compute_connect->

