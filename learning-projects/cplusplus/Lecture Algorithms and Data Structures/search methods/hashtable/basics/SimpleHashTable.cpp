/*  File SimpleHashTable.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class SimpleHashTable is a concrete hash table.
It shows the hashing mechanism but does not
resolve collisions. In case of a collision
older data is overwritten by the new data.

Reference: Chapter Searching
*/
#include "SimpleHashTable.hpp"

//<-hash_methods--
void SimpleHashTable::add(HashData & x){
	int hash = hashFunction(x.getKey());
	hashTable[hash] = &x;
}
bool SimpleHashTable::contains(HashData & x){
	int hash = hashFunction(x.getKey());
	return x.isEqual(*hashTable[hash]);
}
void SimpleHashTable::remove(HashData & x){
	int hash = hashFunction(x.getKey());
	if (x.isEqual(*hashTable[hash])){
    delete hashTable[hash];
		hashTable[hash] = freeMarker;
  }
}
//--hash_methods->

HashData & SimpleHashTable::search(HashData & x){
	int hash = hashFunction(x.getKey());
	if (x.isEqual(*hashTable[hash]))
		return *hashTable[hash];
	else
		return *freeMarker;
}

string SimpleHashTable::toString(){
	string result = "Contents of hash table\n";
	for (int index = 0; index < tableSize; index++)
	{
		result = result + "[" + to_string(index) + "] ";
		if (hashTable[index] == freeMarker) 
			result = result + "is empty\n";
		else
		  result = result + hashTable[index]->toString() + "\n";
	}
	return result;
}
