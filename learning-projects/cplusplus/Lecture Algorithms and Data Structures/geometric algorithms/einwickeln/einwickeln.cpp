/*	Datei einwickeln.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt die Implementierung des Einwickeln-Algorithmus
zur Berechnung der konvexen Huelle einer Punktmenge

Bezug: Kapitel Geometrische Algorithmen

*/
#include <math.h>
#include <iostream>
#include "../geometrie/geometrie.hpp"

using namespace std;
const double PI = M_PI;

//<-einwickeln--
PunktListe einwickeln(PunktMenge & pm)
{
	const int N = pm.size();
	PunktListe huelle;
	double winkel,
		neuerMinWinkel = -PI, vorgaengerWinkel = 0.0;
  // Index min bezieht sich auf min. Winkel
	int min = maxY(pm);      // Suche Startpunkt
	Punkt start = pm[min];   // Merke Startpunkt
	pm.push_back(start); // Startpunkt beruecksichtigen
	for (int i = 0; i < N; i++)
	{
		huelle.push_back(pm[min]);
		swap(pm, i, min);
		min = N; 
		vorgaengerWinkel = neuerMinWinkel; 
		neuerMinWinkel = PI;
		for (int j = i + 1; j <= N; j++)
		{
			winkel = berechneWinkel(pm[i], pm[j]);
			if (winkel > vorgaengerWinkel)
				if (winkel < neuerMinWinkel)
				{
					// Kleinerer Winkel gefunden
					min = j; 
					neuerMinWinkel = winkel;
				}
		}
		// Anfangspunkt erreicht ?
		if (pm[min] == start) break;
	}
	huelle.push_back(start); //Anfangspunkt = Endpunkt
	return huelle;
}
//--einwickeln->
