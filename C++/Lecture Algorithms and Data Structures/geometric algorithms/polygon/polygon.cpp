/*	Datei polygon_main.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Funktion berechnet ein Polygon, das nacheinander 
alle Punkte der gegebenen Punktmenge beruehrt. 

Bezug: Kapitel Geometrische Algorithmen

*/
#include "../geometrie/winkelliste.hpp"
#include "../geometrie/geometrie.hpp"

//<-polygon--
PunktListe polygon(const PunktMenge & pm)
{
	// Bestimme einen Extrempunkt
	int start = minY(pm);
	// Berechne von diesem Punkt ausgehend die
	// Winkel zu den anderen Punkten
	// und sortiere die Liste nach diesem Winkel
	PunktMenge poly = sortierePunktListe(pm, start);
	// Die resultierende Liste stellt ein Polygon dar
	PunktListe result = convertToPunktListe(poly, poly.size());
	// Endpunkt = Startpunkt 
	result.push_back(pm[start]);
	return result;
}
//--polygon->
