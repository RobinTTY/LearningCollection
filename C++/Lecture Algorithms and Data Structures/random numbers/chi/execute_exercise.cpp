/*	File execute_exercise.cpp

Authors: J. Koch, M. Dausmann

This is the function to solve the following exercise:
proove the quality of the first 50 digits of PI
taken as random numbers.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include <iomanip>
#include "random_numbers.hpp"
#include "interval_distribution.hpp"
#include "square_distribution.hpp"
using namespace std;

extern double chiSquareOf(int h[], double p[], const int n, const int N);

void execExerciseDigitsOfPI() {
	RandomNumbers numbers;
	cout << endl;
	cout << "Distribution of numbers into intervals" << endl;
	IntervalDistribution iv_dist(numbers);
	iv_dist.getObservedDistribution();
	iv_dist.getExpectedProbalities();
	for (int i = 0; i < iv_dist.numberCategories; i++)
		cout << "Interval " << i + 1 << " = " << iv_dist.categories[i] << endl;
	cout << "Chi^2 of interval distribution: ";
	double chiIntervals =
		chiSquareOf(iv_dist.categories, iv_dist.probs, numbers.Max, iv_dist.numberCategories);
	cout << setprecision(6) << setfill('0');
	cout << chiIntervals << endl;
	cout << endl;

	cout << "Distribution of pairs into squares" << endl;
	SquareDistribution sq_dist(numbers);
	sq_dist.getObservedDistribution();
	sq_dist.getExpectedProbalities();
	for (int i = 0; i < sq_dist.numberCategories; i++)
		cout << "Square " << i + 1 << " = " << sq_dist.categories[i] << endl;
	cout << "Chi^2 of square distribution: ";
	double chiQuadrants = 
    chiSquareOf(sq_dist.categories, sq_dist.probs, numbers.Max, sq_dist.numberCategories);
	cout << setprecision(6) << setfill('0');
	cout << chiQuadrants << endl;
}
