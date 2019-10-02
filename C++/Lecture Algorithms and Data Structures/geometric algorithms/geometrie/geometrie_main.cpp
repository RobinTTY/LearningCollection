#include "punkt.hpp"
#include "geometrie.hpp"
#include "punktliste.hpp"
#include "strecke.hpp"
#include <iostream>

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

extern PunktListe polygon(const PunktMenge&);
// Das obj-File dazu muss als Ressource eingebunden werden!

int main()
{
	char what;
	cout << "Was soll gemacht werden:" << endl;
	cout << "Schnitt von Strecken (S) oder " << endl;
	cout << "Punkt innerhalb eines Polygons (I)	?" << endl;
	cin >> what;
	if (what == 'S') {
		char weiter = 'W';
		Strecke s1, s2;

		while (weiter == 'W')
		{
			cout << "Pruefung, ob sich zwei Strecken schneiden" << endl;
			cout << "=========================================" << endl;
			cout << endl;
			cout << "Eingabe der Strecken in der Form |(x,y)-(x,y)|" << endl;
			cout << "Strecke 1:" << endl;
			cin >> s1; s1.p1.id = 1; s1.p2.id = 2;
			cout << "Strecke 2:" << endl;
			cin >> s2; s2.p1.id = 3; s2.p2.id = 4;

			cout << endl << endl;
			cout << "Die Strecke " << s1;
			cout << " schneidet die Strecke " << s2;
			if (schnitt(s1, s2))
				cout << "." << endl;
			else
				cout << " nicht." << endl;

			cout << "Weiter (W) oder Stop (S)?";
			cin >> weiter;
		}
	}
	else if (what == 'I') {
		char weiter = 'W';
		while (weiter == 'W')
		{
			cout << "Punkt innerhalb eines Polygons: " << endl;
			cout << "============================ " << endl;
			cout << endl;
			cout << "Pruefe, ob ein gegebener Punkt " << endl;
			cout << "innerhalb eines Polygons liegt." << endl;
			cout << endl << endl;
			PunktMenge pl = erzeugePunktMenge4();
			PunktListe pg = polygon(pl);
			printPunktListe("Ein Polygon, das alle Punkte beruehrt:", pg);
			Punkt pkt;
			cout << "Welcher Punkt soll getestet werden?" << endl;
			cin >> pkt;
			cout << "Der Punkt liegt ";
			if (innerhalb(pkt, pg))
				cout << "innerhalb des Polygons." << endl;
			else
				cout << "ausserhalb des Polygons." << endl;
			cout << "Weiter (W) oder Stop (S)?";
			cin >> weiter;
		}
	}
	else cout << "Falsche Auswahl!" << endl;

	TheEnd;
	return 0;
}
