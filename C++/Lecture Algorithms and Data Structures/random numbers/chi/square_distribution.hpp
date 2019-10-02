/*	File square_distribution.hpp

Authors: J. Koch, M. Dausmann

The class SquareDistribution counts the
absolute freqency of subsequent pairs of sample digits
falling into 4 squares: 
(0..4, 0..4), (0..4, 5..9), (5..9, 0..4) and (5..9, 5..9).
The expected probality of the distribution into
these squares is computed as well.

Reference: Chapter Random Numbers

*/
#pragma once
#include "random_numbers.hpp"
using namespace std;

class SquareDistribution {
public:
	int * numbers;    // random digits to be investigated
	int max;          // number of tries (digits)
	int * categories; // absolute frequency of occurrance of catagory in considered sample
  double * probs;   // theoretical probabilities of catagories 
	const int numberCategories; 

	SquareDistribution(const RandomNumbers & data) : numberCategories(4) {
		numbers = data.random_numbers;
		max = data.Max;
		categories = new int[numberCategories];
    probs = new double[numberCategories];
		for (int i = 0; i < numberCategories; i++) 
      categories[i] = probs[i] = 0;
	}
  ~SquareDistribution(){
    delete [] categories;
    delete [] probs;
  }

	// Partition numbers into 4 classes:
	// (0..4, 0..4), (0..4, 5..9), (5..9, 0..4) and (5..9, 5..9)
	//<-square_dist--
	void getObservedDistribution() {
		for (int i = 0; i < max; i++) {
			if (numbers[i] >= 0 && numbers[i] <= 4) {
				if (numbers[i + 1] >= 0 && numbers[i + 1] <= 4)
					categories[0]++;
				else categories[1]++;
			}
			else if (numbers[i] >= 5 && numbers[i] <= 9) {
				if (numbers[i + 1] >= 0 && numbers[i + 1] <= 4)
					categories[2]++;
				else categories[3]++;
			}
		}
		return;
	}
	//--square_dist->
	// Expected probabilities for these classes
	// if the numbers are uniformly distributed 
	void getExpectedProbalities() {
		probs[0] = 0.25; // = 1 / 4
		probs[1] = 0.25;
		probs[2] = 0.25;
		probs[3] = 0.25;
		return;
	}
};
