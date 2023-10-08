/*  File HashTableTest.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashTableTest contains the main program 
to test the hash table implementations.

Reference: Chapter Searching
*/
#include <iostream>
#include "HashTableBasics.hpp"
#include "HashTableActions.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int main() {
	cout << "Test program for hash table implementations" << endl;
	cout << "===========================================" << endl;
	cout << endl;
	cout << "Which hash table implementation shall be tested:" << endl;
	cout << "1: Hash table without a collision detection" << endl;
	cout << "2: Hash table with linear exploration" << endl;
	cout << "3: Hash table using lists to avoid collisions" << endl;
	cout << "else exit program" << endl;
	HashTable * testTable;
	int what;
	cin >> what;
    switch (what) {
	  case  1: testTable = new SimpleHashTable(17); break;
	  case  2: testTable = new LinearHashTable(17); break;
	  case  3: testTable = new ListHashTable(17); break;
	  default: cout << "Bye......" << endl; getchar(); return 0;
    }
	HashTableActions::doActions(testTable);
  delete testTable;
  TheEnd;
	return 0;
  }
