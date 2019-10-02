/*	File mc_integral_test.cpp

Authors: J. Koch, M. Dausmann

The program shall test the computation of 
integral values of real functions using
a monte-carlo-simulation.

Reference: Chapter Random Numbers

*/

#include <iostream>
#include <limits>
#include "mc_integral.hpp"
#include "functor.hpp"
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int readANumber(string s) {
	cout << s << endl;
	cout << "Number: ";
	int trials;
	cin >> trials;
	if (!cin) {
		trials = 1; cin.clear();
		cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}
	return trials;
}

void printResult(Functor & f, double minX, double maxX, double value) {
	cout << endl;
	cout << "Integral value of the function " << f.toString() << endl;
	cout << "in the interval [" << minX << ".." << maxX << "]" << endl;
	cout << "using a Monte-Carlo-Simulation is: " << endl;
	cout << endl << value << endl;
}


int main()
{
	cout << "Program to compute the definite integral of a real function" << endl;
	cout << "by using a Monte-Carlo-like simulation algorithm" << endl << endl;

	double integralValue;
	int trials = readANumber("How many iterations shall be performed?");

	Point min1(0.75, 0.0); Point max1(1.5, 5.0);

  SampleFunction1 function1;
	MonteCarloIntegral mci1(function1, min1, max1);
	integralValue = mci1.computeIntegral(trials);
	printResult(function1, min1.x, max1.x, integralValue);

	Point min2(-1.0, 0.0); Point max2(1.0, 1.0);
  SampleFunction2 function2;
	MonteCarloIntegral mci2(function2, min2, max2);
	integralValue = mci2.computeIntegral(trials);
	printResult(function2, min2.x, max2.x, integralValue);

	Point min3(0.0, 0.0); Point max3(2.0, 5.0);
  SampleFunction3 function3;
	MonteCarloIntegral mci3(function3, min3, max3);
	integralValue = mci3.computeIntegral(trials);
	printResult(function3, min3.x, max3.x, integralValue);

	Point min4(0.0, 0.0); Point max4(2.0, 5.0);
  SampleFunction4 function4;
	MonteCarloIntegral mci4(function4, min4, max4);
	integralValue = mci4.computeIntegral(trials);
	printResult(function4, min4.x, max4.x, integralValue);

	TheEnd;
	return 0;
}
