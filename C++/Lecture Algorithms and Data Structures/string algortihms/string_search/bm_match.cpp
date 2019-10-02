/*	Datei bm_match.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Boyer-Moore-Algorithmus zur Ueberpruefung,
ob ein Muster in einem Text enthalten ist.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include "skip_table.hpp"
#include "string_search.hpp"

using namespace std;

class BMMatching : public StringSearchingInterface {
public:
//<-bm_match--
	int findMatching(const string & s, const string & p)
	{
		int s_len = s.length();
		int p_len = p.length();
		int i = p_len - 1, j = p_len - 1;

		SkipTable skip(p);

		while( (i < s_len) && (j >= 0) ){
			if (s[i] == p[j]) { i--; j--; }
			else { //mismatch
        // select bigger shift from two alternatives
				if (p_len - j > skip[s[i]]){
          // shift pattern one position with 
          // respect to start of current trial
					i = i + p_len - j; 
				}else{
          // shift pattern using info from skip table
					i = i + skip[s[i]]; 
        }
				j = p_len - 1;
			}
		} 

		return ((j < 0) ? (i + 1) : (-1));
	}
//--bm_match->
};
