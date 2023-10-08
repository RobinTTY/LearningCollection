/*  File FlexHashTable.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class FlexHashTable is a concrete hash table.
It uses functors for hash and probe functions
so that these can easily be exchanged in order
to test different strategies.

Reference: Chapter Searching
*/
#include "FlexHashTable.hpp"

FlexHashTable::FlexHashTable(int max, HashFunction & hf, ProbeStrategy & rh) 
		: SimpleHashTable(max), hf(hf), rh(rh) {
	deleteMarker = new HashDataImpl(HashData::deleteKey);
}

int FlexHashTable::hashFunction(int key){ 
	return hf.hash(key, tableSize);
}
//<-hash_method--
void FlexHashTable::add(HashData & x) {
	rh.startProbing(x.getKey(), tableSize, tableSize, hf);
	int probe = rh.nextProbe();
	while (true) {
		if (hashTable[probe] == freeMarker ||
			hashTable[probe] == deleteMarker) {
			hashTable[probe] = &x; break;
		}
		else if (x.isEqual(*hashTable[probe]))
			break; // object is already stored
		else {
			probe = rh.nextProbe();   // get next probe value
			if (probe == -1) break;   // all elements checked 
		}
	}
}
//--hash_method->

bool FlexHashTable::contains(HashData & x) {
	rh.startProbing(x.getKey(), tableSize, tableSize, hf);
	int probe = rh.nextProbe();
	while (true) {
		if (x.isEqual(*hashTable[probe]))
			return true;
		else if (hashTable[probe] == freeMarker)
			return false;
		else // (hash_tab[probe] == deleteMarker or different key)
		{
			probe = rh.nextProbe();        // get next probe value
			if (probe == -1) return false; // all elements checked 
		}
	}
}
HashData & FlexHashTable::search(HashData & x) {
	rh.startProbing(x.getKey(), tableSize, tableSize, hf);
	int probe = rh.nextProbe();
	while (true) {
		if (x.isEqual(*hashTable[probe]))
			return *hashTable[probe];
		else if (hashTable[probe] == freeMarker)
			return *freeMarker;
		else // (hash_tab[probe] == deleteMarker or different key)
		{
			probe = rh.nextProbe();   // get next probe value
			if (probe == -1)          // all elements checked 
				return *freeMarker;
		}
	}
}
void FlexHashTable::remove(HashData & x) {
	rh.startProbing(x.getKey(), tableSize, tableSize, hf);
	int probe = rh.nextProbe();
	while (true) {
		if (x.isEqual(*hashTable[probe]))
		{
			hashTable[probe] = deleteMarker;
			break;
		}
		else if (hashTable[probe] == freeMarker)
			break; // is free, cannot remove
		else // (hash_tab[probe] == deleteKey) or different Key
		{
			probe = rh.nextProbe();   // get next probe value
			if (probe == -1) break;   // all elements checked 
		}
	}
}

string FlexHashTable::toString(){
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
