/*	Datei char_match.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung einer
einfachen String-Search-Funktion, naemlich die
Suche eines Zeichens in einem Text.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>

using namespace std;

// like methode find(char) of class string
// returns first (from left) position of match
//<-char_match--
int charMatching(const string & t, const char p)
{
	unsigned int pos = 0;

	while ((pos < t.length()) && (t[pos] != p)) pos++;

	return (pos >= t.length()) ? (-1) : pos;
}
//--char_match->

void zeichenSuchen() {

	string basis;
	char vergleich;
	bool ende 
#ifdef __linux__ 
   __attribute__((unused))
#endif
                   = false;

	cout << "Suchen eines Zeichens in einer Zeichenketten:" << endl;
	cout << "Leere Zeichenkette bedeutet Ende des Programms." << endl << endl;

	while (true) {
		cout << "Bitte Zeichenkette eingeben:" << endl;
		getline(cin, basis);
		if (basis.length() == 0) break;
		cout << "Bitte zu suchendes Zeichen eingeben:" << endl;
		cin >> vergleich;
		getchar();

		int result = charMatching(basis, vergleich);

		cout << endl;
		cout << "Ergebnis der Suche: " << result << endl;
		if (result < 0) {
			cout << "Das Zeichen " << vergleich;
			cout << " ist nicht in der Zeichenkette " << basis;
			cout << " vorhanden." << endl << endl;
		}
		else {
			cout << "Das Zeichen " << vergleich;
			cout << " befindet sich an Position " << result;
			cout << " in der Zeichenkette " << basis << endl << endl;
		}
	}
}
