/*	Datei string_comp.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des
Vergleichs zweier Strings auf Gleichheit.
Das Ergebnis ist analog zur Methode compare
der Klasse string.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>

using namespace std;

// like method compare of class string:
// result == 0 if the two strings match
// result < 0 if string b is shorter or ...
// result > 0 if string b is longer or ...
//<-strg_comp--
int stringCompare(const string & a, const string & b)
{
	int k, delta;
	int aLast = a.length() - 1;
	int bLast = b.length() - 1;
	int first = 0;

	k = first;
	while ((k <= aLast) && (k <= bLast))
	{
		delta = int(a[k]) - int(b[k]);
		if (delta != 0) {
			return delta;
		}
		k = k + 1;
	}
	//assertion : (k > aLast) or(k > bLast)
	if ((k > aLast) && (k > bLast)) {
		return 0;     //a == b
	}
	else {
		if (k > aLast)
			return -1;  // a < b
		else
			return +1;  // a > b
	}

}
//--strg_comp->

void stringsVergleichen() {

	string basis;
	string vergleich;

	cout << "Vergleichen von zwei Zeichenketten:" << endl << endl;
	cout << "Leere Zeichenkette bedeutet Ende des Programms." << endl << endl;

	while (true) {
		cout << "Bitte (erste) Zeichenkette eingeben:" << endl;
		getline(cin, basis);
		if (basis.length() == 0) break;
		cout << "Bitte (zweite) Zeichenkette zum Vergleichen eingeben:" << endl;
		getline(cin, vergleich);

		int result = stringCompare(basis, vergleich);

		cout << endl;
		cout << "Ergebnis des Vergleichs: " << result << endl;
		if (result > 0)
			cout << "Die erste Zeichenkette ist groesser" << endl;
		else if (result < 0)
			cout << "Die erste Zeichenkette ist kleiner" << endl;
		else cout << "Die beiden Zeichenketten sind gleich" << endl;
		cout << endl;
	}
}

