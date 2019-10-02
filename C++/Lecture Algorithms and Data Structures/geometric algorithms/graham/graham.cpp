/*	Datei graham.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des Graham-Algorithmus
zur Berechnung der konvexen Huelle einer Punktmenge

Bezug: Kapitel Geometrische Algorithmen

*/
#include "../geometrie/winkelliste.hpp"
#include "../geometrie/geometrie.hpp"

void traceGraham(const PunktMenge & pl, int last)
{
	cout << endl;
	cout << "Aktuell in konvexer Huelle:" << endl;
	for (int i = 0; i <= last; i++)
	{
		cout << "P" << pl[i].id;
		cout << "(" << pl[i].x << "," << pl[i].y << ")";
		cout << " , ";
	}
	cout << endl << endl;
}

PunktListe graham_mit_trace(const PunktMenge & pm)
{
	const int N = pm.size();
	int startIndex = maxY(pm);         // Suche Startpunkt
	Punkt startPunkt = pm[startIndex]; // Merke Startpunkt
	PunktMenge ps = sortierePunktListe(pm, startIndex, true);

	PunktMenge huelle(N);
	int last = 0;
	huelle[last] = ps[0];   // Die beiden ersten Punkte
	huelle[++last] = ps[1]; // in die Liste
	for (int index = 2; index < N; index++)
	{
		Punkt next = ps[index];
		while (orientierung(huelle[last - 1], huelle[last], next) < 0)
		{	// Backtracking:
			// Entferne letzten Punkt aus konvexer Huelle
			last--;
			if (last == 0) exit(99);
			traceGraham(huelle, last);
		}
		// Fuege naechsten Punkt zur konvexen Huelle
		huelle[++last] = next;
		traceGraham(huelle, last);
	}
	huelle[++last] = startPunkt;
	printPunktMenge("Ausgabe der Punktmenge nach Graham:", huelle);
	return convertToPunktListe(huelle, last + 1);
}

//<-graham--
PunktListe graham(const PunktMenge & pm)
{
	const int N = pm.size();
	int startIndex = maxY(pm);         // Suche Startpunkt
	Punkt startPunkt = pm[startIndex]; // Merke Startpunkt
	PunktMenge ps = sortierePunktListe(pm, startIndex);

	PunktMenge huelle(N);
	int last = 0;
	huelle[last] = ps[0];   // Die beiden ersten Punkte
	huelle[++last] = ps[1]; // in die Liste
	for (int index = 2; index < N; index++) 
	{
		Punkt next = ps[index];
		while (orientierung(huelle[last-1], huelle[last], next) < 0)
		{	// Backtracking:
			// Entferne letzten Punkt aus konvexer Huelle
			last--;      
		}
		// Fuege naechsten Punkt zur konvexen Huelle
		huelle[++last] = next;     
	}
	huelle[++last] = startPunkt;
	return convertToPunktListe(huelle, last+1);
}
//--graham->
