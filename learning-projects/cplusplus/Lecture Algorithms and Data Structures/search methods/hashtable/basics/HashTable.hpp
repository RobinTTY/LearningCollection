/*  File HashTable.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashTable is an abstract class which mainly
defines the variables and the abstract methods to
work with a hash table.

Reference: Chapter Searching
*/
#pragma once
#include "HashDataImpl.hpp"

//<-hash_table--
class HashTable {
protected:
	int tableSize;
	// hash function to be used
	virtual int hashFunction(int key) = 0;
public:
	// methods working with the table
	virtual void add(HashData & x) = 0;
	virtual bool contains(HashData & x) = 0;
	virtual void remove(HashData & x) = 0;
	virtual ~HashTable() {}
//--hash_table->
	virtual HashData & search(HashData & x) = 0;
	virtual string toString() = 0;
//<-brace--
	// ...
};
//--brace->
