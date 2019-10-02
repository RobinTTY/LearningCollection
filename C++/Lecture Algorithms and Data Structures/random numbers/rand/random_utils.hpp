/*	File random_utils.hpp

Authors: J. Koch, M. Dausmann

Class RandomUtils contains the functions which
use the builtin generator of random numbers.

Reference: Chapter Random Numbers

*/
#include <vector>
using namespace std;

class RandomUtils{
	static bool isContained(vector<int> v, int length, int number);
public:
	static int rollDice();
	static vector<int> computePermutation(const int n);
	static vector<int> computePermutation2(const int n);
	static vector<double> generateProbValuesDefault(int numbers);
	static vector<double> generateProbValuesRandom(int numbers);
	static vector<double> generateProbValuesSeeded(int numbers);
	static vector<double> generateGaussianValues(int numbers);
};
