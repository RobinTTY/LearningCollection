/* File: tree_traversals.cpp

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
#include "tree_traversals.hpp"
#include <string>
#include <deque>
using namespace std;

//<-inOrder--
string TreeTraversals::inOrder(BinaryTree * node) {
	string str;
	if (node == nullptr) return "";
	str += inOrder(node->left);
	str += node->toString() + " ";
	str += inOrder(node->right);
	return str;
}
//--inOrder->

//<-postOrder--
string TreeTraversals::postOrder(BinaryTree * node) {
	string str;
	if (node == nullptr) return "";
	str += postOrder(node->left);
	str += postOrder(node->right);
	str += node->toString() + " ";
	return str;
}
//--postOrder->

//<-preOrder--  
string TreeTraversals::preOrder(BinaryTree * node) {
	string str;
	if (node == nullptr) return "";
	str += node->toString() + " ";
	str += preOrder(node->left);
	str += preOrder(node->right);
	return str;
}
//--preOrder->

//<-levelOrder--
string TreeTraversals::levelOrder(BinaryTree * root) {
	string str;
	deque<BinaryTree *> list;
	BinaryTree * node;
	if (root == nullptr) return "";
	list.push_back(root);
	while (!list.empty()) {
		node = list.front(); list.pop_front();
		str += node->toString() + " ";
		if (node->left != nullptr) 
			list.push_back(node->left);
		if (node->right != nullptr) 
			list.push_back(node->right);
	}
	return str;
}
//--levelOrder->
