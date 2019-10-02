/*	File chi_table.hpp

Authors: J. Koch, M. Dausmann

This file contains the abstract class ChiTable, which
can be used to search a certain probability
associated with a given chi^2 value.
There are some concrete classes that store some values
corresponding to a given degree of freedom 
(Quantiles of the chi^2 distribution). 
The values are taken from a table in Wikipedia.

Reference: Chapter Random Numbers

*/
#pragma once
class ChiTable {
protected:
	const int Maxchi = 14;
	double chitable[14][2];
public:
	// get the probabilty for a from the chi function table
	double getProbability(double a) {
		double result = 0.9; //Default, if a is too small
		for (int i = 0; i < Maxchi; i++) {
			if (chitable[i][1] < a) continue;
			result = chitable[i][0];
			break;
		}
		return result;
	}
};

class ChiTable2 : public ChiTable {
public:
	ChiTable2() {
		// Table for 2 degrees of freedom
		chitable[0][0]  = 0.005; chitable[0][1]  = 0.01;
		chitable[1][0]  = 0.010; chitable[1][1]  = 0.02;
		chitable[2][0]  = 0.025; chitable[2][1]  = 0.051;
		chitable[3][0]  = 0.050; chitable[3][1]  = 0.103;
		chitable[4][0]  = 0.100; chitable[4][1]  = 0.211;
		chitable[5][0]  = 0.250; chitable[5][1]  = 0.575;
		chitable[6][0]  = 0.500; chitable[6][1]  = 1.386;
		chitable[7][0]  = 0.750; chitable[7][1]  = 2.773;
		chitable[8][0]  = 0.900; chitable[8][1]  = 4.605;
		chitable[9][0]  = 0.950; chitable[9][1]  = 5.991;
		chitable[10][0] = 0.975; chitable[10][1] = 7.378;
		chitable[11][0] = 0.990; chitable[11][1] = 9.210;
		chitable[12][0] = 0.995; chitable[12][1] = 10.60;
		chitable[13][0] = 0.999; chitable[13][1] = 13.82;
	}
};

class ChiTable3 : public ChiTable {
public:
	ChiTable3() {
		// Table for 3 degrees of freedom
		chitable[0][0]  = 0.005; chitable[0][1] = 0.0717;
		chitable[1][0]  = 0.010; chitable[1][1]  = 0.115;
		chitable[2][0]  = 0.025; chitable[2][1]  = 0.216;
		chitable[3][0]  = 0.050; chitable[3][1]  = 0.352;
		chitable[4][0]  = 0.100; chitable[4][1]  = 0.584;
		chitable[5][0]  = 0.250; chitable[5][1]  = 1.213;
		chitable[6][0]  = 0.500; chitable[6][1]  = 2.366;
		chitable[7][0]  = 0.750; chitable[7][1]  = 4.108;
		chitable[8][0]  = 0.900; chitable[8][1]  = 6.251;
		chitable[9][0]  = 0.950; chitable[9][1]  = 7.815;
		chitable[10][0] = 0.975; chitable[10][1] = 9.348;
		chitable[11][0] = 0.990; chitable[11][1] = 11.34;
		chitable[12][0] = 0.995; chitable[12][1] = 12.84;
		chitable[13][0] = 0.999; chitable[13][1] = 16.27;
	}
};

class ChiTable19 : public ChiTable {
public:
	ChiTable19() {
		// Table for 19 degrees of freedom
		chitable[0][0]  = 0.005; chitable[0][1] = 6.844;
		chitable[1][0]  = 0.010; chitable[1][1] = 7.633;
		chitable[2][0]  = 0.025; chitable[2][1] = 8.906;
		chitable[3][0]  = 0.050; chitable[3][1] = 10.12;
		chitable[4][0]  = 0.100; chitable[4][1] = 11.65;
		chitable[5][0]  = 0.250; chitable[5][1] = 14.56;
		chitable[6][0]  = 0.500; chitable[6][1] = 18.34;
		chitable[7][0]  = 0.750; chitable[7][1] = 22.72;
		chitable[8][0]  = 0.900; chitable[8][1] = 27.20;
		chitable[9][0]  = 0.950; chitable[9][1] = 30.14;
		chitable[10][0] = 0.975; chitable[10][1] = 32.85;
		chitable[11][0] = 0.990; chitable[11][1] = 36.19;
		chitable[12][0] = 0.995; chitable[12][1] = 38.58;
		chitable[13][0] = 0.999; chitable[13][1] = 43.82;
	}
};

class ChiTable100 : public ChiTable {
public:
	ChiTable100() {
		// Table for 100 degrees of freedom
		chitable[0][0]  = 0.005; chitable[0][1]  = 67.33;
		chitable[1][0]  = 0.010; chitable[1][1]  = 70.06;
		chitable[2][0]  = 0.025; chitable[2][1]  = 74.22;
		chitable[3][0]  = 0.050; chitable[3][1]  = 77.93;
		chitable[4][0]  = 0.100; chitable[4][1]  = 82.36;
		chitable[5][0]  = 0.250; chitable[5][1]  = 90.13;
		chitable[6][0]  = 0.500; chitable[6][1]  = 99.33;
		chitable[7][0]  = 0.750; chitable[7][1]  = 109.1;
		chitable[8][0]  = 0.900; chitable[8][1]  = 118.5;
		chitable[9][0]  = 0.950; chitable[9][1]  = 124.3;
		chitable[10][0] = 0.975; chitable[10][1] = 129.6;
		chitable[11][0] = 0.990; chitable[11][1] = 135.8;
		chitable[12][0] = 0.995; chitable[12][1] = 140.2;
		chitable[13][0] = 0.999; chitable[13][1] = 149.4;
	}
};
