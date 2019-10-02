/* File: adjacency_matrix.cpp

Authors: M. Dausmann, J. Koch

Class AdjacencyMatrix represents the adjacency information
of a graph as a matrix.

In order to index the matrix, a mapping from
vertex to integer is used obtained from the graph.

Besides a simple matrix multiplication method
this class contains a method to compute
the n-th power of this adjacency matrix.

Reference: Chapter Graphs

*/

#include "adjacency_matrix.hpp"
#include <sstream>
#include <iomanip>
#include <map>
using namespace std;

AdjacencyMatrix::AdjacencyMatrix(const Graph& graph)
{
	dimension = graph.numVertices();
	index = graph.getIndexMapping();
	bool isDirected = graph.isDirected();
	// initialize matrix
	matrix = new int*[dimension];
	for (int i = 0; i < dimension; i++)
		matrix[i] = new int[dimension];
	for (int i = 0; i < dimension; i++)
		for (int j = 0; j < dimension; j++)
			matrix[i][j] = 0;
	// fill matrix
	Edges edges = graph.edges;
	for (unsigned int i = 0; i < edges.edges.size(); i++) {
		int s = index[edges.edges[i].start];
		int e = index[edges.edges[i].end];
		matrix[s][e] = 1;
		if (!isDirected) matrix[e][s] = 1;
	}
}

AdjacencyMatrix::AdjacencyMatrix(const AdjacencyMatrix& am) : dimension {am.dimension}, index {am.index} {
	// copy constructor
	matrix = new int*[dimension];
	for (int i = 0; i < dimension; i++)
		matrix[i] = new int[dimension];
	for (int i = 0; i < dimension; i++)
		for (int j = 0; j < dimension; j++)
			matrix[i][j] = am.matrix[i][j];
}

AdjacencyMatrix::AdjacencyMatrix(AdjacencyMatrix&& am) : dimension {am.dimension}, matrix {am.matrix}, index {am.index} {
	// move constructor
	am.dimension = 0;
  am.index.clear();
	am.matrix = nullptr;
}

string AdjacencyMatrix::toString() const {
	stringstream ss;
	ss << Graph::toString(index);
	for (int i = 0; i < dimension; i++) {
		for (int j = 0; j < dimension; j++)
			ss << setw(2) << matrix[i][j] << " ";
		ss << endl;
	}
	return ss.str();
}

AdjacencyMatrix& AdjacencyMatrix::operator= (const AdjacencyMatrix& B) {
	dimension = B.dimension;
	index = B.index;
	// copy matrix
	int ** mat = new int*[dimension];
	for (int i = 0; i < dimension; i++)
		mat[i] = new int[dimension];
	for (int i = 0; i < dimension; i++)
		for (int j = 0; j < dimension; j++)
			mat[i][j] = B.matrix[i][j];
  // free original matrix 
	for (int i = 0; i < dimension; i++)
		delete[](matrix[i]);
	delete[](matrix);
  matrix = mat;
	return *this;
}

//<-mult_matrix--
AdjacencyMatrix AdjacencyMatrix::operator*
		(const AdjacencyMatrix B) {
	AdjacencyMatrix C {*this}; // just used for the size of C

	for (int i = 0; i < dimension; i++)
		for (int k = 0; k < dimension; k++) {
			C.matrix[i][k] = 0;
			for (int j = 0; j < dimension; j++)
				C.matrix[i][k] += this->matrix[i][j] * B.matrix[j][k];
		}
	return C;
}
//--mult_matrix->

//<-adjazenz_potenz--
AdjacencyMatrix AdjacencyMatrix::power(int k) const
{
	AdjacencyMatrix RES {*this};
	if (k == 0) return RES.to_identity();
	for (int i = 1; i < k; i++)
	{
		RES = RES * (*this);
	}
	return RES;
}
//--adjazenz_potenz->

AdjacencyMatrix& AdjacencyMatrix::to_identity(void) 
{
	for (int i = 0; i < dimension; i++)
		for (int j = 0; j < dimension; j++) 
			matrix[i][j] = (i==j) ? 1 : 0;
	return *this;
}

