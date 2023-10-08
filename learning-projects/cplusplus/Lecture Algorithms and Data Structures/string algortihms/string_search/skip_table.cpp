/*	Datei skip_table.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Boyer-Moore-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.
Hier die Implementierung der Skip-Tabelle
fuer die Bad-Character-Heuristik.

Bezug: Kapitel Stringalgorithmen

*/
#include <iostream>
#include "skip_table.hpp"

SkipTable::SkipTable(const string & p) : skip(maxChars+1) {
	int skipMax = p.length();
	for (int ch = 0; ch <= maxChars; ch++)   // Initialisierung
		skip[ch] = skipMax;

	initTable(p);
	printTable(*this);
}

//<-skip_init--
void SkipTable::initTable(const string & p) {
	int p_last = p.length() - 1;
	unsigned char ch2int;    // Fuer Zugriff auf Tabelle

	for (int j = 0; j <= p_last; j++)  {// Durchsuche Muster
		skip[ch2int = p[j]] = p_last - j;
	}
}
//--skip_init->

void printTable(SkipTable & skip)
{
	cout << endl << "Ausgabe der Skip-Tabelle:" << endl;
	for (int i = 0; i <= skip.length(); i++)
		cout << "skip[" << i << "] = " << skip[i] << endl;
	cout << endl;
}
