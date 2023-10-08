/*  File HashDataImpl.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashDataImpl is the base class for objects which are
to be added in a hash table. It can be used to add either
a string value or an integer value or both. The class provides
default implementations for the methods getKey(), isEqual() and
toString(). The methods getKey() and isEqual() are implemented
as follows: 
getkey() returns the added integer value as key.
isEqual() is true if the string values and the integer values
of both objects are equal.
Derived classes should consider to override the methods getKey() 
and isEqual() as well as toString().

Reference: Chapter Searching
*/
#pragma once
#include <string>
#include <typeinfo>
#include "HashData.hpp"
using namespace std;

//<-hash_data--
class HashDataImpl : public HashData {
protected:
	string  svalue;
	int idata;
public:
	int getKey() override { return idata; }
	bool isEqual(HashData & data) override {
		if (typeid(data) != typeid(HashDataImpl)) return false;
		HashDataImpl & other = dynamic_cast<HashDataImpl&>(data);
		return (svalue == other.svalue) && (idata == other.idata);
	}
//--hash_data->
	HashDataImpl(string v) : svalue(v), idata(0) {}
	HashDataImpl(int i) : svalue(""), idata(i) {}
	HashDataImpl(string v, int i) : svalue(v), idata(i) {}
	string toString() override;
	string getValue() { return svalue; }
	void setValue(string s) { svalue = s; }
	int getData() { return idata; }
	void setData(int i) { idata = i; }
//<-brace--
	// ...
};
//--brace->
