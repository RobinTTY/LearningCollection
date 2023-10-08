/*  File SimpleHashTable.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class SimpleHashTable is a concrete hash table.
It shows the hashing mechanism but does not
resolve collisions. In case of a collision
older data is overwritten by the new data.

Reference: Chapter Searching
*/
#pragma once
#include "HashTable.hpp"

//<-hash_function--
class SimpleHashTable : public HashTable {
protected:
	HashData * freeMarker;
	HashData ** hashTable; // HashData*[] is an array of pointers
	int hashFunction(int key) override {
		return key % tableSize;
	}
public:
	SimpleHashTable(int max) {
		tableSize = max;
		freeMarker = new HashDataImpl(HashData::freeKey);
		hashTable = new HashData*[max];
		for (int i = 0; i < max; i++)
			hashTable[i] = freeMarker;
	}
	~SimpleHashTable(){ 
    for (int i = 0; i < tableSize; i++)
      if (hashTable[i] != freeMarker)
        delete hashTable[i];
    delete[] hashTable;
    delete freeMarker;
  }
//--hash_function->
//<-hash_methods--
	void add(HashData & x) override;
	bool contains(HashData & x) override;
	HashData & search(HashData & x) override;
	void remove(HashData & x) override;
	//--hash_methods->
	string toString() override;
//<-brace--
	// ...
};
//--brace->
