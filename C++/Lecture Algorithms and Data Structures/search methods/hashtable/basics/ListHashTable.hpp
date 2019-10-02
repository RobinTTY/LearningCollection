/*  File ListHashTable.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class ListHashTable is a concrete hash table.
It shows the hashing mechanism using lists
(i.e. std::list) to resolve a collision.

Reference: Chapter Searching
*/
#pragma once
#include "HashTable.hpp"
#include <list>
using namespace std;

//<-hash_list--
class ListHashTable : public HashTable {
private:
	// the hash table 'buckets' is an array of lists 
	// list elements are pointers to HashData
	list<HashData*> * buckets;
public:
	ListHashTable(int max) {
		tableSize = max;
		buckets = new list<HashData*>[max];
		// freeMarker used to indicate unsuccessful search
		freeMarker = new HashDataImpl(HashData::freeKey);
	}
	~ListHashTable() {
    for (int i = 0; i < tableSize; i++){
      list<HashData*>& bucket = buckets[i];
      for( HashData* le : bucket )
        delete le;
    }
		delete[] buckets;
		delete freeMarker;
	}
//--hash_list->
protected:
	HashData * freeMarker;
	//define a simple hash function
	//<-hash_function--
	int hashFunction(int k) override {
		return k % tableSize;
	}
	//--hash_function->

	void add(HashData & x) override;
	bool contains(HashData & x) override;
	HashData & search(HashData & x) override;
	void remove(HashData & x) override;
	string toString();
//<-brace--
	// ...
};
//--brace->
