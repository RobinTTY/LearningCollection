/*	Datei geometrie.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt einige grundlegende Berechnungen aus der
Geometrie.

Bezug: Kapitel Geometrische Algorithmen

*/
#include "geometrie.hpp"
#include <cmath>

int maxY(const PunktMenge& pm) 
{
	int result = 0;
	double max = -DINFINITY;
	for (unsigned int i = 0; i < pm.size(); i++) {
		if (pm[i].y > max) { 
      max = pm[i].y; result = i; 
    } else if (pm[i].y == max && pm[i].x < pm[result].x)
		   result = i;
	}
	return result;
}

int minY(const PunktMenge& pm) 
{
	int result = 0;
	double min = DINFINITY;
	for (unsigned int i = 0; i < pm.size(); i++) {
		if (pm[i].y < min) { 
      min = pm[i].y; result = i; 
    } else if (pm[i].y == min && pm[i].x < pm[result].x)
		   result = i;
	}
	return result;
}

//<-berechne_winkel--
double berechneWinkel(const Punkt & p1, const Punkt & p2)
{
	return atan2((p2.y - p1.y), (p2.x - p1.x));
}
//--berechne_winkel->

//<-orientierung--
int orientierung(Punkt p1, Punkt p2, Punkt p3)
{
	double result;

	result = (p2.x - p1.x) * (p3.y - p2.y) -
		(p2.y - p1.y) * (p3.x - p2.x);

	if (abs(result) < EPS) return 0;
	// Zu kleine Werte werden wie 0 behandelt,
	// sonst pruefe Vorzeichen
	if (result > 0) return 1;
	else return -1;
}
//--orientierung->

//<-schnitt--
bool schnitt(const Strecke & s1, const Strecke & s2)
{
	const Punkt & P1 = s1.p1; const Punkt & P2 = s1.p2;
	const Punkt & P3 = s2.p1; const Punkt & P4 = s2.p2;
	double	det = (P2.x - P1.x)*(P3.y - P4.y) -
		(P2.y - P1.y)*(P3.x - P4.x);
	if (abs(det) < EPS) return false;
	// Determinante ist zu klein
	// Sonst berechne lambda und mu
	double lambda = ((P3.y - P4.y)*(P3.x - P1.x) +
		(P4.x - P3.x)*(P3.y - P1.y)) / det;
	double mu = ((P1.y - P2.y)*(P3.x - P1.x) +
		(P2.x - P1.x)*(P3.y - P1.y)) / det;
	// Pruefe ob lambda und mu in [0,1]
	if ((lambda >= 0 && lambda <= 1)
		&& (mu >= 0 && mu <= 1))
		return true;
	else return false;
}
//--schnitt->

// Bestimme Punkt q ausserhalb des Polygons
// Nimm Punkt mit minimalem y-Wert und 
// verkleinere dessen Koordinaten noch.
// Unser Algorithmus hat ein Problem, falls die Testgerade
// eine Ecke des Polygons trifft. Die Wahrscheinlichkeit
// dafuer wird kleiner, wenn der Testpunkt q keine
// ganzzahlingen Koordinaten aufweist
Punkt bestimmeTestpunkt(PunktListe pl)
{
	//Startpunkt des Polygons hat minimalen Y-Wert!
	//int min = minY(polygon);
	Punkt min = pl.front();
	Punkt q(pl.size() + 10, min.x - 10.123456, min.y - 10.98765);
	return q;
}

//<-innerhalb--
bool innerhalb(const Punkt & p, const PunktListe & polygon)
{
	int anzahl = 0;
	// Bestimme Punkt q ausserhalb des Polygons
	Punkt q = bestimmeTestpunkt(polygon);
	// Bestimme Schnittpunkte der Strecke pq
	// mit allen Kanten des Polygons
	Strecke pq(p, q);
	auto curr = polygon.begin();
	auto next = curr; ++next;
	while (next != polygon.end())
	{
		if (schnitt(Strecke(*curr,*next), pq))
			anzahl++;
		curr++; next++;
	}
	// Anzahl der Schnittpunkte gerade oder nicht
	if (anzahl % 2 == 0) return false;
	else return true;
}
//--innerhalb->
