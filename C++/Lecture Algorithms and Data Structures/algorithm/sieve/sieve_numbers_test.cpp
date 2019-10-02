/* File: sieve_numbers_test.cpp

Authors: J. Koch, M. Dausmann

The program uses the implementation class of 
the so called Sieve of Eratosthenes to compute 
the set of prime numbers between 1 and N.

Chapter Algorithms and Complexity

*/
#include <iostream>
using namespace std;
#include "sieve_numbers.hpp"
#include "sieve_numbers.cpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int main() {
	cout << "Program to compute the set of prime numbers between 1 and N" << endl;
	cout << "using the so called Sieve of Eratosthenes." << endl;
	cout << "N = ";
	int n;
	cin >> n;
	cout << endl << "The prime numbers between 1 and " << n;
	cout << " are:" << endl;
	SieveNumbersImpl prim;
	prim.computePrimeNumbers(n);

  TheEnd; 
	return 0;
}
