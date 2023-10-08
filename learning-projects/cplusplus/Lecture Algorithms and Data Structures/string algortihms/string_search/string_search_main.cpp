#include <iostream>
#include <string>
#include "skip_table.hpp"
#include "string_search.hpp"
#include "bm_match.cpp"
#include "bf_match.cpp"
#include "kmp_match.cpp"

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

void printMatch(const string & s, int start, int anzahl)
{
	if (start < 0) {
		cout << "Der gesuchte String wurde in " << s;
		cout << " nicht gefunden." << endl;
		return;
	}

	cout << "Gefundener Treffer im String " << s << endl;
	cout << "an der Stelle " << start << " bis zur Stelle ";
	cout << start + anzahl << " :" << endl;

	for (int i = start; i <= start + anzahl; i++)
		cout << s[i];

	cout << endl;

}

StringSearchingInterface * getAlgorithm()
{
	string algo;
	while (true) {

		cout << "Waehlen Sie nun den gewuenschten Algorithmus: BF, KMP oder BM:" << endl;
		getline(cin, algo);
		if (algo == "BF")
		{
			cout << "Algorithmus Brute-Force zum " <<
				"Pattern-Matching von Zeichenketten" << endl;
			return new BFMatching();
		}
		else if (algo == "KMP")
		{
			cout << "Algorithmus von Knuth-Morris-Pratt zum " <<
				"Pattern-Matching von Zeichenketten" << endl;
			return new KMPMatching();
		}
		else if (algo == "BM")
		{
			cout << "Algorithmus von Boyer-Moore zum " <<
				"Pattern-Matching von Zeichenketten" << endl;
			return new BMMatching();
		}
		else
		{
			cout << "Falsche Eingabe, bitte noch einmal!" << endl;
			continue;
		}
	}
}

int main() {

	StringSearchingInterface * matchAlgo = getAlgorithm();

	string basis;
	string pattern;
	int foundPos;

	while (true)
	{
		cout << "Programm beenden mit leerer Zeichenkette!" << endl;
		cout << "Bitte Zeichenkette eingeben, die durchsucht werden soll:" << endl;
		getline(cin, basis);
		if (basis.length() == 0) break;
		cout << "Bitte Zeichenkette eingeben, die gefunden werden soll:" << endl;
		getline(cin, pattern);

		foundPos = matchAlgo->findMatching(basis, pattern);

		printMatch(basis, foundPos, pattern.length() - 1);
	}

	cout << endl << "Programmende erreicht." << endl;

  delete matchAlgo;
	TheEnd;
	return 0;
}
