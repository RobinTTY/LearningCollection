/*  File HashTableActions.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashTableActions contains the functions
to be used to test a hash table implementations.

Reference: Chapter Searching
*/
#include <iostream>
#include "HashTableActions.hpp"

HashTable * HashTableActions::ht = nullptr;

void HashTableActions::printTableContent() {
	cout << ht->toString() << endl;
}

void HashTableActions::fillHashTable()
{
	HashDataImpl * dwk;
	//  A0, B1, J9, L11, P15, T19, Z25
	dwk = new HashDataImpl("A", 0); ht->add(*dwk);
	dwk = new HashDataImpl("B", 1); ht->add(*dwk);
	dwk = new HashDataImpl("J", 9); ht->add(*dwk);
	dwk = new HashDataImpl("L", 11); ht->add(*dwk);
	dwk = new HashDataImpl("P", 15); ht->add(*dwk);
	dwk = new HashDataImpl("T", 19); ht->add(*dwk);
	dwk = new HashDataImpl("Z", 25); ht->add(*dwk);
}
void HashTableActions::doActions(HashTable * table)
{
	ht = table;
	bool working = true;
	while (working) {
		cout << "What action shall be executed next with this table:" << endl;
		cout << "0: Fill table with example from script" << endl;
		cout << "1: add new data" << endl;
		cout << "2: Check if data is contained in table" << endl;
		cout << "3: Remove data from table" << endl;
		cout << "4: Print content of table" << endl;
		cout << "else exit program" << endl;

		int what; cin >> what;
		switch (what) {
		case  0: fillHashTable();  break;
		case  1: addAction();  break;
		case  2: containsAction(); break;
		case  3: removeAction(); break;
		case  4: printTableContent(); break;
		default: working = false;
		}
	}
}
void HashTableActions::addAction() {
	HashDataImpl * data = readData();
	ht->add(*data);
}
void HashTableActions::removeAction() {
	HashDataImpl * data = readData();
	ht->remove(*data);
}
void HashTableActions::containsAction() {
	HashDataImpl * data = readData();
	if (ht->contains(*data))
		cout << "Data IS contained in table" << endl;
	else
		cout << "Data IS NOT contained in table" << endl;
}
HashDataImpl * HashTableActions::readData() {
	string str;
	cout << "Enter uppercase letter for action: ";
	cin >> str;  //Single uppercase letter not checked!
	cout << "Enter key for this letter: ";  int key;
	cin >> key;
	return new HashDataImpl(str, key);
}

