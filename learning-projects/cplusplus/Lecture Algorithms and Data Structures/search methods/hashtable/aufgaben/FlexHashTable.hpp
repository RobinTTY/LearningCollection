/*  File FlexHashTable.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class FlexHashTable is a concrete hash table.
It uses functors for hash and probe functions
so that these can easily be exchanged in order
to test different strategies.

Reference: Chapter Searching
*/
#pragma once
#include "../basics/SimpleHashTable.hpp"
#include "HashFunction.hpp"
#include "ProbeStrategy.hpp"

//<-hash_table--
class FlexHashTable : public SimpleHashTable {
	HashFunction & hf;
	ProbeStrategy & rh;
protected:
	HashData * deleteMarker;
	int startHashValue;
	int hashFunction(int key) override;
public:
	FlexHashTable(int max, HashFunction & hf, ProbeStrategy & rh);
  ~FlexHashTable(){
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
