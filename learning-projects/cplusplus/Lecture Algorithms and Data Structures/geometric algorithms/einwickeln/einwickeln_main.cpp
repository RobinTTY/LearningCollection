/*	Datei einwickeln_main.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des Einwickeln-Algorithmus
zur Berechnung der konvexen Huelle einer Punktmenge. Nach dem
Start des Programms koennen 3 Punktmengen ausgewaehlt werden.

Hinweis: es werden die Header-Datei aus dem Projekt geometrie
benoetigt. Die entsprechenden obj-Files muessen als Ressourcen
eingebunden werden.

Bezug: Kapitel Geometrische Algorithmen

*/
#include "../geometrie/geometrie.hpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

PunktListe einwickeln(PunktMenge & pm);

int main()
{
	PunktMenge pm;
	int what;
	cout << "Berechnen der konvexen Huelle einer Punktmenge" << endl;
	cout << "mit dem Algorithmus Einwickeln." << endl << endl;
	cout << "Welche Punktemenge soll bearbeitet werden:" << endl;
	cout << "Beispiel Einwickeln(1) oder" << endl;
	cout << "Beispiel Graham(2) oder" << endl;
	cout << "Beispiel Klausur SS15(3)?" << endl;
	cin >> what;
	if (what == 1)
		pm = erzeugePunktMenge1();
	else if (what == 2)
		pm = erzeugePunktMenge2();
	else
		pm = erzeugePunktMenge3();

	PunktListe huelle = einwickeln(pm);

	printPunktListe("Ausgabe der konvexen Huelle nach Einwickeln:", huelle);

	TheEnd;
	return 0;
}
