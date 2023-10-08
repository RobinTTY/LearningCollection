/* File: weight_matrix.hpp

Authors: M. Dausmann, J. Koch

Class WeightMatrix represents the weight information
of a graph as a matrix.

In order to index the matrix, a mapping from
vertex to integer is used obtained from the graph.

Reference: Chapter Graphs

*/
#pragma once

#include "../basics/graphbasics.hpp"
#include <map>

//<-weight_matrix--
class WeightMatrix {
private:
	int dimension;
	double ** weightMatrix; // double[][] weightMatrix
//--weight_matrix->
	map<Vertex, int> index;
public:
	WeightMatrix(const WeightMatrix& wm);
	WeightMatrix(const Graph& graph);
	~WeightMatrix(){
		for (int i = 0; i < dimension; i++)
			delete[](weightMatrix[i]);
		delete[](weightMatrix);
	}
	static const double DINFINITY;
	double getWeight(const Vertex& from, const Vertex& to);
	string toString() const;
//<-weight_matrix2--
	// ...
};
//--weight_matrix2->
