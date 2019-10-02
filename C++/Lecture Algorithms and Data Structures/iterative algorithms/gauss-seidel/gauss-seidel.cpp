/*	Datei gauss-seidel.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt das Gauss-Seidel-Iterationsverfahren
zur Loesung eines linearen Gleichungssystems
an einem Beispiel.

Bezug: Kapitel Iterative Algorithmen

*/
#include <iostream>

using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

// Gauss-Seidel-Iteration für das LGS
//
// 3 x_1 + 6 x_2         =   6
//   x_1 + 7 x_2 + 5 x_3 =  17
// 2 x_1 + 4 x_2 - 8 x_3 = -12

void print(const int i, const double x[])
{
	cout.precision(12);
	cout << noshowpos << i << ":\t";
	cout << fixed << showpos;
	cout << x[0] << '\t';
	cout << x[1] << '\t';
	cout << x[2] << endl;
}

int main()
{
	int anzahl = 100;
//<-gauss_seidel--
	double x[] = { 0.0, 0.0, 0.0 };
	// Anzahl wird vorgegeben
	for (int i = 0; i < anzahl; ++i)
	{
		x[0] = (6.0 - 6.0 * x[1]) / 3.0;
		x[1] = (17.0 - x[0] - 5.0 * x[2]) / 7.0;
		x[2] = (-12.0 - 2.0 * x[0] - 4.0 * x[1]) / (-8.0);
	}
//--gauss_seidel->

	cout << "Loesung des Gleichungssystems mittels "
		 << "Gauss-Seidel-Iteration:" << endl;
	cout.precision(12);
	cout << fixed << showpos;
	cout << "x[0] = " << x[0] << '\t';
	cout << "x[1] = " << x[1] << '\t';
	cout << "x[2] = " << x[2] << endl;

	cout << endl << "Hier nun die Ausgabe der Iterationsschritte:" << endl;
	for (int i = 0; i < 3; i++)
		x[i] = 0.0;
	// Anzahl wird vorgegeben
	for (int i = 0; i < anzahl; ++i)
	{
		x[0] = (6.0 - 6.0 * x[1]) / 3.0;
		x[1] = (17.0 - x[0] - 5.0 * x[2]) / 7.0;
		x[2] = (-12.0 - 2.0 * x[0] - 4.0 * x[1]) / (-8.0);
		print(i, x);
	}

	TheEnd;
	return 0;
}
