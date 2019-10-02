/*	Datei geometrie.hpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt die Prototypen fuer einige
grundlegende Berechnungen aus der Geometrie.

Bezug: Kapitel Geometrische Algorithmen

*/
#pragma once
#include "punkt.hpp"
#include "punktliste.hpp"
#include "strecke.hpp"
#include <limits>
#include <cfloat>

// Berechne den Index des Punktes mit max. y-Wert
// in dem gegebenen Punktarray
// Bei gleichen y-Werten waehle Punkt mit min. x-Wert
int maxY(const PunktMenge & pm);

// Berechne den Index des Punktes mit min. y-Wert
// in dem gegebenen Punktarray
// Bei gleichen y-Werten waehle Punkt mit min. x-Wert
int minY(const PunktMenge & pm);

// Berechne den Winkel zwischen der 
// Geraden durch p1 und p2 mit der x-Achse
double berechneWinkel(const Punkt & p1, const Punkt & p2);

// Berechne die Orientierung der beiden Kanten
// (P1,P2) und (P2,P3)
int orientierung(Punkt p1, Punkt p2, Punkt p3);

bool schnitt(const Strecke & s1, const Strecke & s2);
// prueft, ob sich die Strecken s1 und s2
// schneiden

bool innerhalb(const Punkt & p, const PunktListe & polygon);
// prueft, ob der Punkt p innerhalb des 
// Polygons liegt.


const double DINFINITY = numeric_limits<double>::infinity();

const double EPS = DBL_EPSILON;

