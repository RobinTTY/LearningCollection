/*	File random_actions.cpp

Authors: J. Koch, M. Dausmann

Class RandomActions contains functions which
show the possibilities of the builtin generator 
of random numbers.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include "random_actions.hpp"
#include "random_utils.hpp"

void RandomActions::printNumbers (vector<double> x, string s) {
	cout << endl << s << endl;
	for (unsigned int i = 0; i < x.size(); i++)
	{
		cout << "X[" << i << "]=\t" << x[i] << endl;
	}
}

void RandomActions::testGaussianValues(int numbers)
{
	cout << "Generation of normal (Gaussian) distributed random numbers" << endl;
	cout << "with mean = 0.0 and standard deviation = 1.0" << endl;
	cout << "==========================================================" << endl;
	cout << endl;

	vector<double> x = RandomUtils::generateGaussianValues(numbers);
	printNumbers(x, "Sequence using default seed:");
}

void RandomActions::testRandomDoubles(int numbers)
{
	cout << "Generation of random numbers in the intervall [0,1) (double values)" << endl;
	cout << "===================================================================" << endl;
	cout << endl;

	vector<double> x;
	x = RandomUtils::generateProbValuesDefault(numbers);
	printNumbers(x, "1st sequence using default seed:");

	x = RandomUtils::generateProbValuesDefault(numbers);
	printNumbers(x, "2nd sequence using default seed:");

	x = RandomUtils::generateProbValuesSeeded(numbers);
	printNumbers(x, "1st sequence using seed = 20:");

	x = RandomUtils::generateProbValuesSeeded(numbers);
	printNumbers(x, "2nd sequence using seed = 20:");

	x = RandomUtils::generateProbValuesRandom(numbers);
	printNumbers(x, "1st sequence using random device as seed:");

	x = RandomUtils::generateProbValuesRandom(numbers);
	printNumbers(x, "2nd sequence using random device as seed:");
}

void RandomActions::simulateDice()
{
	cout << endl;
	cout << "Rolling a dice with the default random engine" << endl;
	cout << "=============================================" << endl;
	cout << endl;
	for (int i = 0; i < 36; i++)
	{
		int score = RandomUtils::rollDice();
		// Output in 6 columns 
		if (i % 6 == 0) cout << endl;
		cout << score << ", ";
	}
	cout << endl << endl;
}

void RandomActions::randomPermutation(int n, int what)
// what denotes the algorithm used: what == 3: original algorithm; what == 4: modified algorithm
{
	cout << endl;
	cout << "Random permutation of " << n << " numbers" << endl;
	cout << "================================" << endl;
	cout << endl;

	cout << "The original sequence:   ";
	for (int i = 0; i < n; i++)
		cout << i << ", ";
	cout << n << endl << endl;

	cout << "is randomly permuted to: ";
	vector<int> p;
  if( what == 3 )
    p = RandomUtils::computePermutation(n);
  else
   p = RandomUtils::computePermutation2(n);

	for (int i = 0; i < n; i++)
		cout << p[i] << ", ";
	cout << p[n] << endl;
}





