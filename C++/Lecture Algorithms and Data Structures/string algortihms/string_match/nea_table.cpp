/*	Datei nea_table.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung eines
endlichen Automaten (NEA) zur Ueberpruefung,
ob ein vorgelegter Text zu der Sprache des
Regulaeren Ausdrucks des NEA gehoert.
Hier die Implementierung der Zustandstabelle.

Bezug: Kapitel Stringalgorithmen

*/
#include <iostream>
#include <iomanip>
using namespace std;

#include "nea_table.hpp"

const State NEATable::SCAN = -1; // special mark in NEA 
const State NEATable::START = 0; // init state
const char NEATable::C_EPS = ' ';// character for epsilon

NEATable::NEATable(string regexp, int anzahlZustaende)
: anzahlZustaende(anzahlZustaende), regexp(regexp) {
	ch_arr   = new char[anzahlZustaende];
	nxt1_arr = new State[anzahlZustaende];
	nxt2_arr = new State[anzahlZustaende];
	for (State i = 0; i < anzahlZustaende; i++)
		setzeZustand(i, ' ', 0, 0);
}

void NEATable::setzeZustand(State zustand, char ch, State n1, State n2) {
	if (zustand < anzahlZustaende)
	{
		ch_arr[zustand] = ch;
		nxt1_arr[zustand] = n1;
		nxt2_arr[zustand] = n2;
	}
}

void printNEATable(NEATable & nea)
{
	int anzahl = nea.getAnzahlZustaende();
	cout << endl << "Ausgabe der NEA-Table:" << endl;
	cout << endl << "Zustand z ";
	for (int i = 0; i < anzahl; i++)
		cout << setw(3) << i;
	cout << endl << "char[z]   ";
	for (int i = 0; i < anzahl; i++)
		cout << setw(3) << nea.charAt(i);
	cout << endl << "next1[z]  ";
	for (int i = 0; i < anzahl; i++)
		cout << setw(3) << nea.next1(i);
	cout << endl << "next2[z]  ";
	for (int i = 0; i < anzahl; i++)
		cout << setw(3) << nea.next2(i);
	cout << endl << endl;
}

