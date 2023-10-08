/*	Datei kmp_match.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Knuth-Morris-Pratt-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>
#include "string_search.hpp"
#include "next_table.hpp"

using namespace std;

class KMPMatching : public StringSearchingInterface {
public:
//<-kmp_match--
int findMatching(const string & s, const string & p)
{
	int i = 0, j = 0;
	int s_l = s.length(), p_l = p.length(); 

	NextTable next(p);

	do {

		if ((j == -1) || (s[i] == p[j])) { i++; j++; }
		else j = next[j];	//mismatch

	} while ((i < s_l) && (j < p_l));

	return (j == p_l) ? (i - p_l) : (-1);
}
//--kmp_match->

};