/*  File DivisionHashingTest.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class DivisonHashingTest contains the function
for testing a hash table using a strategy based 
on division and a linear as well as a quadratic 
probing strategy.
It declares its own type for the hash table entries.

Reference: Chapter Searching
*/
#pragma once
#include "../basics/HashTableBasics.hpp"
#include "HashFunction.hpp"
#include "ProbeStrategy.hpp"

class DivisionHashingTest {
	// Data type for hash table entries
	class TestDivisionData : public HashDataImpl {
		int counter;
	public:
		bool isEqual(HashData & x) override {
			if (typeid(x) != typeid(TestDivisionData)) return false;
			TestDivisionData & other = dynamic_cast<TestDivisionData&>(x);
			counter++;
			return (idata == other.idata);
		}
		TestDivisionData(int k) : HashDataImpl(k), counter(0) {}
		void resetCounter() { counter = 0; }
		int getCounter() { return counter; }
	};
	static const int tableSize;
	static void fillHashTable(HashTable * ht);
	static void printConfig(HashFunction & hf, ProbeStrategy & ps);
	static void testCallings(HashTable * ht);
public:
	// Test functions
	static void testLinearProbing();
	static void testQuadraticProbing();
};
