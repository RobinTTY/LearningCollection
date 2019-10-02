/*  File ProbeStrategy.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class ProbeStrategy is an abstract class defining
the interface for probe strategies avoiding
collisions in hash tables.
The derived classes in this file implements
the specific strategies used in exercises.

Reference: Chapter Searching
*/
#pragma once
#include <string>
#include <math.h>
#include "HashFunction.hpp"
using namespace std;

class ProbeStrategy {
protected:
	ProbeStrategy(string name) : strategy(name) {}
	string strategy;
	int probe_no;
	int hashValue;
	int maxTrials;
	int modulus;
	HashFunction * hf;
public:
	virtual void startProbing(int key, int modulus, int trials, HashFunction & hf) {
		this->hf = &hf;
		probe_no = 0; 
		maxTrials = trials; 
		hashValue = hf.hash(key, modulus);
		this->modulus = modulus;
	}
	virtual int nextProbe() = 0;
	string toString() { return strategy; }
};

class ProbeQuadratic : public ProbeStrategy {
public:
	ProbeQuadratic() : ProbeStrategy("quadratic probing") {}
	//<-quadratic_probing--
	int nextProbe() override {
		int probe_val = hashValue + (probe_no*probe_no);
		probe_no++;
		// maximum number of probe calls reached
		if (probe_no > maxTrials) return -1;
		return probe_val % modulus;
	}
	//--quadratic_probing->
};

class ProbeQuadraticAlternate : public ProbeStrategy {
public:
	ProbeQuadraticAlternate() : ProbeStrategy("alternating quadratic probing") {}
	//<-quad_alt_probing--
	int nextProbe() override {
		int probe_val = (probe_no*probe_no) * (int)pow(-1, probe_no);
		probe_val = abs(hashValue + probe_val);
		probe_no++;
		// maximum number of probe calls reached
		if (probe_no > maxTrials) return -1;
		return probe_val % modulus;
	}
	//--quad_alt_probing->

};


class ProbeLinear : public ProbeStrategy {
public:
	ProbeLinear() : ProbeStrategy("linear probing") {}
	//<-linear_probing--
	int nextProbe() override {
		int probe_val = hashValue + probe_no;
		probe_no++;
		// maximum number of probe calls reached
		if (probe_no > maxTrials) return -1;
		return probe_val % modulus;
	}
	//--linear_probing->
};

class ProbeLinearAlternate : public ProbeStrategy {
public:
	ProbeLinearAlternate() : ProbeStrategy("alternating linear probing") {}
	//<-lin_alt_probing--
	int nextProbe() override {
		int probe_val;
		if (probe_no % 2 == 0) probe_val = hashValue + probe_no;
		else probe_val = abs(hashValue - probe_no);
		probe_no++;
		// maximum number of probe calls reached
		if (probe_no > maxTrials) return -1;
		return probe_val % modulus;
	}
	//--lin_alt_probing->
};

class ProbeTwoFunctions : public ProbeStrategy {
	HashFunction & hf2;
	int hashValue2;
public:
	ProbeTwoFunctions(HashFunction & hf2) 
		: ProbeStrategy("double hash probing"), hf2(hf2) {}
	void startProbing(int key, int modulus, int trials, HashFunction & hf1) override {
	  ProbeStrategy::startProbing(key, modulus, trials, hf1);
		hashValue2 = hf2.hash(key, modulus);
	}
	//<-double_probing--
	int nextProbe() override {
		int probe_val = hashValue + hashValue2 * probe_no;
		probe_no++;
		// maximum number of probe calls reached
		if (probe_no > maxTrials) return -1;
		return probe_val % modulus;
	}
	//--double_probing->
};





