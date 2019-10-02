/*  File TextStatistics.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

File TextStatistics contains the functions
to create a statistics table of words 
contained in a text file (exercise).
It uses class PairStringInt to map words to
a counter and adds the pairs in a hash table.

Be sure that the text.txt file is in the project directory!

Reference: Chapter Searching
*/
#include <iostream>
#include <fstream>
#include "TextStatistics.hpp"
#include "../basics/HashTableBasics.hpp"
#include "PairStringInt.hpp"
#include "HashcodeString.hpp"

bool TextStatistics::stdhash = false;

PairStringInt * TextStatistics::createPair(string s) {
	if (stdhash) return new HashcodeString(s, 1);
	else
		return new PairStringInt(s, 1);
}

//<-map_strings--
void TextStatistics::testHashTableWithStrings() {
	HashTable * ht = new ListHashTable(37);
	// ...
//--map_strings->

	// Open file text.txt for reading
	ifstream file("text.txt", ios::in);
	if (!file) {
		cout << "Cannot open file text.txt." << endl;
		getchar();
		exit(-1);
	}
	char c; string buffer;
//<-statistics_algo1--
	while (file.get(c))	{
//--statistics_algo1->
		if (file.eof() || file.bad()) {
			cout << endl << "Error when reading from file text.txt." << endl;
			getchar();
			exit(-1);
		}

//<-statistics_algo2--
		// Isolate words and separate them 
		// using special characters as separators
		if (isalpha(c)) {
			buffer += c;
		}
		else if (buffer.length() > 0) {	
			// Found a word: increase its count
			PairStringInt * data = createPair(buffer);
			HashDataImpl & found = (HashDataImpl&)ht->search(*data);
			if (found.getKey() == HashData::freeKey)
				ht->add(*data);
			else
				found.setData(found.getData() + 1);
			buffer.clear();
		}
	}
//--statistics_algo2->

	// print contents of hash map
	cout << "Hash table after analyzing file text.txt:" << endl;
	cout << ht->toString() << endl;
//<-brace--
	// ...
}
//--brace->
