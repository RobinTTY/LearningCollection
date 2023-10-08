/* File: tree_properties.cpp

Authors: M. Dausmann, J. Koch

Class TreeProperties contains some static methods
that determine whether a given tree fulfills properties
like completeness, complete balance and AVL balance. 

Reference: Chapter Trees

*/
#include <cmath>
#include "tree_properties.hpp"

//<-is_avl--
bool TreeProperties::isAVLBalanced(BinaryTree * root) {
	if (root == nullptr) return true;
	int leftHeight = 0; int rightHeight = 0;
	if (root->left != nullptr) leftHeight = 1 + root->left->height();
	if (root->right != nullptr) rightHeight = 1 + root->right->height();
	if (abs(leftHeight - rightHeight) > 1) return false;
	if (root->left != nullptr)
		if (!isAVLBalanced(root->left)) return false;
	if (root->right != nullptr)
		if (!isAVLBalanced(root->right)) return false;
	return true;
}
//--is_avl->

int TreeProperties::numberOfLeaves = 0;
void TreeProperties::countLeaves(BinaryTree * root) {
	if (root == nullptr) return;
	if (root->isLeaf()) {
		numberOfLeaves++; return;
	}
	if (root->left != nullptr)
		countLeaves(root->left);
	if (root->right != nullptr)
		countLeaves(root->right);
}

bool TreeProperties::isComplete(BinaryTree * root) {
	numberOfLeaves = 0;
	countLeaves(root);
	int height = root->height();
	if (numberOfLeaves == pow(2, height)) return true;
	return false;
}

int TreeProperties::level = 0;
bool TreeProperties::checkInnerNodes(BinaryTree * node, int height) {
	// node must be complete on lower levels
	if (level < height - 1) {
		if (node->left == nullptr) return false;
		if (node->right == nullptr) return false;
	}
	// the two lowest levels need not be checked
	if (level == height - 2) return true;
	// otherwise check the next level
	if (node->left != nullptr) {
		level++;
		if (!checkInnerNodes(node->left, height)) return false;
		level--;
	}
	if (node->right != nullptr) {
		level++;
		if (!checkInnerNodes(node->right, height)) return false;
		level--;
	}
	return true;
}

bool TreeProperties::isCompletelyBalanced(BinaryTree * root) {
	if (root == nullptr) return true;
	int height = root->height();
	if (height == 0 || height == 1) return true;
	level = 0;
	return checkInnerNodes(root, height);
}
