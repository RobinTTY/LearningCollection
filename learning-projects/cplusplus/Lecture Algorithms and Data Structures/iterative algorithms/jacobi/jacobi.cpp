/*	Datei jakobi.cpp

Autoren: J. Koch, M. Dausmann

Aufgabe:
Das Programm zeigt das Jakobi-Iterationsverfahren
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

// Jacobi-Iteration fuer das LGS
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

void copy(const double x[], double y[])
{
	y[0] = x[0];
	y[1] = x[1];
	y[2] = x[2];
}

int main()
{
	int anzahl = 100;
//<-jakobi--
   double xalt[] = { 0.0, 0.0, 0.0 };
   double xneu[3];
   // Anzahl Schritte werden vorgegeben
   for (int i = 0; i < anzahl; ++i)
   {
      xneu[0] = (6 - 6 * xalt[1]) / 3.0;
      xneu[1] = (17 - xalt[0] - 5 * xalt[2]) / 7.0;
      xneu[2] = (-12 - 2 * xalt[0] - 4 * xalt[1]) / (-8.0);
      copy(xneu, xalt);
   }
   //--jakobi->

   cout << "Loesung des Gleichungssystems "
	    << "mittels Jakobi-Iteration:" << endl;
   cout.precision(12);
   cout << fixed << showpos;
   cout << "x[0] = " << xneu[0] << '\t';
   cout << "x[1] = " << xneu[1] << '\t';
   cout << "x[2] = " << xneu[2] << endl;

   cout << endl << "Hier nun die Ausgabe der Iterationsschritte:" << endl;
   for (int i = 0; i < 3; i++)
	   xalt[i] = 0.0;
   // Anzahl Schritte werden vorgegeben
   for (int i = 0; i < anzahl; ++i)
   {
	   xneu[0] = (6 - 6 * xalt[1]) / 3.0;
	   xneu[1] = (17 - xalt[0] - 5 * xalt[2]) / 7.0;
	   xneu[2] = (-12 - 2 * xalt[0] - 4 * xalt[1]) / (-8.0);
	   print(i, xneu);
	   copy(xneu, xalt);
   }

   TheEnd;
   return 0;
}
