/*	Datei punkt.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt Funktionen
fuer die Arbeit mit Punkten.

Bezug: Kapitel Geometrische Algorithmen

*/
#include <cassert>
#include "punkt.hpp"

Punkt::Punkt(int id, double x, double y)
	: x(x), y(y), id(id) {}

Punkt::Punkt() : x(0.0), y(0.0), id(-1){}

istream & operator>>(istream & is, Punkt & p) {
	char c;
	// ( x , y ) einlesen
	is >> c >> p.x >> c >> p.y >> c;
	return is;
}

ostream & operator<<(ostream & os, const Punkt & p) {
	os << "P" << p.id;
	os << "(" << p.x << "," << p.y << ")";
	return os;
}

bool operator==(const Punkt & p1, const Punkt& p2)
{
  assert( p1.id != -1 && p2.id != -1 );
	return p1.id == p2.id; 
}

