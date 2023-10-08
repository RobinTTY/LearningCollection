/*	Datei nea_simulation.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Simulation eines
endlichen Automaten (NEA) zur Ueberpruefung,
ob ein vorgelegter Text zu der Sprache des
Regulaeren Ausdrucks des NEA gehoert. Die
Simulation wird mit einer Zustandstabelle
instanziiert, danach koennen Texte
ueberprueft werden.

Bezug: Kapitel Stringalgorithmen

*/
#pragma once
#include <string>
#include <deque>
#include "nea_table.hpp"

using namespace std;

class NEASimulation {
	bool trace;
	NEATable & nea;
public:
	NEASimulation(NEATable & neatab) : nea(neatab){}

	// Simulation eines NEA mithilfe einer Deque
	// Das gesuchte Muster muss bei s[0] beginnen.
	// Ergebnis: Position in s, bis zu der das 
	// Muster geht, oder -1 falls Muster nicht erkannt.
	int neaMatching(const string & s);
	void setTrace(bool trace);
};

