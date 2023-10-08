/*	Datei string_algo_main.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Anwendung einfacher Stringalgorithmen
wie Zeichen suchen und Stringsvergleichen

Bezug: Kapitel Stringalgorithmen

*/
#include <string>
#include <iostream>

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

using namespace std;

void stringsVergleichen();
void zeichenSuchen();


int main() {
	cout << "Implementierung einfacher String-Algorithmen:" << endl;
	cout << "Zeichen suchen (Z)" << endl;
	cout << "Strings vergleichen (V)" << endl;
	cout << "Was wollen Sie tun: ";
	char what;
	cin >> what; getchar();
	cout << endl;

	if (what == 'Z') zeichenSuchen();
	else stringsVergleichen();

	cout << endl << "Ende erreicht." << endl;
  TheEnd;
	return 0;

}

