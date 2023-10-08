/* File: search_tree.hpp

Authors: M. Dausmann, J. Koch

Class SearchTree represents a binary tree
which stores a key-value-pair in a node.
It is derived from class BinaryTree.

The class provides two main methods:
- to check, whether the tree is ordered
(precondition, that the search works!)
- to determine, whether a key ist stored in the tree.

Reference: Chapter Trees

*/
#pragma once
#include "binary_tree.hpp"

//<-SearchTree--
class SearchTree : public BinaryTree {
public:
	int key;
//--SearchTree->

	bool isOrdered();
	bool search(int key);
	bool searchR(int key); //recursive version

	SearchTree(int key);
	SearchTree(int key, string value);
	SearchTree(SearchTree * left, SearchTree * right, int key);
	SearchTree(SearchTree * left, SearchTree * right, int key, string value);
	string toString() override;
private:
	// to avoid casts use these functions
	SearchTree * getLeft() { return ((SearchTree *)this->left); }
	SearchTree * getRight() { return ((SearchTree *)this->right); }
//<-Brace--
	//...
};
//--Brace->
