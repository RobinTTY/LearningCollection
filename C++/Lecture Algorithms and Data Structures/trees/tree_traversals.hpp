/* File: tree_traversals.hpp

Authors: M. Dausmann, J. Koch

Class TreeTraversals contains the main strategies
to traverse a tree:
- preorder (NLR)
- inorder (LNR)
- postorder (LRN)
and levelorder, the strategy that visits all nodes 
of one level first before going one level deeper. 

Reference: Chapter Trees

*/
#pragma once
#include "binary_tree.hpp"
using namespace std;

class TreeTraversals {
public:
	static string inOrder(BinaryTree * node);
	static string postOrder(BinaryTree * node);
	static string preOrder(BinaryTree * node);
	static string levelOrder(BinaryTree * node);
};
