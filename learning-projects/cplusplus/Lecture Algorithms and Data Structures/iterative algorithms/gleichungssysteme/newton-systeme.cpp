/*	Datei newton-systeme.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt das Newton-Verfahren zur Loesung
von nichtlinearen Gleichungssystemen am Beispiel:

x^2 + 2y^2 - 8 = 0
x^3 - 4y       = 0

Bezug: Kapitel Iterative Algorithmen

*/

#include <iostream>
#include <cmath>
#include <cfloat>
// Dateien muessen aus lineare_algebra
// in das Projekt eingebunden werden:
#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

Vector f(const Vector& x)
{
	Vector f(2);
	f(1) = x(1)*x(1) + 2.0*x(2)*x(2) - 8.0;
	f(2) = x(1)*x(1)*x(1) - 4.0*x(2);
	return f;
}

Matrix Jinv(const Vector& x)
{
	Matrix Jinv(2, 2);
	const double D = -8.0*x(1) - 12.0*x(1)*x(1)*x(2);
	Jinv(1, 1) = -4.0 / D;
	Jinv(1, 2) = -4.0*x(2) / D;
	Jinv(2, 1) = -3.0*x(1)*x(1) / D;
	Jinv(2, 2) = 2.0*x(1) / D;
	return Jinv;
}

//<-newton2--
// Eingabe: Startvektor und gewuenschte Genauigkeit
// Ergebnis: Loesung (angenaehert) des Systems gegeben
// durch die Funktionen f(x) und dazugehoeriger
// invertierter Jakobi-Matrix Jinv(x).
Vector newton(Vector x, double genau)
{
	Vector delta;
	do
	{
		delta = -Jinv(x)*f(x);
		x += delta;
	} while (maxabs(delta) >= genau);
	return x;
}
//--newton2->

Vector newton_Trace(Vector x, double genau)
{
	Vector delta;
	int i = 1;
	do
	{
		delta = -Jinv(x)*f(x);
		x += delta;
		cout << "Schritt " << i << ": ";
		cout << "x = " << x(1) << '\t' << "y = " << x(2) << endl;
		i++;
	} while (maxabs(delta) >= genau);
	return x;
}

int main()
{
	cout << "Newton-Verfahren zur Loesung des Gleichungssystems" << endl;
	cout << endl;
	cout << "x^2 + 2y^2 - 8 = 0" << endl;
	cout << "x^3 - 4y       = 0" << endl;
	cout << endl;

	Vector x(2);
	x(1) = 1.0;
	x(2) = 1.0;
	x = newton(x, DBL_EPSILON);
	cout.precision(10);
	cout << "x = " << x(1) << '\t' << "y = " << x(2) << endl;

	cout << endl << "Jetzt die einzelnen Schritte: " << endl;
	x(1) = 1.0;
	x(2) = 1.0;
	x = newton_Trace(x, DBL_EPSILON);
	TheEnd;
	return(0);
}
