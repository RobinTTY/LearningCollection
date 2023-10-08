/*	File standard_intervals.hpp

Authors: J. Koch, M. Dausmann

The class StandardIntervalDistribution counts the
absolute freqency of the sample numbers in 20
equidistant intervals of [0,1)
The expected probality of the distribution into
these intervals is computed as well.

Reference: Chapter Random Numbers

*/
#pragma once
#include "standard_numbers.hpp"
using namespace std;

class StandardIntervalDistribution {
public:
  double * numbers;    // random digits to be investigated
  int max;          // number of tries (digits)
  int * categories; // absolute frequency of occurrance of catagory in considered sample
  double * probs;   // theoretical probabilities of catagories 
  const int numberCategories; // degrees of freedom 20-1

	StandardIntervalDistribution(const StandardNumbers & data) : numberCategories(20) {
		numbers = data.random_numbers;
		max = data.Max;
		categories = new int[numberCategories];
    probs = new double[numberCategories];
		for (int i = 0; i < numberCategories; i++) 
      categories[i] = probs[i] = 0;
	}
  ~StandardIntervalDistribution(){
    delete [] categories;
    delete [] probs;
  }

	// Partition numbers into 20 categories (intervals)
	//<-interval_dist--
	void getObservedDistribution() {
		for (int i = 0; i < max; i++) {
			if (numbers[i] < 0.05) { categories [0]++; continue; }
			if (numbers[i] < 0.10) { categories [1]++; continue; }
			if (numbers[i] < 0.15) { categories [2]++; continue; }
			if (numbers[i] < 0.20) { categories [3]++; continue; }
			if (numbers[i] < 0.25) { categories [4]++; continue; }
			if (numbers[i] < 0.30) { categories [5]++; continue; }
			if (numbers[i] < 0.35) { categories [6]++; continue; }
			if (numbers[i] < 0.40) { categories [7]++; continue; }
			if (numbers[i] < 0.45) { categories [8]++; continue; }
			if (numbers[i] < 0.50) { categories [9]++; continue; }
			if (numbers[i] < 0.55) { categories [10]++; continue; }
			if (numbers[i] < 0.60) { categories [11]++; continue; }
			if (numbers[i] < 0.65) { categories [12]++; continue; }
			if (numbers[i] < 0.70) { categories [13]++; continue; }
			if (numbers[i] < 0.75) { categories [14]++; continue; }
			if (numbers[i] < 0.80) { categories [15]++; continue; }
			if (numbers[i] < 0.85) { categories [16]++; continue; }
			if (numbers[i] < 0.90) { categories [17]++; continue; }
			if (numbers[i] < 0.95) { categories [18]++; continue; }
			categories[19]++;
		}
		return;
	}
	//--interval_dist->
	// Expected probabilities for these categories assuming
	// if the numbers are uniformly distributed 
	void getExpectedProbalities() {
		for (int i = 0; i < numberCategories; i++)
			probs[i] = 1.0 / numberCategories;
		return;
	}
};
