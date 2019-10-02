/*  File sa_temperature.hpp

Authors: M. Dausmann, J. Koch

Class SATemperature is used in the algorithm that
simulates an annealing process to improve the 
solution of the TSP problem.

Reference: Chapter Random Numbers

*/
#pragma once

//<-tsp_sa_temperature--
class SATemperature {
public:
	double T, Tmin;
	double beta;
	SATemperature(double T0, double step, double Tmin) {
		T = T0; beta = step; this->Tmin = Tmin;
	}
	bool coolDown() { T = T * beta; return T > Tmin; }
};
//--tsp_sa_temperature->
