/*  File LinearHashTable.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class LinearHashTable is a concrete hash table.
It shows the hashing mechanism using linear
exploration strategy to resolve a collision.

Reference: Chapter Searching
*/
#include "LinearHashTable.hpp"

LinearHashTable::LinearHashTable(int max) : SimpleHashTable(max) {
	deleteMarker = new HashDataImpl(HashData::deleteKey);
}

//<-hash_function--
int LinearHashTable::hashFunction(int key){
	startHashValue = key % tableSize;
	return startHashValue;
}
//--hash_function->
//<-linear_rehashing--
int LinearHashTable::rehash(int hashValue) {
	// linear exploration:
	int explore = (hashValue + 1) % tableSize;
	// all elements checked:
	if (explore == startHashValue) return -1;    
	return explore;
}
//--linear_rehashing->
//<-hash_method--
void LinearHashTable::add(HashData & x) {
	int explore = hashFunction(x.getKey()); 
	while (true) {
		if (hashTable[explore] == freeMarker || 
			hashTable[explore] == deleteMarker) {
			hashTable[explore] = &x; break;
		}
		else if (x.isEqual(*hashTable[explore]))
			break; // object is already stored
		else {
			explore = rehash(explore);  // rehash the value
			if (explore == -1) break;   // Error: no space available
		}
	}
}
//--hash_method->

bool LinearHashTable::contains(HashData & x) {
	int explore = hashFunction(x.getKey());
	while (true) {
		if (x.isEqual(*hashTable[explore]))
			return true;
		else if (hashTable[explore] == freeMarker)
			return false;
		else // (hash_tab[explore] == deleteMarker or different key)
		{
			explore = rehash(explore);       // rehash the value
			if (explore == -1) return false; // all elements checked 
		}
	}
}
HashData & LinearHashTable::search(HashData & x) {
	int explore = hashFunction(x.getKey());
	while (true) {
		if (x.isEqual(*hashTable[explore]))
			return *hashTable[explore];
		else if (hashTable[explore] == freeMarker)
			return *freeMarker;
		else // (hash_tab[explore] == deleteMarker or different key)
		{
			explore = rehash(explore);  // rehash the value
			if (explore == -1)          // all elements checked 
					return *freeMarker;
		}
	}
}
void LinearHashTable::remove(HashData & x) {
	int explore = hashFunction(x.getKey());
	while (true) {
		if (x.isEqual(*hashTable[explore]))
		{
			hashTable[explore] = deleteMarker;
			break;
		}
		else if (hashTable[explore] == freeMarker)
			break; // is free, cannot remove
		else // (hash_tab[explore] == deleteKey) or different Key
		{
			explore = rehash(explore);  // rehash the value
			if (explore == -1) break;   // all elements checked 
		}
	}
}

string LinearHashTable::toString(){
	string result = "Contents of hash table\n";
	for (int index = 0; index < tableSize; index++)
	{
		result = result + "[" + to_string(index) + "] ";
		if (hashTable[index] == freeMarker)
			result = result + "is empty\n";
		else if (hashTable[index] == deleteMarker)
			result = result + "is deleted\n";
		else
			result = result + hashTable[index]->toString() + "\n";
	}
	return result;
}
