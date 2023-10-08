/* File: tree_output.hpp

Authors: M. Dausmann, J. Koch

Class TreeOutput allows to print out a tree
using indentations to show its structure.

Reference: Chapter Trees

*/
#pragma once

#include <string>
#include "binary_tree.hpp"

using namespace std;

class TreeOutput {
	static string spaces;
	static int indent;
	static string outBuffer;

	static void recalcOutBuffer();
	static void printTreeStructure(BinaryTree * node);
public:
	static void printTree(BinaryTree * root); 
};
