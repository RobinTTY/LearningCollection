/*  File DoubleHashingTest.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class DoubleHashingTest contains the function
for testing a hash table using a strategy based
on division and a double hashing exploration strategy.
It declares its own type for the hash table entries.

Reference: Chapter Searching
*/
#pragma once
#include "../basics/HashTableBasics.hpp"
#include "HashFunction.hpp"
#include "ProbeStrategy.hpp"

class DoubleHashingTest {
	// Data type for hash table entries
	class TestStudentData : public HashDataImpl {
	private:
		int counter;
	public:
		TestStudentData(string s, int i) : HashDataImpl(s, i), counter(0) {}
		bool isEqual(HashData & x) override {
			if (typeid(x) != typeid(TestStudentData)) return false;
			TestStudentData & other = dynamic_cast<TestStudentData&>(x);
			counter++;
			return (svalue == other.svalue);
		}
		void resetCounter() { counter = 0; }
		int getCounter() { return counter; }
	};
public:
	// Test function
	static void testDoubleHashingExercise();
private:
	static const int tableSize;
	static void fillHashTable(HashTable * ht);
	static void printConfig(HashFunction & hf, ProbeStrategy & ps);
	static void testLinearProbing();
	static void testQuadraticProbing();
	static void testDoubleHashProbing();
};
