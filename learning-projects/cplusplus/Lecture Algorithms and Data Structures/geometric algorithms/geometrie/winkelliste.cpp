/*	Datei winkelliste.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt Funktionen fuer die Arbeit 
mit Winkellisten, die im Rahmen des Graham-Algorithmus
u.a. benoetigt werden.

Bezug: Kapitel Geometrische Algorithmen

*/
#include <iostream>
#include "winkelliste.hpp"

using namespace std;

void printWinkelListe(const WinkelListe & wm)
{
	cout << "Winkelliste:" << endl;
	for (unsigned int i = 0; i < wm.size(); i++)
	{
		cout << "id = " << wm[i].first.id << ", Winkel = ";
		cout << wm[i].second << endl;
	}
	cout << endl;
}

WinkelListe berechneWinkelListe(const PunktMenge& pm, 
	const Punkt & ursprung, bool trace)
{
	WinkelListe result(pm.size());

	for (unsigned int i = 0; i < pm.size(); i++)
	{
	  double winkel;
		// berechne für alle Elemente der Liste den Winkel zum ursprung
		winkel = berechneWinkel(ursprung, pm[i]);
		result[i] = pair<Punkt,Winkel>(pm[i], winkel);
	}
	if (trace) printWinkelListe(result);
	return result;
}

void swap(WinkelListe & wl, int ind1, int ind2)
{
	pair<Punkt,Winkel> t = wl[ind1];
	wl[ind1] = wl[ind2];
	wl[ind2] = t;
}

PunktMenge sortierePunktListe(const PunktMenge & pm, 
	const int startIndex, bool trace)
{
	const int N = pm.size() - 1;
	WinkelListe wl = berechneWinkelListe(pm, pm[startIndex], trace);
	// Startpunkt nach vorne
	PunktMenge result;
	result.push_back(wl[startIndex].first); // Startpunkt an den Anfang
	swap(wl, 0, startIndex);

	for (int i = 1; i <= N - 1; i++)
	{
		int minIndex = i;
		double minWinkel = wl[i].second;
		for (int j = i + 1; j <= N; j++)
			if (wl[j].second < minWinkel) {
				minIndex = j; minWinkel = wl[j].second;
			}
		result.push_back(wl[minIndex].first); 
		swap(wl, i, minIndex);
	}
	result.push_back(wl[N].first);
	if (trace)
		printPunktMenge("Ausgabe der sortierten Punktmenge:", result);
	return result;
}






