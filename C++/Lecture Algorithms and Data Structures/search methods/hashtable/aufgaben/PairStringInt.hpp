/*  File PairStringInt.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class PairStringInt uses HashDataImpl as follows:
The String svalue is used as key, and the attribute
idata adds an integer value associated with the key. 
The methods getKey() and isEqual() are
overriden.
This class therefore is now a pair<string, int>
in a similar way as used in a hash map.
 
Reference: Chapter Searching
*/
#pragma once
#include "../basics/HashTableBasics.hpp"

//<-hash_data--
class PairStringInt : public HashDataImpl {
public:
	PairStringInt(string v, int i) : HashDataImpl(v, i) {}
	int getKey() override {
		int key = 0;
		for (unsigned int i = 0; i < svalue.size(); i++)
		  key = key + (int) svalue.at(i);
		return key;
	}
	bool isEqual(HashData & x) override {
		if (typeid(x) != typeid(PairStringInt)) return false;
		PairStringInt & other = dynamic_cast<PairStringInt&>(x);
		return (svalue == other.svalue);
	}
//--hash_data->
	string toString() override {
		string result = svalue + " : ";
		result = result + to_string(idata);
		return result;
	}
//<-brace--
	// ...
};
//--brace->
