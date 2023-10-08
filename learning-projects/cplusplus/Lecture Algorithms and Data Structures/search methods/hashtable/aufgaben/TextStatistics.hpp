/*  File TextStatistics.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

File TextStatistics contains the functions
to create a statistics table of words 
contained in a text file (exercise). 
It uses class PairStringInt to map words to 
a counter and adds the pairs in a hash table.

Reference: Chapter Searching
*/
#include "PairStringInt.hpp"

class TextStatistics {
public:
	static bool stdhash;
	static void testHashTableWithStrings();
	static PairStringInt * createPair(string s);
};
