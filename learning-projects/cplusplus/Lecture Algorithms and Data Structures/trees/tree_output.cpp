/* File: tree_output.cpp

Authors: M. Dausmann, J. Koch

Class TreeOutput allows to print out a tree
using indentations to show its structure.

Reference: Chapter Trees

*/
#include <iostream>
#include <string>
#include "tree_output.hpp"

using namespace std;

string TreeOutput::spaces;
int TreeOutput::indent;
string TreeOutput::outBuffer;

void TreeOutput::recalcOutBuffer() {
	if (indent > 0)
	{
		outBuffer = spaces.substr(0, indent * 3);
	}
	else outBuffer.clear();
}

void TreeOutput::printTreeStructure(BinaryTree * node) {
	if (node == nullptr) {
		cout << "<NULL>";
		return;
	}
	cout << node->toString() << endl;
	indent++; recalcOutBuffer();
	cout << outBuffer << "L: ";
	printTreeStructure(node->left);
	cout << endl << outBuffer << "R: ";
	printTreeStructure(node->right);
	indent--; recalcOutBuffer();
}

void TreeOutput::printTree(BinaryTree * root) {
	indent = 0;
	spaces = string(30, ' ');
	printTreeStructure(root);
}
