/*	File interval_distribution.hpp

Authors: J. Koch, M. Dausmann

The class IntervalDistribution counts the
absolute freqency of the sample digits distributed
into three given intervals: [0,2], [3,6], [7,9].
The expected probability of the distribution into 
these intervals is computed as well.

Reference: Chapter Random Numbers

*/
#pragma once
#include "random_numbers.hpp"
using namespace std;

class IntervalDistribution {
public:
  int * numbers;    // random digits to be investigated
  int max;          // number of tries (digits)
  int * categories; // absolute frequency of occurrance of catagory in considered sample
  double * probs;   // theoretical probabilities of catagories 
  const int numberCategories; 

	IntervalDistribution(const RandomNumbers & data) : numberCategories(3) {
		numbers = data.random_numbers;
		max = data.Max;
		categories = new int[numberCategories];
    probs = new double[numberCategories];
		for (int i = 0; i < numberCategories; i++)
			categories[i] = probs[i] = 0;
	}
  ~IntervalDistribution(){
    delete [] categories;
    delete [] probs;
  }

	// Partition numbers into 3 classes: 0..2, 3..6 and 7...9
	//<-interval_dist--
	void getObservedDistribution() {
		for (int i = 0; i < max; i++) {
			switch (numbers[i]) {
			case 0: case 1: case 2: categories[0]++; break;
			case 3: case 4: case 5: case 6: categories[1]++; break;
			case 7: case 8: case 9: categories[2]++; break;
			}
		}
		return;
	}
	//--interval_dist->

	// Expected probabilities for these categories
	// if the numbers are uniformly distributed 
	void getExpectedProbalities() {
		probs[0] = 0.3; // 3.0 / digits;
		probs[1] = 0.4; // 4.0 / digits;
		probs[2] = 0.3; // 3.0 / digits;
		return;
	}
};
