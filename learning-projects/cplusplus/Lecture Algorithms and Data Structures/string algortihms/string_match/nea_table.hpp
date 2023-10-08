/*	Datei nea_table.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung eines
endlichen Automaten (NEA) zur Ueberpruefung,
ob ein vorgelegter Text zu der Sprache des
Regulaeren Ausdrucks des NEA gehoert.
Hier die Datenstruktur fuer die Zustandstabelle.

Bezug: Kapitel Stringalgorithmen

*/
#pragma once
#include <string>

using namespace std;

typedef int State;     // states coded with integers

//<-nea_table--
class NEATable {
	char * ch_arr;
	State * nxt1_arr;
	State * nxt2_arr;
	int anzahlZustaende;
	string regexp;
public:
	NEATable(string regexp, int anzahlZustaende);
  ~NEATable(){
	  delete[] ch_arr; delete[] nxt1_arr; delete[] nxt2_arr;
  }
  static const State SCAN;  // -1:  special mark in NEA
  static const State START; //  0:  init state
  static const char C_EPS;  // ' ': character for epsilon

	void setzeZustand(State zustand, char ch, State n1, State n2);

	char charAt(State zustand) { return ch_arr[zustand]; }
	State next1(State zustand) { return nxt1_arr[zustand]; }
	State next2(State zustand) { return nxt2_arr[zustand]; }

	int getAnzahlZustaende() { return anzahlZustaende; }
	string getRegExp() { return regexp; }
};
//--nea_table->
void printNEATable(NEATable & nea);

