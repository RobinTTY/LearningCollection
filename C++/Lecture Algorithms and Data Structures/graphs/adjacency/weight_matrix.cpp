/* File: weight_matrix.cpp

Authors: M. Dausmann, J. Koch

Class WeightMatrix represents the weight information
of a graph as a matrix.

In order to index the matrix, a mapping from
vertex to integer is used obtained from the graph.

Reference: Chapter Graphs

*/
#include "weight_matrix.hpp"
#include <sstream>
#include <iomanip>
#include <map>
#include <cassert>
#include <limits>

using namespace std;

const double WeightMatrix::DINFINITY = numeric_limits<double>::infinity();

WeightMatrix::WeightMatrix(const WeightMatrix& wm){
	this->dimension = wm.dimension;
	this->index = wm.index;
	// copy matrix
	weightMatrix = new double*[dimension];
	for (int i = 0; i < dimension; i++)
		weightMatrix[i] = new double[dimension];
	for (int i = 0; i < dimension; i++)
	  for (int j = 0; j < dimension; j++)
	  	weightMatrix[i][j] = wm.weightMatrix[i][j];
}

WeightMatrix::WeightMatrix(const Graph& graph){
	assert(graph.isWeighted());
	dimension = graph.numVertices();
	index = graph.getIndexMapping();
	// initialize matrix
	weightMatrix = new double*[dimension];
	for (int i = 0; i < dimension; i++)
		weightMatrix[i] = new double[dimension];
	for (int i = 0; i < dimension; i++)
	  for (int j = 0; j < dimension; j++)
		  if (i == j)	weightMatrix[i][j] = 0.0;
		  else weightMatrix[i][j] = DINFINITY;
	// fill matrix
	bool isDirected = graph.isDirected();
	Edges edges = graph.edges;
	for (unsigned int i = 0; i < edges.edges.size(); i++) {
		int s = index[edges.edges[i].start];
		int e = index[edges.edges[i].end];
		weightMatrix[s][e] = edges.edges[i].weight;
		if (! isDirected) weightMatrix[e][s] = edges.edges[i].weight;
	}
}

double WeightMatrix::getWeight(const Vertex& from, const Vertex& to) {
	int f = index[from];
	int t = index[to];
	return weightMatrix[f][t];
}

string WeightMatrix::toString() const {
	stringstream ss;
	ss << Graph::toString(index);
	for (int i = 0; i < dimension; i++) {
		for (int j = 0; j < dimension; j++)
		  if (weightMatrix[i][j] == DINFINITY)
			  ss << "  #INF ";
		  else
			  ss << setw(6) << setprecision(2) << fixed << weightMatrix[i][j] << " ";
		  ss << endl;
	}
	return ss.str();
}
