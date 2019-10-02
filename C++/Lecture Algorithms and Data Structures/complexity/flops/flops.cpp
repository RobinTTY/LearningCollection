/* File: flops.cpp

Authors: J. Koch, M. Dausmann

Experimental calculation of floating point performance.  

Reference: Chapter Complexity

*/
#include <iostream>
#include <ctime>
#include <cstdint>
#include <climits>
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

//<-flops_main--
int main() {
  double x = 1.0;
	cout << "Program to calculate the floating point performance by experiment" << endl;
//<-time_measurement--
	clock_t startTime = clock();
	for (int k = 0; k < INT_MAX; k++) {
		x *= 2.001;
		x /= 2.0011;    
	}
  clock_t stopTime = clock();
  double diffTime = (stopTime - startTime);
  double consumed = diffTime / CLOCKS_PER_SEC;
  cout << "Time consumed =  " << consumed << " sec" << endl;
//--time_measurement->
	cout << "Flops = " << 4.0 * INT_MAX / consumed << " per sec" << endl;
	cout << "Ergebnis = " << x << endl;  // required for x to be actually calculated

  TheEnd; 
	return 0;
}  
//--flops_main->  
