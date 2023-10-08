/* File: sum.cpp

Authors: J. Koch, M. Dausmann

Three different algorithms for building the sum of N numbers.

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

//<-sum_iter--
long long sum1(int N)
{
	long long S = 0;

	for (int i = 1; i <= N; i++) {
		S = S + i;
	}
	return S;
}
//--sum_iter->

//<-sum_gauss--
long long sum2(int N)
{
	long long n = N;
	return (n * (n + 1)) / 2;
}
//--sum_gauss->

//<-sum_rec--
long long sum3(int N)
{
	if (N == 1) {
		return 1;
	}
	else {
		return sum3(N - 1) + N;
	}
}
//--sum_rec->

//<-sum_main--
int main() {
	cout << "Program to compute the sum of N numbers 1+2+...+N" << endl;
	cout << "with different algorithms. Be aware that" << endl;
	cout << "the recursive algorithm works only for N < Nmax" << endl;
	cout << "where Nmax depends on the machine used." << endl;
	cout << "If you get a segmentation fault you need to decrease N." << endl;
	int N;
	cout << "N = "; cin >> N;
	cout << "1+2+3+...+" << N << " with loop = " << sum1(N) << endl;
	cout << "1+2+3+...+" << N << " with Gaussian formula = " << sum2(N) << endl;
	cout << "1+2+3+...+" << N << " with recursion = " << sum3(N) << endl;

	cout << endl << "Time measurement starts." << endl;
	cout << "How many computations shall be measured?" << endl;
	int howmany; cin >> howmany;
	if (howmany <= 0) exit(0);

  double consumed;
  clock_t start, stop;

  start = clock();	
	for (int i = 1; i <= howmany; i++)
		sum1(N);
	stop = clock();
  consumed = stop - start;
	cout << "Time for iterative solution (loop): ";
	cout << consumed / CLOCKS_PER_SEC << " sec" << endl;

	start = clock();
	for (int i = 1; i <= howmany; i++)
		sum2(N);
	stop = clock();
  consumed = stop - start;
	cout << "Time for Gaussian formula: ";
	cout << consumed / CLOCKS_PER_SEC << " sec" << endl;

  start = clock();
	for (int i = 1; i <= howmany; i++)
		sum3(N);
	stop = clock();
  consumed = stop - start;
	cout << "Time for recursive solution: ";
	cout << consumed / CLOCKS_PER_SEC << " sec" << endl;

  TheEnd; 
	return 0;
}
//--sum_main->

