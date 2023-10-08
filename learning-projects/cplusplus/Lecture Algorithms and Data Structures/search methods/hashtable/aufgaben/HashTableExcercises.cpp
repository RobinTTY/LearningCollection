/*  File HashTableExcercises.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashTableExcercises contains the main program
to execute exercises on hash table implementations.

Reference: Chapter Searching
*/

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

#include <iostream>
#include "DivisionHashingTest.hpp"
#include "MultiplyHashingTest.hpp"
#include "DoubleHashingTest.hpp"
#include "TextStatistics.hpp"

int main() {
	cout << "Program to execute exercises on hash table implementations" << endl;
	cout << "==========================================================" << endl;
	cout << endl;
	cout << "Which exercise shall be executed:" << endl;
	cout << "1: Hash table using multiplications in the hash function" << endl;
	cout << "2: Hash table using divisions in the hash function" << endl;
	cout << "3: Hash table using double hashing" << endl;
	cout << "4: Hash table using strings as keys" << endl;
	cout << "5: Hash table using std::hash for strings as keys" << endl;
	cout << "else exit program" << endl;
	int what; cin >> what;
	switch (what) {
	case  1: MultiplyHashingTest::testMultiplyHashing(); break;
	case  2: DivisionHashingTest::testLinearProbing();
		DivisionHashingTest::testQuadraticProbing(); break;
	case  3: DoubleHashingTest::testDoubleHashingExercise(); break;
	case  4: TextStatistics::stdhash = false; 
		TextStatistics::testHashTableWithStrings(); break;
	case  5: TextStatistics::stdhash = true;
		TextStatistics::testHashTableWithStrings(); break;
	default: break;
	}
	cout << endl << "Bye......" << endl; 
	TheEnd;
	return 0;
}
