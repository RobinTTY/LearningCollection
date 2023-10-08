/* File: tree_properties.hpp

Authors: M. Dausmann, J. Koch

Class TreeProperties contains some static methods
that determine whether a given tree fulfills properties
like completeness, complete balance and AVL balance. 

Reference: Chapter Trees

*/
#pragma once
#include "binary_tree.hpp"

class TreeProperties {
	static int numberOfLeaves;
	static int level;
	static void countLeaves(BinaryTree * root);
	static bool checkInnerNodes(BinaryTree * node, int height);
public:
	static bool isAVLBalanced(BinaryTree * root);
	static bool isComplete(BinaryTree * root);
	static bool isCompletelyBalanced(BinaryTree * root);
};
