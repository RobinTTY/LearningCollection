/* File: sieve_numbers.cpp

Authors: J. Koch, M. Dausmann

This class implements the so called Sieve of Eratosthenes
to compute the set of prime numbers between 1 and N.

Reference: Chapter Algorithms and Complexity

*/

#include "sieve_numbers.hpp"
#include <vector>
#include <iostream>

//<-sieve_ops--
class SieveNumbersImpl : public SieveNumbers {
private:
	vector<int> numbers;
protected:
	// write down all numbers and cross out the 1
	void writeDownNumbers(int n) {
		numbers = vector<int>(n + 1);
		numbers[1] = -1;
		for (unsigned int i = 2; i < numbers.size(); i++)
			numbers[i] = i;
	}
	// draw a frame around this number
	void enframeNumber(int i) {
		numbers[i] = 0;
	}
	// find the smallest number not framed 
	// and not crossed out
	int findSmallestNumber() {
		for (unsigned int i = 1; i < numbers.size(); i++)
			if (numbers[i] > 0) return i;
		return 0;
	}
	// cross out all products of this number
	void crossOutProducts(int i) {
		for (unsigned int j = 2; (i * j) < numbers.size(); j++)
			numbers[i*j] = -1;
	}
	// the numbers not framed and not crossed out 
	// are the prime numbers in [1..N]
	void printPrimeNumbers() {
		for (unsigned int j = 1; j < numbers.size(); j++)
			if (numbers[j] >= 0) cout << j << ", ";
    cout << '\n';
	}
};
//--sieve_ops->
