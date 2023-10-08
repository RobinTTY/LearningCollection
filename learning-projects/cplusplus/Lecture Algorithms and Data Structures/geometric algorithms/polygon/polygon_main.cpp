/*	Datei polygon_main.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die einfache Berechnung eines Polygons 
zu einer gegebenen Punktmenge. Das Ergebnis ist ein Polygon, 
das nacheinander alle Punkte beruehrt. Nach dem
Start des Programms koennen 3 Punktmengen ausgewaehlt werden.

Hinweis: es werden die Header-Datei aus dem Projekt geometrie
benoetigt. Die entsprechenden obj-Files muessen als Ressourcen
eingebunden werden.

Bezug: Kapitel Geometrische Algorithmen

*/
#include "../geometrie/punktliste.hpp"
#include <iostream>
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

PunktListe polygon(const PunktMenge & pm);

int main()
{
	cout << "Polygon zu einer Punktmenge: " << endl;
	cout << "============================ " << endl;
	cout << endl;
	cout << "Berechne zu einer gegebenen Menge von Punkten " << endl;
	cout << "ein Polygon, das alle Punkte beruehrt." << endl;
	cout << endl;
	cout << "Welche Punktemenge soll bearbeitet werden:" << endl;
	cout << "Beispiel Einwickeln(1) oder" << endl;
	cout << "Beispiel Graham(2) oder" << endl;
	cout << "Beispiel Klausur SS15(3)?" << endl;
	int what;
	PunktMenge pm;
	cin >> what;
	if (what == 1)
		pm = erzeugePunktMenge1();
	else if (what == 2)
		pm = erzeugePunktMenge2();
	else
		pm = erzeugePunktMenge3();

	PunktListe pg = polygon(pm);

	printPunktListe("Ein Polygon, das alle Punkte beruehrt: ", pg);

	TheEnd;
	return 0;
}
