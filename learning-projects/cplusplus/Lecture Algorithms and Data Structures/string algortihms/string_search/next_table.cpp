/*	Datei next_table.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Knuth-Morris-Pratt-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.
Hier die Implementierung der Next-Tabelle.

Bezug: Kapitel Stringalgorithmen

*/
#include "next_table.hpp"
#include <iostream>

using namespace std;

//<-next_init--
void NextTable::initTable(const string & p) {
	int i = 0, j = -1;
	int p_length = p.length();

	next[i] = j;
	while (i < p_length - 1) {
		if ((j == -1) || (p[i] == p[j])) {
			i++; j++; next[i] = j;
		}
		else j = next[j];
	}
}
//--next_init->

NextTable::NextTable(const string & p) : next(p.length()) {
	initTable(p);
	printTable(*this);
}

void printTable(NextTable & next)
{
	unsigned int i;
	cout << endl << "Ausgabe der Next-Tabelle:" << endl;
	for (i = 0; i < next.length(); i++)
		cout << "next[" << i << "] = " << next[i] << endl;
	cout << endl;
}
