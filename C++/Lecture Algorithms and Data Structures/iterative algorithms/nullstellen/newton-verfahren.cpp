/*	Datei newton-verfahren.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt das Newton-Verfahren zur Bestimmung
der Nullstelle einer Funktion an dem Beispiel
f(x) = x - cos(x)

Bezug: Kapitel Iterative Algorithmen

*/

#include <iostream>
#include <cmath>
#include <cfloat>
#include "funktor.hpp"

using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

//<-newton1--
// Eingabe: Startwert und gewuenschte Genauigkeit
// Ergebnis: Nullstelle (angenaehert)der
// Funktion f(x) und ihrer Ableitung fp(x),
// gegeben durch den Funktor ftor
double newton(double start, double genau, Funktor & ftor)
{
	double x = start;
	double delta;
	do
	{
		delta = -ftor.f(x) / ftor.fp(x);
		x += delta;
	} while (abs(delta) >= genau);
	return x;
}
//--newton1->

double newton_trace(double start, double genau, Funktor & ftor)
{
	double x = start;
	double delta;
	int i = 1;
	do
	{
		delta = -ftor.f(x) / ftor.fp(x);
		x += delta;
		cout << "Schritt " << i << "  Naeherungswert: " << x << endl;
		i++;
	} while (abs(delta) >= genau);
	return x;
}

int main()
{
	double start, genau;
	cout << endl << "Berechnung der Nullstelle einer Funktion" <<
		"nach dem Newton-Verfahren" << endl;
	cout << "Geben Sie bitte den Startwert ein: " << endl;
	cin >> start;
	cout << "Geben Sie bitte die Genauigkeit ein: " << endl;
	cin >> genau;
	Funktor && beispiel = BeispielFunktion();
	cout << endl << "Nullstelle der Funktion" << beispiel.toString() << endl;
	cout << "nach dem Newton-Verfahren bei x = ";
	cout.precision(14);
	cout << newton(start, genau, beispiel) << endl;

	cout << endl << "Hier nun die Ausgabe der Iterationsschritte" << endl;
	cout << "Startwert ist " << start << endl;
	newton_trace(start, genau, beispiel);

	TheEnd;
	return 0;
}
