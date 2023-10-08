/*	Datei nea_main.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung eines
endlichen Automaten (NEA) zur Ueberpruefung,
ob ein vorgelegter Text zu der Sprache des
Regulaeren Ausdrucks des NEA gehoert.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>
#include <iomanip>
#include <deque>
#include "nea_table.hpp"
#include "nea_simulation.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

using namespace std;

NEATable * initNEA1() {

	NEATable * nea = new NEATable("(A*B|AC)D", 11);

	nea->setzeZustand( 0, ' ',  6,  1);
	nea->setzeZustand( 1, ' ',  2,  2);
	nea->setzeZustand( 2, ' ',  3,  4);
	nea->setzeZustand( 3, 'A',  2,  2);
	nea->setzeZustand( 4, 'B',  5,  5);
	nea->setzeZustand( 5, ' ',  9,  9);
	nea->setzeZustand( 6, 'A',  7,  7);
	nea->setzeZustand( 7, 'C',  8,  8);
	nea->setzeZustand( 8, ' ',  9,  9);
	nea->setzeZustand( 9, 'D', 10, 10);
	nea->setzeZustand(10, ' ',  0,  0);

	return nea;
}

NEATable * initNEA2() {

	NEATable * nea = new NEATable("A*BA", 6);

	nea->setzeZustand(0, ' ', 1, 1);
	nea->setzeZustand(1, ' ', 2, 3);
	nea->setzeZustand(2, 'A', 1, 1);
	nea->setzeZustand(3, 'B', 4, 4);
	nea->setzeZustand(4, 'A', 5, 5);
	nea->setzeZustand(5, ' ', 0, 0);

	return nea;
}

void printMatch(const string & s, int start, int ende)
{
	if (ende < 0) {
		cout << "Das gesuchte Muster wurde in " << s;
		cout << " nicht gefunden." << endl;
		return;
	}

	cout << "Gefundener Treffer im String " << s << endl;
	cout << "an der Stelle " << start << " bis zur Stelle ";
	cout << ende << " :" << endl;

	for (int i = start; i <= ende; i++)
		cout << s[i];
	cout << endl;
}

NEATable * chooseNEATable() {
	cout << "Nicht-deterministischer endlicher Automat zum " << endl;
	cout << "Pattern-Matching von Zeichenketten" << endl << endl;
	cout << "Waehlen Sie den regulaeren Ausdruck:" << endl;
	cout << "1 : (A*B|AC)D (Beispiel Sedgewick)" << endl;
	cout << "2 : A*BA (Beispiel Saake/Satter)" << endl;
	int whichone;  cin >> whichone; getchar();
	NEATable * neaptr;
	if (whichone == 1)
		neaptr = initNEA1();
	else
		neaptr = initNEA2();
	
	printNEATable(*neaptr);

	return neaptr;
}

int main() {
  NEATable * neaptr = chooseNEATable();
	NEASimulation nea(*neaptr);

	string basis;
	int foundPos;

	cout << "Soll die Arbeit des Automaten protokolliert werden?" << endl;
	cout << "Ja (1), Nein (sonst)" << endl;
	int trace;  cin >> trace; getchar();
	if (trace == 1)
		nea.setTrace(true);
	else
		nea.setTrace(false);

	while (true)
	{
		cout << "Programm beenden mit leerer Zeichenkette!" << endl;
		cout << "Bitte Zeichenkette eingeben, die durchsucht werden soll:" << endl;
		getline(cin, basis);
		if (basis.length() == 0) break;

		foundPos = nea.neaMatching(basis);

		printMatch(basis, 0, foundPos);
	}

	cout << endl << "Programmende erreicht." << endl;
  delete neaptr;
	TheEnd;
	return 0;
}
