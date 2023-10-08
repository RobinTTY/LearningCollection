/*  File HashTableActions.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashTableActions contains the functions
to be used to test a hash table implementation.

Reference: Chapter Searching
*/
#pragma once
#include "HashTableBasics.hpp"

class HashTableActions {
public:
	static void doActions(HashTable * table);
private:
	static HashTable * ht;
	static void addAction();
	static void removeAction();
	static void containsAction();
	static void printTableContent();
	static void fillHashTable();
	static HashDataImpl * readData();
};
