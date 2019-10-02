/*	File mc_integral.hpp

Authors: J. Koch, M. Dausmann

This class implements the computation of
integral values of real functions using
a monte-carlo-simulation. 

The function must be given as an object 
of class Functor.

The points min and max are interpreted as 
edges of a rectangle: the interval for the 
integration is determined by the x-coordinates
of these points: [min.x,max.x]. 
The y-coordinates must be chosen so that all 
function values over this interval 
are between [min.y,max.y].

Reference: Chapter Random Numbers

*/
#pragma once
#include "functor.hpp"
#include "point.hpp"

class MonteCarloIntegral {
private:
	 // limits of interval
	 double minX, maxX;
	 double minY, maxY;
	 double lengthX, lengthY;
	 // function to be integrated
	 Functor & function;
	 // check if test.y is below function value
	 bool checkTestPoint(Point & test);
public:
	MonteCarloIntegral(Functor & f, Point & min, Point & max);
	double computeIntegral(int numberOfTests);
};
