/*	Datei winkelliste.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt die Deklaration und die Prototypen 
von Funktionen fuer die Arbeit mit Winkellisten, 
die im Rahmen des Graham-Algorithmus benoetigt werden.

Bezug: Kapitel Geometrische Algorithmen

*/
#pragma once
#include "punkt.hpp"
#include "punktliste.hpp"
#include "geometrie.hpp"
#include <vector>

using namespace std;

typedef double Winkel;

typedef vector<pair<Punkt,Winkel>> WinkelListe;

void printWinkelListe(const WinkelListe & wm);

WinkelListe berechneWinkelListe(const PunktListe & pm, 
	const Punkt & ursprung, bool trace = false);

void swap(WinkelListe & wl, int ind1, int ind2);

PunktMenge sortierePunktListe(const PunktMenge & pm, 
	const int startIndex, bool trace = false);
