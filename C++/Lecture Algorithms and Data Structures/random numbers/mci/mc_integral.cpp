/*	File mc_integral.cpp

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

Class RandomPoint is used to generate points
in the specified rectangle.

Reference: Chapter Random Numbers

*/
#include "mc_integral.hpp"
#include "random_point.hpp"

MonteCarloIntegral::MonteCarloIntegral(Functor & f, Point & min, Point & max)
	: minX(min.x), maxX(max.x), minY(min.y), maxY(max.y),
	function(f) {
	lengthX = maxX - minX; 	lengthY = maxY - minY;
}

// Check if test.y is below the function value f(test.x)
bool MonteCarloIntegral::checkTestPoint(Point & test)
{
	if (test.y < function.f(test.x)) return true;
	else return false;
}

// Monte-Carlo-Simulation to compute integral value
// of given function in given interval
//<-mc_integral--
double MonteCarloIntegral::computeIntegral(int numberOfTests)
{
	RandomPoint pointGen(minX, maxX, minY, maxY);
	int hits = 0;
	for (int i = 1; i <= numberOfTests; i++)
	{
		Point && test = pointGen.generateRandomPoint();
		// Check if test.y is below the function value f(test.x)
		if (test.y < function.f(test.x)) hits++;
	}
	double rect = lengthX * lengthY; // rectangle
	double area = rect * (double)hits / numberOfTests;
	return area;
}
//--mc_integral->
