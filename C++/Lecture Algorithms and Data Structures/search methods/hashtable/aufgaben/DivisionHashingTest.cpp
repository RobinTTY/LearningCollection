/*  File DivisionHashingTest.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class DivisonHashingTest contains the function
for testing a hash table using a strategy based
on division (modulo) and a linear resp.
quadratic probing strategy.

Reference: Chapter Searching
*/
#include <iostream>
#include "DivisionHashingTest.hpp"
#include "FlexHashTable.hpp"
using namespace std;

const int DivisionHashingTest::tableSize = 21;

void DivisionHashingTest::fillHashTable(HashTable * ht) {
	HashData * elem;
	elem = new TestDivisionData(3); ht->add(*elem);
	elem = new TestDivisionData(9); ht->add(*elem);
	elem = new TestDivisionData(14); ht->add(*elem);
	elem = new TestDivisionData(27); ht->add(*elem);
	elem = new TestDivisionData(5); ht->add(*elem);
	elem = new TestDivisionData(47); ht->add(*elem);
	elem = new TestDivisionData(20); ht->add(*elem);
	elem = new TestDivisionData(37); ht->add(*elem);
	elem = new TestDivisionData(21); ht->add(*elem);
	elem = new TestDivisionData(16); ht->add(*elem);
	elem = new TestDivisionData(33); ht->add(*elem);
	elem = new TestDivisionData(58); ht->add(*elem);
}

void DivisionHashingTest::printConfig(HashFunction & hf, ProbeStrategy & ps) {
	cout << endl;
	cout << "Result of hash table test using the hash function" << endl;;
	cout << hf.toString() << endl;
	cout << "and " << ps.toString() << " as collision avoidance strategy:" << endl;
	cout << endl;
}

void DivisionHashingTest::testLinearProbing() {
	HashFunction && hf = ModuloFunction();
	ProbeStrategy && ps = ProbeLinear();
	HashTable * ht = new FlexHashTable(tableSize, hf , ps);
	fillHashTable(ht);
	printConfig(hf, ps);
	cout << ht->toString() << endl;
	testCallings(ht);
}

void DivisionHashingTest::testQuadraticProbing() {
	HashFunction && hf = ModuloFunction();
	ProbeStrategy && ps = ProbeQuadraticAlternate();
	HashTable * ht = new FlexHashTable(tableSize, hf, ps);
	fillHashTable(ht);
	printConfig(hf, ps);
	cout << ht->toString() << endl;
	testCallings(ht);
}

void DivisionHashingTest::testCallings(HashTable * ht) {
	TestDivisionData * elem = new TestDivisionData(47);
	cout << endl;
	ht->contains(*elem);
	cout << "isEqual() has been called "
		<< elem->getCounter() 
		<< " times to compute contains(47)." << endl;
	elem = new TestDivisionData(28);
	ht->contains(*elem);
	cout << "isEqual() has been called "
		<< elem->getCounter() 
		<< " times to compute contains(28)." << endl;
}
