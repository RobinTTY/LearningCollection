/* File: search_tree.cpp

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
#include "search_tree.hpp"
#include <sstream>

SearchTree::SearchTree(int key)
: BinaryTree(nullptr, nullptr, ""), key(key) {
	this->value = to_string(key); // value is the string of the key
}

SearchTree::SearchTree(int key, string value)
: BinaryTree(nullptr, nullptr, value), key(key) {}

SearchTree::SearchTree(SearchTree * left, SearchTree * right, int key) 
: BinaryTree(left, right, ""), key(key) {
	this->value = to_string(key); // value is the string of the key
}

SearchTree::SearchTree(SearchTree * left, SearchTree * right, 
	int key, string value)
: BinaryTree(left, right, value), key(key) {}

string SearchTree::toString() {
	stringstream str;
	str << "<" << key << "," << value << ">";
	return str.str();
}

//<-search--
bool SearchTree::search(int key) {
		SearchTree * root = this;
		while (root != nullptr) {
			if (key == root->key) return true;
			else if (key < root->key) 
					root = root->getLeft();
			else 
					root = root->getRight();
		} 
		return false;
	}
//--search->

//<-isOrdered--
bool SearchTree::isOrdered() {
	SearchTree * root = this;
	if(root == nullptr) return true; // empty tree is ordered
	if ((root->left == nullptr) && (root->right == nullptr))
		return true;                 // leaf is ordered
	if (root->left != nullptr)       // check left child
		if (root->getLeft()->key > root->key) return false;
	if (root->right != nullptr)      // check right child
		if (root->getRight()->key <= root->key) return false;
	// check left and right trees
	if (root->left != nullptr) 
		if (!root->getLeft()->isOrdered()) return false;
	if (root->right != nullptr)
		if (!root->getRight()->isOrdered()) return false;
	return true;
}
//--isOrdered->

//<-recursive_search--
bool SearchTree::searchR(int key) {
	SearchTree * root = this;
	if(root == nullptr) 
    return false;
	if (key == root->key)
		return true;
	if (key < root->key)
		return root->getLeft()->searchR(key);
	else
		return root->getRight()->searchR(key);
}
//--recursive_search->




