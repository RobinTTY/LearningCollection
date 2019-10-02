/*	Datei skip_table.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Boyer-Moore-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.
Hier die Datenstruktur fuer die Skip-Tabelle
zur Implementierung der Bad-Character-Heuristik.

Bezug: Kapitel Stringalgorithmen

*/
#pragma once
#include <string>
#include <vector>
#include <limits>

using namespace std;

typedef unsigned char Alphabet; // wird nicht benutzt

//<-skip_table--
// Die Tabelle wird fuer das Alphabet unsigned char ausgelegt:
// Die Indizes sind daher [0..maxChars]
// char muss ggf. nach unsigned char gecastet werden
class SkipTable {
	const int maxChars = numeric_limits<unsigned char>::max();
	vector<int> skip;
	void initTable(const string & p);
public:
	SkipTable(const string & p);
	int operator[] (unsigned char c) { return skip[c]; }
	int length() { return maxChars; }
};
//--skip_table->

void printTable(SkipTable & skip);
