/* File: adjacency_relation.hpp

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
#pragma once

#include "../basics/graphbasics.hpp"
#include <map>
#include <vector>

//<-graph_relation--
class AdjacencyRelation {
private:
	int dimension;
	bool ** matrix; // bool[][]matrix
//--graph_relation->
	map<Vertex, int> index;
public:
	AdjacencyRelation(const Graph& graph);
	AdjacencyRelation(const AdjacencyRelation& ar);
	~AdjacencyRelation(){
		for (int i = 0; i < dimension; i++)
			delete[](matrix[i]);
		delete[](matrix);
	}
	AdjacencyRelation transitiveClosure() const;
	string toString() const;
//<-graph_relation2--
	// ...
};
//--graph_relation2->
