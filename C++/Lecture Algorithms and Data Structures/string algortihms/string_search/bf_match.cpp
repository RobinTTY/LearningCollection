/*	Datei bf_match.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
naiven Ansatzes mittels Brute-Force zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>
#include "string_search.hpp"

using namespace std;

class BFMatching : public StringSearchingInterface {
public:
//<-brute_search--
	int findMatching(const string & s, const string & p)
	{
		bool found = false;
		int s_i, p_j, merke = -1;
		int s_length = s.length(), p_length = p.length();

		for (s_i = 0; s_i < s_length; s_i++)
		{
			if (s[s_i] == p[0]) // finde Anfang und merke den Index
			{
				merke = s_i; found = true;
				for (p_j = 1; p_j < p_length; p_j++) //pruefe Rest
				{
					if (p_j + s_i >= s_length)  {
						found = false; break;	// passt nicht
					}
					if (s[s_i + p_j] != p[p_j]) {
						found = false; break;   // keine Uebereinstimmung
					}
				}
				if (found) break;
			}
		}
		if (found) return merke;
		else return -1;  // no match
	}
//--brute_search->
};
