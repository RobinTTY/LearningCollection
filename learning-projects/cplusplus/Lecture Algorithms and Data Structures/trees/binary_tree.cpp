/* File: binary_tree.cpp

Authors: M. Dausmann, J. Koch

Class BinaryTree represents a binary tree, i.e.
a tree with at most two subtrees (left and right).
It can store a value (of type string) in a node.

Reference: Chapter Trees

*/
#include "binary_tree.hpp"

BinaryTree::BinaryTree(string value) : value(value) {
	left = right = nullptr;
}
BinaryTree::BinaryTree(BinaryTree * left, BinaryTree * right, string value)
: value(value), left(left), right(right) {}

BinaryTree::~BinaryTree(){
  delete(left);
  delete(right);
}

string BinaryTree::toString() { return value; }

//<-height--
int BinaryTree::height() {
	int leftHeight = -1, rightHeight = -1;
	if (left != nullptr) 
		leftHeight = left->height();
	if (right != nullptr) 
		rightHeight = right->height();
	if (leftHeight > rightHeight) 
		return leftHeight + 1;
	else 
		return rightHeight + 1;
}
//--height->

//<-node_number--
int BinaryTree::numberOfNodes() {
	BinaryTree * root = this;
	if (root == nullptr) return 0;
	int leftNodes = 0; int rightNodes = 0;
	if (root->left != nullptr)
		leftNodes = root->left->numberOfNodes();
	if (root->right != nullptr)
		rightNodes = root->right->numberOfNodes();
	return 1 + leftNodes + rightNodes;
}
//--node_number->
