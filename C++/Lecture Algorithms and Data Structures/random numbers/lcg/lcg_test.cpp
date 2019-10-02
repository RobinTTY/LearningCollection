/*	File lcg_test.cpp

Authors: J. Koch, M. Dausmann

This is the main program to study Linear
Congruential Generators (LCG). You can select
among a set of sample LCGs and perform some
actions using it.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include "lc_generator.hpp"
#include "lcg_examples.hpp"
#include "lcg_actions.hpp"
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

int main()
{
	cout << endl;
	cout << "Program for studying linear congruential generators (LCG)" << endl;
	cout << "=========================================================" << endl;
	cout << endl;
	 
	LCGenerator lcg = LCGExamples::selectLCG();
	cout << endl;
	cout << "Working now with " << lcg.toString() << endl;
	cout << endl;
	
	LCGActions::chooseAction(lcg);

	TheEnd;
	return 0;
}
