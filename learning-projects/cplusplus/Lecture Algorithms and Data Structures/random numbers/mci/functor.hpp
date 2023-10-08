/*	File functor.hpp

Authors: J. Koch, M. Dausmann

Class Functor is the base class to represent
real functions. Some concrete classes are
given here, that can serve as samples.
The monte-carlo-simulation uses these 
functions to compute some integral values.

Reference: Chapter Random Numbers

*/
#pragma once
#include <cmath>
#include <string>
using namespace std;

//<-functor--
class Functor {
	string name;
public:
	Functor(string name) : name(name) {}
  ~Functor() {}
	virtual double f(const double x) = 0;    // Function f(x)
	string toString() { return name; }
};
//--functor->

// Functions to be integrated
class SampleFunction1 : public Functor {
public:
	SampleFunction1() : Functor("f(x) = x - cos(x)") {}
	double f(const double x)
	{
		return x - cos(x);
	}
};

class SampleFunction2 : public Functor {
public:
	SampleFunction2() : Functor("f(x) = 1.0 / (1.0 + x*x)") {}
	double f(const double x)
	{
		return (1.0 / (1.0 + x*x));
	}
};

class SampleFunction3 : public Functor {
public:
	SampleFunction3() : Functor("f(x) = x") {}
	double f(const double x)
	{
		return (x);
	}
};

class SampleFunction4 : public Functor {
public:
	SampleFunction4() : Functor("f(x) = 1.0") {}
	double f(const double 
#ifdef __linux__
                    __attribute__((unused))
#endif
                               x)
	{
		return (1.0);
	}
};
