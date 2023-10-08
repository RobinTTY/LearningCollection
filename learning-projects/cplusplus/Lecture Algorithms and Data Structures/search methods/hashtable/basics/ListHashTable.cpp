/*  File ListHashTable.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class ListHashTable is a concrete hash table.
It shows the hashing mechanism using lists
(i.e. std::list) to resolve a collision.

Reference: Chapter Searching
*/
#include "ListHashTable.hpp"

void ListHashTable::add(HashData & x){
	int hash = hashFunction(x.getKey());
	list<HashData*>& bucket = buckets[hash];
	bucket.push_back(&x);
}

//<-hash_method--
bool ListHashTable::contains(HashData & x){
	int hash = hashFunction(x.getKey());
	list<HashData*>& bucket = buckets[hash];
	for (HashData * cur : bucket) {
		if (cur->isEqual(x)) return true;
	}
	return false;
}
//--hash_method->
//<-search--
HashData & ListHashTable::search(HashData & x) {
	int key = x.getKey();
	int hash = hashFunction(key);
	list<HashData*>& bucket = buckets[hash];
	for (HashData * cur : bucket) {
		if (cur->isEqual(x)) return *cur;
	}
	return *freeMarker;
}
//--search->
void ListHashTable::remove(HashData & x){
	int hash = hashFunction(x.getKey());
	list<HashData*>& bucket = buckets[hash];
	for (auto cursor = bucket.begin(); cursor != bucket.end(); cursor++)
	{
		if ((*cursor)->isEqual(x))
		{
			bucket.erase(cursor);
			break;
		}
	}
}

string ListHashTable::toString(){
	string result("Contents of hash table\n");
	for (int index = 0; index < tableSize; index++) {
		list<HashData*>& bucket = buckets[index];
		if (bucket.empty())
			result = result + "[" + to_string(index) + "] is empty\n";
		else {
			for (HashData* cur : bucket)
				result = result + "[" + to_string(index) + "] "
				+ cur->toString() + "\n";
		}
	}
	return result;
}