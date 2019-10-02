/*	File standard_squares.hpp

Authors: J. Koch, M. Dausmann

The class StandardSquareDistribution counts the
absolute freqency of subsequent pairs of sample numbers
falling into 100 squares with equal area.
The expected probality of the distribution into
these squares is computed as well.

Reference: Chapter Random Numbers

*/
#pragma once
#include "standard_numbers.hpp"
using namespace std;

class StandardSquareDistribution {
	int checkNumber(double d) {
		if (d < 0.1) return 0;
		if (d < 0.2) return 1;
		if (d < 0.3) return 2;
		if (d < 0.4) return 3;
		if (d < 0.5) return 4;
		if (d < 0.6) return 5;
		if (d < 0.7) return 6;
		if (d < 0.8) return 7;
		if (d < 0.9) return 8;
		return 9;
	}
public:
  double * numbers;    // random digits to be investigated
  int max;          // number of tries (digits)
  int * categories; // absolute frequency of occurrance of catagory in considered sample
  double * probs;   // theoretical probabilities of catagories 
  const int numberCategories; // degrees of freedom 20-1

	StandardSquareDistribution(const StandardNumbers & data) : numberCategories(100) {
		numbers = data.random_numbers;
		max = data.Max;
		categories = new int[numberCategories];
    probs = new double[numberCategories];
		for (int i = 0; i < numberCategories; i++) 
			categories[i] = probs[i] = 0;
	}
  ~StandardSquareDistribution(){
    delete [] categories;
    delete [] probs;
  }

	// Partition numbers into 100 classes:
	//<-square_dist--
	void getObservedDistribution() {
		for (int i = 0; i < max; i++) {
			int index1 = checkNumber(numbers[i]) * 10;
			int index2 = checkNumber(numbers[i + 1]);
			categories[index1 + index2]++;
		}
		return;
	}
	//--square_dist->
	// Expected probabilities for these classes
	// if the numbers are uniformly distributed 
	void getExpectedProbalities() {
		for (int i = 0; i < numberCategories; i++)
			probs[i] = 1.0 / numberCategories;
		return;
	}
};
