/* File: pow.cpp

Authors: J. Koch, M. Dausmann

Two different algorithms for computing x power N.

Reference: Chapter Complexity

*/
#include <iostream>
#include <ctime>
using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

void trace(double p, int n) {
  cout << "p = " << p << "  n = " << n << endl;
}

void trace(double p, double q, int n) {
  cout << "p = " << p << "  q = " << q << "  n = " << n << endl;
}

//<-pow1--
double pow1(double x, int N){
  double p = 1.0;
  while (N > 0) {
    p *= x;
    --N;
  }
  return p;
}
//--pow1->
//<-pow2--
double pow2(double x, int N){
  double p = 1.0, q = x;
  while (N > 0){
    if (N % 2 == 1) p *= q;
    q *= q;
    N /= 2;
  }
  return p;
}
//--pow2->

double pow1_trace(double x, int N) {
  double p = 1.0;
  while (N > 0){
    trace(p, N);
    p *= x;
    --N;
  }
  trace(p, N);
  return p;
}
double pow2_trace(double x, int N) {
  double p = 1.0, q = x;
  while (N > 0) {
    trace(p, q, N);
    if (N % 2 == 1) p = p * q;
    q = q * q;
    N = N / 2;
  }
  trace(p, q, N);
  return p;
}

int main() {
  cout << "Program to compute x power N by two different algorithms." << endl;
  cout << "Which values shall be used for the computation?" << endl;
  double x;
  int n;
  cout << "x = "; cin >> x;
  cout << "N = "; cin >> n; cout << endl;
  cout << "Do you want to trace the computations (0,1)? ";
  bool trace; cin >> trace; 
  double res_pow1;
  double res_pow2;

  if (trace) {
    cout << "\n\nTrace of pow1( " << x << ", " << n << ") : \n\n";
    res_pow1 = pow1_trace(x, n);
    cout << "\n\nTrace of pow2( " << x << ", " << n << ") : \n\n";
    res_pow2 = pow2_trace(x, n);
  }else{
    res_pow1 = pow1(x, n);
    res_pow2 = pow2(x, n);
  }
  cout << "\n\nResults:\n";
  cout << "pow1( " << x << ", " << n << ") = " << res_pow1 << endl;
  cout << "pow2( " << x << ", " << n << ") = " << res_pow2 << endl << endl;

  if (!trace) {
    cout << "Measurement of time consumed to compute x power N" << endl;
    cout << "How many computations shall be measured?" << endl;
  
    clock_t startTime = clock();
    pow1(x, n);
    clock_t endTime = clock();
    double consumed = (endTime - startTime) / (double) CLOCKS_PER_SEC;
    cout << endl << "Time consumed by algorithm pow1(): ";
    cout << consumed << " sec" << endl;
  
    startTime = clock();
    pow2(x, n);
    endTime = clock();
    consumed = (endTime - startTime) / (double) CLOCKS_PER_SEC;
    cout << endl << "Time consumed by algorithm pow2(): ";
    cout << consumed << " sec" << endl;
  }
  TheEnd; 
  return 0;
}
