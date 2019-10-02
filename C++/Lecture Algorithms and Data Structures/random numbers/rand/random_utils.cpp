/*	File random_utils.cpp

Authors: J. Koch, M. Dausmann

Class RandomUtils contains the functions which
use the builtin generator of random numbers.

Note (C++11):
default_random_engine() -> default_seed (1u) used
default_random_engine(seed) ->  specific seed used
random_device -> used to generate a random seed

uniform_int_distribution() -> [0,MAX_INT]
uniform_int_distribution(1, n) -> [1, n]
uniform_real_distribution() -> [0.0, 1.0)
uniform_real_distribution(1.0, 10.0) -> [1.0, 10.0)

Note (cstdlib):
srand(seed) -> set a specific seed
rand() -> [0, RAND_MAX], RAND_MAX is usually 32767 (2^15)

Reference: Chapter Random Numbers

*/
#include <random>
#include "random_utils.hpp"
using namespace std;

//<-random_dice--
int RandomUtils::rollDice()
{
	static random_device rd; // use a random seed:
	static default_random_engine e(rd());
	static uniform_int_distribution<int> d(1, 6);

	return d(e);
}
//--random_dice->
// Check, if n is already contained in array v[0..n]
bool RandomUtils::isContained(vector<int> v, int length, int number)
{
	for (int i = 0; i < length; i++)
	  if (v[i] == number) return true;
	return false;
}

// Compute a random permutation of the
// numbers 0, 1, 2, ... , n and return the
// result as an array
//<-random_perm--
vector<int> RandomUtils::computePermutation(int n)
{
	random_device rd;
	default_random_engine e(rd());
	// random number in [0,n]:
	uniform_int_distribution<int> d(0, n);

	int x;
	vector<int> p(n+1); // [0,n] contains n+1 numbers
	for (int i = 0; i <= n; i++) {
		do {
			x = d(e);
		} while (isContained(p, i, x));
		p[i] = x;
	}
	return p;
}
//--random_perm->

// Compute a random permutation of the
// numbers 0, 1, 2, ... , n and return the
// result as an array
//<-random_perm2--
vector<int> RandomUtils::computePermutation2(int n)
{
	random_device rd;
	default_random_engine e(rd());
	vector<int> p(n+1); // [0,n] contains n+1 numbers
	vector<int> mapping (n+1);
	iota(mapping.begin(), mapping.end(), 0); // mapping[i] = i;
	for( int i = n, k = 0; i > 0; --i, ++k){ 
		// random number in [0,i]:
		uniform_int_distribution<int> d(0, i);
		int x = d(e);
		p[k] = mapping[x];
		mapping[x] = mapping[i];
	}
	p[n] = mapping[0];
	return p;
}
//--random_perm2->

//<-default_seed--
vector<double> RandomUtils::generateProbValuesDefault(int numbers)
{
	default_random_engine e;
	uniform_real_distribution<double> d(0.0, 1.0);

	vector<double> values(numbers);
	for (int i = 0; i < numbers; i++)
		values[i] = d(e);
	return values;
}
//--default_seed->
//<-random_device--
vector<double> RandomUtils::generateProbValuesRandom(int numbers)
{
	random_device rd;        // use a random seed
	default_random_engine e(rd());
	uniform_real_distribution<double> d(0.0, 1.0);

	vector<double> values(numbers);
	for (int i = 0; i < numbers; i++)
		values[i] = d(e);
	return values;
}
//--random_device->

//<-random_seed--
vector<double> RandomUtils::generateProbValuesSeeded(int numbers)
{
	default_random_engine e(20);  // use a specific seed
	uniform_real_distribution<double> d(0.0, 1.0);

	vector<double> values(numbers);
	for (int i = 0; i < numbers; i++)
		values[i] = d(e);
	return values;
}
//--random_seed->

//<-random_gauss--
vector<double> RandomUtils::generateGaussianValues(int numbers) 
{
	double mean = 0.0;
	double stddev = 1.0;
	default_random_engine e;
	normal_distribution<double> d(mean, stddev);

	vector<double> values(numbers);
	for (int i = 0; i < numbers; i++)
		values[i] = d(e);
	return values;
}
//--random_gauss->



