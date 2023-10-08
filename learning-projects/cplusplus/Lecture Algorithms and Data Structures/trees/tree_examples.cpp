/* File: tree_examples.cpp

Authors: M. Dausmann, J. Koch

Class TreeExamples contains the construction
of certain trees for testing the algorithms.
The examples are taken from script, exercises etc.
and show different properties for testing.

Reference: Chapter Trees

*/
#include "tree_examples.hpp"
#include <iostream>

using namespace std;

BinaryTree * TreeExamples::selectTree() {
	cout << "Select the tree to be treated:" << endl;
	cout << "(1) Binary tree from script with multiple values" << endl;
	cout << "(2) Binary tree from script with multiple letters" << endl;
	cout << "(3) Binary tree from exercises" << endl;
	cout << "(4) List like binary tree" << endl;
	cout << "(5) Complete binary tree" << endl;
	cout << "(6) Search tree example from script" << endl;
	cout << "(7) AVL-balanced search tree multiple keys from exercise" << endl;
	cout << "(8) Complete search tree multiple keys from exercise" << endl;
	cout << "(9) Ordered tree of zip codes from exercise" << endl;
	BinaryTree * root;
	int which; cin >> which;
	switch (which) {
	case 1: root = TreeExamples::treeMultipleValues(); break;
	case 2: root = TreeExamples::treeMultipleLetters(); break;
	case 3: root = TreeExamples::treeFromExercise(); break;
	case 4: root = TreeExamples::treeListLike(); break;
	case 5: root = TreeExamples::treeComplete(); break;
	case 6: root = TreeExamples::treeExampleScript(); break;
	case 7: root = TreeExamples::treeExerciseMultikeysAVL(); break;
	case 8: root = TreeExamples::treeExerciseMultikeysBalanced(); break;
	case 9: root = TreeExamples::treeExerciseOrdered(); break;
	default: root = TreeExamples::treeMultipleValues();
	}
	return root;
}

BinaryTree * TreeExamples::treeMultipleValues() {
	BinaryTree * N79 = new BinaryTree("79");
	BinaryTree * N82 = new BinaryTree(N79, nullptr, "82");
	BinaryTree * N78a = new BinaryTree("78");
	BinaryTree * N67 = new BinaryTree(nullptr, N78a, "67");
	BinaryTree * N78b = new BinaryTree(N67, N82, "78");
	BinaryTree * N37a = new BinaryTree("37");
	BinaryTree * N37b = new BinaryTree(N37a, nullptr, "37");
	BinaryTree * N15 = new BinaryTree("15");
	BinaryTree * N23 = new BinaryTree(N15, N37b, "23");
	return new BinaryTree(N23, N78b, "56");
}

BinaryTree * TreeExamples::treeMultipleLetters() {
	BinaryTree * T1 = new BinaryTree("T");
	BinaryTree * O1 = new BinaryTree("O");
	BinaryTree * T2 = new BinaryTree(T1, O1, "T");
	BinaryTree * O2 = new BinaryTree(nullptr, T2, "O");
	BinaryTree * H = new BinaryTree("H");
	BinaryTree * L1 = new BinaryTree("L");
	BinaryTree * A = new BinaryTree(H, L1, "A");
	BinaryTree * O3 = new BinaryTree("O");
	BinaryTree * L2 = new BinaryTree(A, O3, "L");
	return new BinaryTree(L2, O2, " ");
}

//<-tree_exercise--
BinaryTree * TreeExamples::treeFromExercise() {
	BinaryTree * n15 = new BinaryTree("15");
	BinaryTree * n32 = new BinaryTree("32");
	BinaryTree * n46 = new BinaryTree("46");
	BinaryTree * n71 = new BinaryTree("71");
	BinaryTree * n79 = new BinaryTree("79");
	BinaryTree * n37 = new BinaryTree(n32, n46, "37");
	BinaryTree * n67 = new BinaryTree(nullptr, n71, "67");
	BinaryTree * n82 = new BinaryTree(n79, nullptr, "82");
	BinaryTree * n78 = new BinaryTree(n67, n82, "78");
	BinaryTree * n23 = new BinaryTree(n15, n37, "23");
	return 	new BinaryTree(n23, n78, "56");
}
//--tree_exercise->

BinaryTree * TreeExamples::treeListLike() {
	BinaryTree * v3 = new BinaryTree("V3");
	BinaryTree * v2 = new BinaryTree(nullptr, v3, "V2");
	BinaryTree * v1 = new BinaryTree(nullptr, v2, "V1");
	return 	v1;
}

BinaryTree * TreeExamples::treeComplete() {
	BinaryTree * b1 = new BinaryTree("B1");
	BinaryTree * b2 = new BinaryTree("B2");
	BinaryTree * b3 = new BinaryTree("B3");
	BinaryTree * b4 = new BinaryTree("B4");
	BinaryTree * v2 = new BinaryTree(b1, b2, "V2");
	BinaryTree * v1 = new BinaryTree(b3, b4, "V1");
	return 	new BinaryTree(v1, v2, "ROOT");
}

SearchTree * TreeExamples::treeExampleScript() {
	SearchTree * N79 = new SearchTree(79);
	SearchTree * N82 = new SearchTree(N79, nullptr, 82);
	SearchTree * N78a = new SearchTree(78);
	SearchTree * N67 = new SearchTree(nullptr, N78a, 67);
	SearchTree * N78b = new SearchTree(N67, N82, 78);
	SearchTree * N37a = new SearchTree(37);
	SearchTree * N37b = new SearchTree(N37a, nullptr, 37);
	SearchTree * N15 = new SearchTree(15);
	SearchTree * N23 = new SearchTree(N15, N37b, 23);
	return new SearchTree(N23, N78b, 56);
}
 
SearchTree * TreeExamples::treeExerciseMultikeysAVL() {
	SearchTree * N81 = new SearchTree(81);
	SearchTree * N91 = new SearchTree(91);
	SearchTree * N93 = new SearchTree(N91, nullptr, 93);
	SearchTree * N89 = new SearchTree(N81, N93, 89);
	SearchTree * N41 = new SearchTree(41);
	SearchTree * N60 = new SearchTree(N41, nullptr, 60);
	SearchTree * N74 = new SearchTree(N60, N89, 74);
	SearchTree * N0 = new SearchTree(0);
	SearchTree * N5 = new SearchTree(5);
	SearchTree * N19 = new SearchTree(19);
	SearchTree * N27 = new SearchTree(27);
	SearchTree * N1 = new SearchTree(N0, N5, 1);
	SearchTree * N13 = new SearchTree(N1, N19, 13);
	SearchTree * N20 = new SearchTree(nullptr, N27, 20);
	SearchTree * N19a = new SearchTree(N13, N20, 19);
	SearchTree * N35 = new SearchTree(N19a, N74, 35);
	return N35;
}

SearchTree * TreeExamples::treeExerciseMultikeysBalanced() {
	SearchTree * N89 = new SearchTree(89);
	SearchTree * N93 = new SearchTree(93);
	SearchTree * N91 = new SearchTree(N89, N93, 91);
	SearchTree * N74 = new SearchTree(74);
	SearchTree * N41 = new SearchTree(41);
	SearchTree * N60 = new SearchTree(N41, N74, 60);
	SearchTree * N81 = new SearchTree(N60, N91, 81);
	SearchTree * N0 = new SearchTree(0);
	SearchTree * N5 = new SearchTree(5);
	SearchTree * N1 = new SearchTree(N0, N5, 1);
	SearchTree * N19 = new SearchTree(19);
	SearchTree * N19a = new SearchTree(N19, nullptr, 19);
	SearchTree * N27 = new SearchTree(27);
	SearchTree * N20 = new SearchTree(N19a, N27, 20);
	SearchTree * N13 = new SearchTree(N1, N20, 13);
	return new SearchTree(N13, N81, 35);
}

SearchTree * TreeExamples::treeExerciseOrdered() {
	SearchTree * PF = new SearchTree(75172, "Pforzheim");
	SearchTree * ST = new SearchTree(70173, "Stuttgart");
	SearchTree * MA = new SearchTree(68309, "Mannheim");
	SearchTree * HD = new SearchTree(MA, ST, 69115, "Heidelberg");
	SearchTree * TU = new SearchTree(HD, nullptr, 72070, "Tuebingen");
	SearchTree * ES = new SearchTree(TU, nullptr, 72323, "Esslingen");
	SearchTree * FR = new SearchTree(79177, "Freiburg");
	SearchTree * OG = new SearchTree(77652, "Offenburg");
	SearchTree * KN = new SearchTree(OG, FR, 78462, "Konstanz");
	SearchTree * KA = new SearchTree(PF, KN, 76133, "Karlsruhe");
	SearchTree * HN = new SearchTree(ES, KA, 74072, "Heilbronn");
	return HN;
}
