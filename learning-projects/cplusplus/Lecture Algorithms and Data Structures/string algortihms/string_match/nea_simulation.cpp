/*	Datei nea_simulation.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Simulation eines
endlichen Automaten (NEA) zur Ueberpruefung,
ob ein vorgelegter Text zu der Sprache des
Regulaeren Ausdrucks des NEA gehoert.
Es gibt noch eine Methode mit Trace-Ausgabe.

Bezug: Kapitel Stringalgorithmen

*/
#include "nea_simulation.hpp"
#include <iostream>
#include <iomanip>

void NEASimulation::setTrace(bool trace)
{
	this->trace = trace;
}

void printDeque(deque<State> & dq) {
	for (auto it = dq.begin(); it != dq.end(); it++)
		cout << setw(3) << *it;
	cout << endl;
}

void printInfo(State state, int pos, deque<State> & dq) {
	cout << "Z = " << setw(3) << state << " POS = " << pos;
	cout << " DEQUE = "; printDeque(dq);
}

//<-nea_match--
int NEASimulation::neaMatching(const string & s)
{
	State state, n1, n2;
	deque<State> dq;
	unsigned int pos = 0;

	state = NEATable::START;      // start at init state 
	dq.push_back(NEATable::SCAN); // init deque 
	do {
		if (trace) printInfo(state, pos, dq);  //trace output
		if (state == NEATable::SCAN) {         //special mark reached 
			pos++; dq.push_back(NEATable::SCAN); //start w/ next char
		} else if (nea.charAt(state) == NEATable::C_EPS) { 
      //C_EPS => consider next state(s) from table
			n1 = nea.next1(state); n2 = nea.next2(state);
			dq.push_front(n1);
			if (n1 != n2) { dq.push_front(n2); }
		} else {                      //lookahead to next character
			if (pos < s.length() && nea.charAt(state) == s[pos]) 
				dq.push_back(nea.next1(state));    //character matching
		}
		if ((pos > s.length()) || dq.empty()) break;
		// move to next state
		state = dq.front(); dq.pop_front();

		// only final acceptance state transitions to init state
	} while (state != NEATable::START);

	return (state == NEATable::START) ? (pos - 1) : (-1);
}
//--nea_match->







