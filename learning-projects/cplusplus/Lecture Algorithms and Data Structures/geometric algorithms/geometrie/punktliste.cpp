/*	Datei punktliste.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Die Datei enthaelt Funktionen
fuer die Arbeit mit Punktmengen und Punktlisten.

Bezug: Kapitel Geometrische Algorithmen

*/
#include "punktliste.hpp"

PunktListe convertToPunktListe(PunktMenge& pm, int anzahl)
{
	PunktListe result;
	for (int i = 0; i < anzahl; i++)
		result.push_back(pm[i]);
	return result;
}

void swap(PunktMenge & work, int index1, int index2)
{
	Punkt t = work[index1];
	work[index1] = work[index2];
	work[index2] = t;
}

void printPunktMenge(const string & s, const PunktMenge & pm)
{
	cout << endl << s << endl;
	for (auto p = pm.begin(); p != pm.end(); )
	{
		cout << *p;
		p++;
		if (p != pm.end()) 	cout << " , ";
	}
	cout << endl << endl;
}

void printPunktListe(const string & s, const PunktListe & pl)
{
	cout << endl << s << endl;
	for (auto p = pl.begin(); p != pl.end();)
	{
		cout << *p;
		p++;
		if (p != pl.end()) 	cout << " , ";
	}
	cout << endl << endl;
}


void tracePunktMenge(PunktMenge & pm) {
	cout << endl << "Inhalt Array:" << endl;
	for (unsigned int i = 0; i < pm.size(); i++)
	{
		cout << "Index " << i << " Punkt " << pm[i] << endl;
	}
}

PunktMenge erzeugePunktMenge1() {
	Punkt p1(1, 0, -2); Punkt p2(2, 0, -1);
	Punkt p3(3, 0, 2); Punkt p4(4, -2, 0);
	Punkt p5(5, -2, 1); Punkt p6(6, 2, 0);
	PunktMenge pm;
	pm.push_back(p1); pm.push_back(p2);
	pm.push_back(p3); pm.push_back(p4);
	pm.push_back(p5); pm.push_back(p6);
	printPunktMenge("Ausgabe der Punktmenge des Einwickel-Beispiels:", pm);
	return pm;
}

PunktMenge erzeugePunktMenge2() {
	Punkt p1(1, 0, -4); Punkt p2(2, 1, -2);
	Punkt p3(3, 0, 0); Punkt p4(4, -2, -2);
	Punkt p5(5, -0.25, -3); Punkt p6(6, 2, -2);
	Punkt p7(7, 1, -2.5);
	PunktMenge pm;
	pm.push_back(p1); pm.push_back(p2);
	pm.push_back(p3); pm.push_back(p4);
	pm.push_back(p5); pm.push_back(p6);
	pm.push_back(p7);
	printPunktMenge("Ausgabe der Punktmenge des Graham-Beispiels:", pm);
	return pm;
}

PunktMenge erzeugePunktMenge3() {
	Punkt p1(1, 1, 4); Punkt p2(2, 1, 1);
	Punkt p3(3, 2, 5); Punkt p4(4, 2, 2);
	Punkt p5(5, 3, 3); Punkt p6(6, 5, 4);
	Punkt p7(7, 5, 2);
	PunktMenge pm;
	pm.push_back(p1); pm.push_back(p2);
	pm.push_back(p3); pm.push_back(p4);
	pm.push_back(p5); pm.push_back(p6);
	pm.push_back(p7);
	printPunktMenge("Ausgabe der Punktmenge des Klausur-Beispiels:", pm);
	return pm;
}

PunktMenge erzeugePunktMenge4()
{
	Punkt p1(1, 0, 0); Punkt p2(2, 3, 0);
	Punkt p3(3, 1, 3); Punkt p4(4, 4, 3);
	PunktMenge pm;
	pm.push_back(p1); pm.push_back(p2);
	pm.push_back(p3); pm.push_back(p4);
	printPunktMenge("Ausgabe der Punktmenge eines Vierecks:", pm);
	return pm;

}

