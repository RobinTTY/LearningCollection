#include "lcg_examples.hpp"
#include <iostream>
#include <limits>
using namespace std;

LCGenerator LCGExamples::selectLCG() {

	cout << "Which linear congruential generator shall be used?" << endl;
	cout << "1: LCG(m = 381,        a = 19,        r = 1,  y0 = 0)" << endl;
	cout << "2: LCG(m = 32,         a = 7,         r = 3,  y0 = 1)" << endl;
	cout << "3: LCG(m = 65536,      a = 4421,      r = 1,  y0 = 0)" << endl;
	cout << "4: LCG(m = 4096,       a = 65,        r = 37, y0 = 1)" << endl;
	cout << "5: LCG(m = 64,         a = 13,        r = 41, y0 = 1)" << endl;
	cout << "6: LCG(m = 2147483647, a = 397204094, r = 0,  y0 = 58854338)" << endl;
	cout << "7: LCG(m = 2147483647, a = 16810,     r = 0,  y0 = 33554433)" << endl;
	cout << "8: LCG with user defined parameters" << endl;
	while(true){
	  int what;
		cin >> what;
		if (!cin || what < 1 || what > 8) {
			cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
			cout << "Wrong input, please try again!" << endl;
      continue;
		}
		if (what == 1) {
			return LCGenerator(381, 19, 1, 0);
		} else if (what == 2) {
			return LCGenerator(32, 7, 3, 1);
		} else if (what == 3) {
			return LCGenerator(65536, 4421, 1, 0);
		} else if (what == 4) {
			//<-lkg_uebung_a--
			return LCGenerator(4096, 65, 37, 1);
			//--lkg_uebung_a->
		} else if (what == 5) {
			//<-lkg_uebung_b--
			return LCGenerator(64, 13, 41, 1);
			//--lkg_uebung_b->
		} else if (what == 6) {
			return LCGenerator(2147483647, 397204094, 0, 58854338);
		} else if (what == 7) {
			//<-lkg_quality_example--
			return LCGenerator(2147483647, 16810, 0, 33554433);
			//--lkg_quality_example->
		} else if (what == 8) {
			return readLCG();
		}
	}
}

LCGenerator LCGExamples::readLCG(){
	int m = 0;
	int a = 0;
	int ystart = 0;
	int r = 0;
	cout << endl << "Input the parameters for a LCG:" << endl;
	cout << "m = "; cin >> m; 
	cout << "a = "; cin >> a; 
	cout << "r = "; cin >> r; 
	cout << "y0 = "; cin >> ystart; 
	return LCGenerator(m, a, r, ystart);
}
