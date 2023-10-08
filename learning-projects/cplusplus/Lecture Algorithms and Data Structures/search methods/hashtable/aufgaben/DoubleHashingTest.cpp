/*  File DoubleHashingTest.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class DoubleHashingTest contains the functions
for testing a hash table using a strategy based
on division and a double hash probing strategy.
It declares its own type for the hash table entries.

Reference: Chapter Searching
*/
#include <iostream>
#include "DoubleHashingTest.hpp"
#include "FlexHashTable.hpp"
#include "HashFunction.hpp"
using namespace std;

const int DoubleHashingTest::tableSize = 23;

void DoubleHashingTest::testDoubleHashingExercise() {
	testLinearProbing();
	testQuadraticProbing();
	testDoubleHashProbing();
}

void DoubleHashingTest::fillHashTable(HashTable * ht) {
	TestStudentData * elem;
	elem = new TestStudentData("06", 6); ht->add(*elem);
	elem = new TestStudentData("16", 16); ht->add(*elem);
	elem = new TestStudentData("61", 61); ht->add(*elem);
	elem = new TestStudentData("87", 87); ht->add(*elem);
	elem = new TestStudentData("69", 69); ht->add(*elem);
	elem = new TestStudentData("90", 90); ht->add(*elem);
	elem = new TestStudentData("04", 4); ht->add(*elem);
	elem = new TestStudentData("43", 43); ht->add(*elem);
	elem = new TestStudentData("57", 57); ht->add(*elem);
	elem = new TestStudentData("12", 12); ht->add(*elem);
	elem = new TestStudentData("80", 80); ht->add(*elem);
	elem = new TestStudentData("46", 46); ht->add(*elem);
}

void DoubleHashingTest::printConfig(HashFunction & hf, ProbeStrategy & ps) {
	cout << endl;
	cout << "Result of hash table test using the hash function" << endl;;
	cout << hf.toString() << endl;
	cout << "and " << ps.toString() << " as collision avoidance strategy:" << endl;
	cout << endl;
}

void DoubleHashingTest::testDoubleHashProbing() {
	HashFunction && hf1 = CrosssumFunction();
	HashFunction && hf2 = ModuloFunction1();
	ProbeStrategy && ps = ProbeTwoFunctions(hf2);
	HashTable * ht = new FlexHashTable(tableSize, hf1, ps);
	fillHashTable(ht);
	cout << endl;
	cout << "Result of hash table test using the hash functions " << endl;
	cout << "1: " << hf1.toString() << endl;
	cout << "2: " << hf2.toString() << endl;
	cout << "and " << ps.toString() << " as collision avoidance strategy:" << endl;
	cout << endl;
	cout << ht->toString() << endl;
}

void DoubleHashingTest::testLinearProbing() {
	{	// Hash function 1
		HashFunction && hf = CrosssumFunction();
		ProbeStrategy && ps = ProbeLinearAlternate();
		HashTable * ht = new FlexHashTable(tableSize, hf, ps);
		fillHashTable(ht);
		printConfig(hf, ps);
		cout << ht->toString() << endl;
	}
	{	// Hash function 2
		HashFunction && hf = ModuloFunction();
		ProbeStrategy && ps = ProbeLinearAlternate();
		HashTable * ht = new FlexHashTable(tableSize, hf, ps);
		fillHashTable(ht);
		printConfig(hf, ps);
		cout << ht->toString() << endl;
	}
}

void DoubleHashingTest::testQuadraticProbing() {
	{	// Hash function 1
		HashFunction && hf = CrosssumFunction();
		ProbeStrategy && ps = ProbeQuadraticAlternate();
		HashTable * ht = new FlexHashTable(tableSize, hf, ps);
		fillHashTable(ht);
		printConfig(hf, ps);
		cout << ht->toString() << endl;
	}
	{	// Hash function 2
		HashFunction && hf = ModuloFunction();
		ProbeStrategy && ps = ProbeQuadraticAlternate();
		HashTable * ht = new FlexHashTable(tableSize, hf, ps);
		fillHashTable(ht);
		printConfig(hf, ps);
		cout << ht->toString() << endl;
	}
}
