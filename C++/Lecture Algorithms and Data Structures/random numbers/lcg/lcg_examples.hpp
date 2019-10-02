/*	File lcg_examples.hpp

Authors: J. Koch, M. Dausmann

The class LCGExamples allows to instantiate
some sample Linear Congruential Generators (LCG). 
The main function is to select an appropriate
LCG object.

Reference: Chapter Random Numbers

*/
#pragma once
#include "lc_generator.hpp"

class LCGExamples {
public:
	static LCGenerator selectLCG();
private:
	static LCGenerator readLCG();
};
