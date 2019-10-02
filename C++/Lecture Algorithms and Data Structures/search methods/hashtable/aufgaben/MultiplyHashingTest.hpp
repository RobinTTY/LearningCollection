/*  File MultiplyHashingTest.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class MultiplyHashTable contains the function for testing
a hash function using a strategy based on multiplications.

Reference: Chapter Searching
*/
#pragma once
#include <iostream>
using namespace std;
#include "HashFunction.hpp"

class MultiplyHashingTest {
public:
	static void testMultiplyHashing() {
		int tableSize = 1000;
		HashFunction && hf = MultiplyFunction();
		cout << "Hash values computed by the hash function " 
			<< hf.toString() << " with table Size " << to_string(tableSize) << endl;
		cout << 61 << " : " << hf.hash(61, tableSize) << endl;
		cout << 62 << " : " << hf.hash(62, tableSize) << endl;
		cout << 63 << " : " << hf.hash(63, tableSize) << endl;
		cout << 64 << " : " << hf.hash(64, tableSize) << endl;
		cout << 65 << " : " << hf.hash(65, tableSize) << endl;
		cout << 66 << " : " << hf.hash(66, tableSize) << endl;
	}
};
