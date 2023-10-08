/*	Datei reg_exp.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Benutzung von
Regulaeren Ausdruecken in C++11.

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

//<-reg_exp--
#include <regex>

bool checkRegExp(string text, string pattern) 
{
	return (regex_match(text, regex(pattern)));
}
//--reg_exp->

int main() {

	string text, muster;

	cout << "Pattern-Matching mit regulaeren Ausdruecken" << endl << endl;
	cout << "Waehlen Sie den regulaeren Ausdruck:" << endl;
	cout << "1 : (A*B|AC)D (Beispiel Sedgewick)" << endl;
	cout << "2 : A*BA (Beispiel Saake/Satter)" << endl;
	cout << "3 : Eigener regulaerer Ausdruck" << endl;
	int whichone;  cin >> whichone; getchar();
  // using raw string literals is recommended to avoid escaping special characters
	if (whichone == 1)
		 muster = (R"(A*(B|AC)D)"); 
	else if (whichone == 2) muster = (R"(A*BA)");
	else {
		cout << "Bitte eigenen regulaeren Ausdrucke eingeben:" << endl;
		getline(cin, muster);
		cout << "Eingegebener regulaerer Ausdruck:" << muster << endl;
	}

	while (true)
	{
		cout << "Programm beenden mit leerer Zeichenkette!" << endl;
		cout << "Bitte Zeichenkette eingeben, die durchsucht werden soll:" << endl;
		getline(cin, text);
		if (text.length() == 0) break;
		cout << endl;

		if (checkRegExp(text, muster))
			cout << "Match von " << text << " und " << muster;
		else
			cout << "Mismatch zwischen " << text << " und " << muster;
		cout << endl << endl;
	}

	cout << endl << "Programmende erreicht." << endl;

	TheEnd;
	return 0;
}
