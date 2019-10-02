/*  File LinearHashTable.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class LinearHashTable is a concrete hash table.
It shows the hashing mechanism using a linear
exploration strategy to resolve a collision.

Reference: Chapter Searching
*/
#pragma once
#include "SimpleHashTable.hpp"

//<-hash_table--
class LinearHashTable : public SimpleHashTable {
protected:
	HashData * deleteMarker;
	int startHashValue;
	int hashFunction(int key) override;
	virtual int rehash(int hashValue);
public:
	LinearHashTable(int max);
	~LinearHashTable(){
    for (int i = 0; i < tableSize; i++)
      if (hashTable[i] == deleteMarker)
        hashTable[i] = freeMarker; // not to be deleted in destructor of SimpleHashTable
    delete deleteMarker; 
  }
	void add(HashData & x) override;
	bool contains(HashData & x) override;
	HashData & search(HashData & x) override;
	void remove(HashData & x) override;
	string toString() override;
};
//--hash_table->
