/* File: graph_utils.hpp

Authors: M. Dausmann, J. Koch

Class GraphUtils contains some useful functions
to work with a graph.
Basically it consists of functions that create
graphs as examples to work upon.

Reference: Chapter Graphs

*/
#pragma once
#include "graph.hpp"

//<-graph_utils--
class GraphUtils {
public:
	static bool trace;
	static void chooseOutput();
	static Graph chooseGraph();

	static Vertex selectVertex(const string text, const Vertices vset, bool mustcontain);

	static Graph randomGraph();
	static Graph readGraph();
	static Graph generateGraph();
	static Graph weightedGraphScript();
	static Graph weightedGraphExam(); 
	static Graph weightedICEGraph();
	static Graph adjacencyExercise();
	static Graph weightedGraphWikipedia();
};
//--graph_utils->
