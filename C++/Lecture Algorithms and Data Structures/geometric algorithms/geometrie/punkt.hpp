/*	Datei punkt.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt die Deklaration der Klasse Punkt
und Prototypen von Funktionen fuer die Arbeit 
mit Punkten.

Bezug: Kapitel Geometrische Algorithmen

*/
#pragma once

#include <iostream>
using namespace std;

//<-punkte--
class Punkt {
public:
	double x, y;
	int id;
	Punkt(int id, double x, double y);
	Punkt();
};
//--punkte->

ostream& operator<<(ostream& os, const Punkt& p);
istream& operator>>(istream& is, Punkt& p);
bool operator==(const Punkt & p1, const Punkt& p2);
