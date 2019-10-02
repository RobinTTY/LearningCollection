/*	Datei punktliste.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt Typen und Funktionsprototypen 
fuer die Arbeit mit Punktmengen und Punktlisten.

Bezug: Kapitel Geometrische Algorithmen

*/
#pragma once
#include <string>
#include <vector>
#include <list>
#include "punkt.hpp"

//<-punktliste--
typedef list<Punkt> PunktListe;
typedef vector<Punkt> PunktMenge;
//--punktliste->

PunktListe convertToPunktListe(PunktMenge& pm, int anzahl);

void swap(PunktMenge & work, int index1, int index2);

void printPunktMenge(const string & s, const PunktMenge & pm);

void printPunktListe(const string & s, const PunktListe & pl);

void tracePunktMenge(PunktMenge & pm);

PunktMenge erzeugePunktMenge1();

PunktMenge erzeugePunktMenge2();

PunktMenge erzeugePunktMenge3();

PunktMenge erzeugePunktMenge4();
