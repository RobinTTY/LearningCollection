/*  File HashFunction.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashFunction is an abstract class defining
the interface for hash functions.
The derived classes in this file implements
the specific hash functions used in exercises.

Reference: Chapter Searching
*/
#pragma once
#include <math.h>
using namespace std;

class HashFunction {
	string functionAsString;
public:
	HashFunction(string hf) : functionAsString(hf) {}
	virtual int hash(int key, int m) = 0;
	string toString() { return functionAsString; }
};

class CrosssumFunction : public HashFunction {
public:
	CrosssumFunction() : HashFunction("h(key) = cross sum of the last two digits of key") {}
	int hash(int key, int m) {
		key = key % 100;
		return (key % 10 + key / 10) % m;
	}
};

class ModuloFunction : public HashFunction {
public:
	ModuloFunction() : HashFunction("h(key) = key mod m") {}
	int hash(int key, int m) {
		return key % m;
	}
};

class ModuloFunction1 : public HashFunction {
public:
	ModuloFunction1() : HashFunction("h(key) = key mod (m-1) + 1") {}
	int hash(int key, int m) { // avoid 0 as hash value
		return key % (m - 1) + 1;
	}
};

class MultiplyFunction : public HashFunction {
public:
	MultiplyFunction() : HashFunction("h(key) = formula from D. Knuth") {}
//<-multiply_hash--
	int hash(int key, int m) {
		constexpr double a = (sqrt(5.0) - 1.0) / 2.0;
		return (int)floor(m * ((key * a) - floor(key * a)));
	}
//--multiply_hash->
};

