/*	Datei string_search.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Hier wird die Schnittstelle fuer alle
String-Searching-Algorithmen definiert,
damit diese zusammen in einem Haupt-
programm aufgerufen werden koennen.

Bezug: Kapitel Stringalgorithmen

*/
#pragma once
#include <string>
using namespace std;

class StringSearchingInterface {
public:
	virtual int findMatching(const string & s, const string & p) = 0;
  virtual ~StringSearchingInterface() {}
};
