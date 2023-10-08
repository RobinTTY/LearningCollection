/* File: sieve_numbers.hpp

Authors: J. Koch, M. Dausmann

This class implements the so called Sieve of Eratosthenes
to compute the set of prime numbers between 1 and N.

Chapter Algorithms and Complexity

*/

#pragma once
using namespace std;

//<-sieve--
class SieveNumbers {
protected:
	virtual void writeDownNumbers(int N) =0;
	virtual void enframeNumber(int i) =0;
	virtual int findSmallestNumber() =0;
	virtual void crossOutProducts(int i) =0;
	virtual void printPrimeNumbers() =0;
public:
	// Sieve of Eratosthenes:
	void computePrimeNumbers(int N) {
		int i;
		writeDownNumbers(N);
		do {
			i = findSmallestNumber();
			enframeNumber(i);
			crossOutProducts(i);
		} while (i * i < N);
		printPrimeNumbers();
	}
};
//--sieve->
