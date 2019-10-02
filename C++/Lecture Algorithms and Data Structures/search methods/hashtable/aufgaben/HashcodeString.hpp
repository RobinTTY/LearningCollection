/*  File HashCodeString.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashCodeString is a class for objects
to be added in a hash table, for which the
key is computed using the standard
std::hash<std::string> function of the STL.

Reference: Chapter Searching
*/

#include "../basics/HashTableBasics.hpp"
#include "PairStringInt.hpp"

//<-hash_data--
class HashcodeString : public PairStringInt {
public:
	HashcodeString(string s, int i) : PairStringInt(s, i) {}
	int getKey() {
		int key = std::hash<std::string>{}(svalue);
		if (key < 0) return -key;
		return key;
	}
	bool isEqual(HashData & x) override {
		if (typeid(x) != typeid(HashcodeString)) return false;
		HashcodeString & other = dynamic_cast<HashcodeString&>(x);
		return (svalue == other.svalue);
	}
};
//--hash_data->
