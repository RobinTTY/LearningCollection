/*  File SearchTest.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

File SearchTest contains the main program 
to test the different search implementations
using different data sets (arrays).

Reference: Chapter Searching
*/
#include <iostream>
#include <ctime>
#include <cstdlib>
#include <algorithm>
#include "RecursiveBinarySearch.hpp"
#include "IterativeBinarySearch.hpp"
#include "IterativeLinearSearch.hpp"
#include "RecursiveLinearSearch.hpp"
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

// search function to be used, selected by user
SearchInterface * sf; 
// example data set from script
int example[] = { 0, 0, 0, 7, 8, 11, 15, 47 };
// MAXRN random numbers in [0,100) in ascending order
const int MAXRN = 10;
int * generateRandomData() {
  int * data = new int[MAXRN];
  srand((unsigned int)time(nullptr));
  for (int i = 0; i < MAXRN; i++)
    data[i] = rand() % 100;
  sort(data, data + MAXRN);
  return data;
}

//<-search_test_main--
int main ()
{
  cout << "Test program for different search implementations" << endl;
  cout << "=================================================" << endl;
  cout << endl;
  cout << "Which search function shall be tested:" << endl;
  cout << "1: Linear search - iterative version" << endl;
  cout << "2: Linear search - recursive version" << endl;
  cout << "3: Binary search - iterative version" << endl;
  cout << "4: Binary search - recursive version" << endl;

  int whatFunction; cin >> whatFunction;
  switch (whatFunction) {
  case  1: sf = new IterativeLinearSearch(); break;
  case  2: sf = new RecursiveLinearSearch(); break;
  case  3: sf = new IterativeBinarySearch(); break;
  case  4: sf = new RecursiveBinarySearch(); break;
  default:          
    cout << "Unknown case, using iterative linear search" << endl;
    sf = new IterativeLinearSearch(); break;
  }
  cout << endl;
  cout << "Which data set shall be used for the test:" << endl;
  cout << "1: Example from script" << endl;
  cout << "2: Randomly generated numbers" << endl;

  int * data;
  int left = 0; int right = 7;
  int whatData; cin >> whatData;
  switch (whatData) {
  case  1: data = example; break;
  case  2: data = generateRandomData(); right = MAXRN-1;  break;
  default: cout << endl;
    cout << "Unknown case, using example from script" << endl; 
    data = example; break;
  }
  cout << endl;
  cout << "The data set contains the following values:" << endl;
  for (int i = left; i < right; i++)
    cout << data[i] << ", ";
  cout << data[right] << endl;
    
  while (true) {
    cout << endl;
    cout << "Enter value to be searched in this set" << endl;
    cout << "or a negative value to exit program:" << endl;
    int value; cin >> value;
    if (value < 0) break;
    bool contains = sf->search(data, left, right, value);
  
    if (contains) 
      cout << "Data set contains value " << value << endl;
    else      
      cout << "Data set does NOT contain value " << value << endl;
  }
  delete sf;
  if(data != example) delete[] data;
    TheEnd;
  return 0;
}
