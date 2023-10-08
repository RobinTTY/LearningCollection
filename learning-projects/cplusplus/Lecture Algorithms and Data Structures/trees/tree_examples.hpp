/* File: tree_examples.hpp

Authors: M. Dausmann, J. Koch

Class TreeExamples contains the construction
of certain trees for testing the algorithms.
The examples are taken from script, exercises etc.
and show different properties for testing.

Reference: Chapter Trees

*/
#pragma once
#include "binary_tree.hpp"
#include "search_tree.hpp"

using namespace std;

class TreeExamples {
public:
	static BinaryTree * selectTree();
private:
	static BinaryTree * treeMultipleValues();
	static BinaryTree * treeMultipleLetters();
	static BinaryTree * treeFromExercise();
	static BinaryTree * treeListLike();
	static BinaryTree * treeComplete();
	static SearchTree * treeExampleScript();
	static SearchTree * treeExerciseMultikeysAVL();
	static SearchTree * treeExerciseMultikeysBalanced();
	static SearchTree * treeExerciseOrdered();
};
