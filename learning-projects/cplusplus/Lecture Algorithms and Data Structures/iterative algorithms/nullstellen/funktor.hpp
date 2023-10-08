/*	Datei funktor.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Klasse Funktor dient dazu, eine Funktion f()
und ihre Ableitung fp() zusammen zu fassen.
Die Klasse wird bei der Bestimmung der Nullstelle 
einer Funktion nach Newton benutzt.

Anschliessend folgt ein Beispielfunktor:
f(x) = x - cos(x)

Bezug: Kapitel Iterative Algorithmen

*/


#include <cmath>
#include <string>
using namespace std;

//<-functor--
class Funktor {
public:
	virtual double f(const double x) = 0;    // Funktion f(x)
	virtual double fp(const double x) = 0;   // Ableitung f'(x)
	virtual string toString() = 0;
};
//--functor->

class BeispielFunktion : public Funktor {
	// Beispielfunktion: f(x) = x - cos(x)
	double f(const double x)
	{
		return x - cos(x);
	}

	// Abgeleitete Funktion: f'(x) = 1 + sin(x)
	double fp(const double x)
	{
		return 1 + sin(x);
	}
	string toString() { return "f(x) = x - cos(x)"; }
};