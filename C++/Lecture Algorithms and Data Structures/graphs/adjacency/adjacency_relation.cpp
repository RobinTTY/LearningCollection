/* File: adjacency_relation.cpp

Authors: M. Dausmann, J. Koch

Class AdjacencyRelation represents the adjacency information
of a graph as a boolean matrix:
vertex A is related to vertex B, if there is an
edge starting in A and ending in B.

In order to index the matrix, a mapping from
vertex to integer is used obtained from the graph.

This class contains a method to compute transitive closure
of the relation using Warshall's algorithm.
In the context of a graph the transitive closure
can be seen as a reachability matrix.

Reference: Chapter Graphs

*/
#include "adjacency_relation.hpp"
#include <sstream>
#include <iomanip>
#include <map>
using namespace std;

AdjacencyRelation::AdjacencyRelation(const Graph& graph){
	dimension = graph.numVertices();
	index = graph.getIndexMapping();
	bool isDirected = graph.isDirected();
	// initialize matrix
	matrix = new bool*[dimension];
	for (int i = 0; i < dimension; i++)
		matrix[i] = new bool[dimension];
	for (int i = 0; i < dimension; i++)
	  for (int j = 0; j < dimension; j++)
		  matrix[i][j] = false;
	// fill matrix
	Edges edges = graph.edges;
	for (unsigned int i = 0; i < edges.edges.size(); i++) {
		int s = index[edges.edges[i].start];
		int e = index[edges.edges[i].end];
		matrix[s][e] = true;
		if (!isDirected) matrix[e][s] = true;
	}
}

AdjacencyRelation::AdjacencyRelation(const AdjacencyRelation& ar){
	this->dimension = ar.dimension;
	this->index = ar.index;
	// copy matrix
	matrix = new bool*[dimension];
	for (int i = 0; i < dimension; i++)
		matrix[i] = new bool[dimension];
	for (int i = 0; i < dimension; i++)
	  for (int j = 0; j < dimension; j++)
		  matrix[i][j] = ar.matrix[i][j];
}

string AdjacencyRelation::toString() const {
	stringstream ss;
	ss << Graph::toString(index);
	for (int i = 0; i < dimension; i++) {
		for (int j = 0; j < dimension; j++)
			ss << setw(2) << matrix[i][j] << " ";
		ss << endl;
	}
	return ss.str();
}

// compute the reflexive-transitive closure of this relation
// using Warshall's algorithm
//<-warshall--
AdjacencyRelation AdjacencyRelation::transitiveClosure() const
{
	AdjacencyRelation R {*this};
	int dim = dimension;
	for (int i = 0; i < dim; i++) {
		R.matrix[i][i] = 1; // node i is adjacent to itself
		for (int j = 0; j < dim; j++)
			if (R.matrix[j][i])
				for (int k = 0; k < dim; k++)
					R.matrix[j][k] = R.matrix[j][k] || R.matrix[i][k];
	}
	return R;
}
//--warshall->
