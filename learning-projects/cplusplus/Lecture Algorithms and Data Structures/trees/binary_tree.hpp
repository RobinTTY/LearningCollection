/* File: binary_tree.hpp

Authors: M. Dausmann, J. Koch

Class BinaryTree represents a binary tree, i.e.
a tree with at most two subtrees (left and right).
It can store a value (of type string) in a node.

Reference: Chapter Trees

*/
#pragma once
#include <string>
using namespace std;

//<-BinaryTree--
class BinaryTree {
public:
	string value;
	BinaryTree * left;
	BinaryTree * right;
	BinaryTree(string value);
	BinaryTree(BinaryTree * left, BinaryTree * right, string value);
  virtual ~BinaryTree();
	int height();
	int numberOfNodes();
//--BinaryTree->
	virtual string toString();
	bool isLeaf() {
		return (left == nullptr && right == nullptr);
	}
	// equals, assign, copy, delete???
//<-Brace--
	//...
};
//--Brace->
