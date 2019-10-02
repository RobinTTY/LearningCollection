/*	File lcg_actions.hpp

Authors: J. Koch, M. Dausmann

The class LCGActions implements the actions
that can be performed on a selected LCG.
It allows to select among the actions
and executes the selected one.

Reference: Chapter Random Numbers

*/
#pragma once
#include <vector>
#include "lc_generator.hpp"

class LCGActions {
private:
	static void listRandomSequence(LCGenerator & lcg, int N);
	static void outputRandomNumbers(LCGenerator & lcg);
	static int rollDice(LCGenerator & lcg);
	static void simulateDice(LCGenerator & lcg);
	static void transformToStandardNumbers(LCGenerator & lcg, int N);
	static void transformToNormalDist(LCGenerator & lcg, int N);
	static void applyBoxMuller(vector<double>& uniform_dist, vector<double>& normal_dist, int N);
	static int readNumberOfTrials();
public:
	static void chooseAction(LCGenerator & lcg);
};
