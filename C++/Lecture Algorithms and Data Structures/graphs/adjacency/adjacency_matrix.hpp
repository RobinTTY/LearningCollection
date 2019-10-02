/* File: adjacency_matrix.hpp

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
#pragma once

#include "../basics/graphbasics.hpp"
#include <map>
#include <vector>

//<-graph_matrix--
class AdjacencyMatrix {
private:
	int dimension;
	int ** matrix;  // int[][] matrix
//--graph_matrix->
	map<Vertex, int> index;
public:
	AdjacencyMatrix(const Graph& graph);
	AdjacencyMatrix(const AdjacencyMatrix& am);  // copy constructor
	AdjacencyMatrix(AdjacencyMatrix&& am);       // move constructor
	~AdjacencyMatrix(){
		for (int i = 0; i < dimension; i++)
			delete[](matrix[i]);
		delete[](matrix);
	}
	AdjacencyMatrix& operator=(const AdjacencyMatrix& B);
	AdjacencyMatrix operator*(const AdjacencyMatrix B);
	AdjacencyMatrix power(int k) const;
	AdjacencyMatrix& to_identity();
	string toString() const;
//<-graph_matrix2--
	// ...
};
//--graph_matrix2->




