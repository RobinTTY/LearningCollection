/* File: tree_testing.cpp

Authors: M. Dausmann, J. Koch

Class TreeTesting contains interactive main
program that allows to select examples of 
binary and search trees and to select the action
to be done on the selected tree.

Reference: Chapter Trees

*/
#include <iostream>
#include <typeinfo>
#include "binary_tree.hpp"
#include "search_tree.hpp"
#include "tree_output.hpp"
#include "tree_traversals.hpp"
#include "tree_properties.hpp"
#include "tree_examples.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

using namespace std;

void searchTree(SearchTree * root);

int main(void)
{
	cout << "This Program shows the structured output of a binary tree" << endl;
	cout << "as well as the effect of some tree traversal algorithms." << endl;
	cout << "Important properties of a binary tree are checked." << endl;
	cout << "If the selected tree is a search tree, its order is checked" << endl;
	cout << "and one can search the tree to see if it contains some keys." << endl;
	cout << endl;

	BinaryTree * root = TreeExamples::selectTree();

	cout << "Structured output of the tree:" << endl;
	TreeOutput::printTree(root); cout << endl;

	cout << "The tree has height: " << root->height() << endl;

	cout << "The tree has " << root->numberOfNodes();
	cout << " nodes." << endl;

	cout << "The tree is ";
	if (!TreeProperties::isComplete(root)) cout << "not ";
	cout << "complete." << endl;

	cout << "The tree is ";
	if (!TreeProperties::isCompletelyBalanced(root)) cout << "not ";
	cout << "completely balanced." << endl;

	cout << "The tree is ";
	if (!TreeProperties::isAVLBalanced(root)) cout << "not ";
	cout << "AVL balanced." << endl;
	
	cout << endl;
	cout << "Inorder traversal produces:" << endl;
	cout << TreeTraversals::inOrder(root);

	cout << endl << endl;
	cout << "Preorder traversal produces:" << endl;
	cout << TreeTraversals::preOrder(root);

	cout << endl << endl;
	cout << "Postorder traversal produces:" << endl;
	cout << TreeTraversals::postOrder(root);

	cout << endl << endl;
	cout << "Levelorder traversal produces:" << endl;
	cout << TreeTraversals::levelOrder(root);
	cout << endl << endl;

	if (typeid (*root) == typeid (SearchTree)) {
		cout << "The selected tree is a search tree." << endl;
		SearchTree * stroot = dynamic_cast<SearchTree*> (root);
		bool ordered = stroot->isOrdered();
		cout << "The tree is ";
		if (!ordered) cout << "not ";
		cout << "ordered." << endl;
		if (ordered) {
			searchTree(stroot);
		}
	}
	else
		cout << "The selected tree is not a search tree." << endl;

  delete root;

  TheEnd; 
	return 0;
}

void searchTree(SearchTree * root) {
	int lookFor;
	while (true) {
		cout << "Enter key to be searched or -1 for exit: ";
		cin >> lookFor;
		if (lookFor == -1) break;
		cout << "Key " << lookFor << " is ";
		if (!root->search(lookFor)) cout << "not ";
		cout << "contained in tree." << endl;

		cout << "Recursive version of search:" << endl;
		cout << "Key " << lookFor << " is ";
		if (!root->searchR(lookFor)) cout << "not ";
		cout << "contained in tree." << endl;
	}
}

