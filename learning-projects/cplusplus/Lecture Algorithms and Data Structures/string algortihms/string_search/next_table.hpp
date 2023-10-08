/*	Datei next_table.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Knuth-Morris-Pratt-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.
Hier die Datenstruktur fuer die Next-Tabelle.

Bezug: Kapitel Stringalgorithmen

*/
#pragma once
#include <string>
#include <vector>

using namespace std;

//<-next_table--
class NextTable {
	vector<int> next;
	void initTable(const string & p);
public:
	NextTable(const string & p);
	int operator[] (int i) { return next[i]; }
	unsigned int length() { return next.size(); }
};
//--next_table->

void printTable(NextTable & next);

