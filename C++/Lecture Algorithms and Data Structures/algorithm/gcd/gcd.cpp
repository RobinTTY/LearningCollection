/*	File gcd.cpp

Authors: J. Koch, M. Dausmann

This program contains six different functions which compute the greatest common divisor (gcd). 
The main program can be used to test these functions.

Chapter Algorithms

*/

#include <iostream>

using namespace std;

#ifdef __linux__
#define TheEnd 
#else
#define TheEnd getchar();getchar()
#endif

//<-gcd1--
int gcd1(int n, int m)
{
	while (n != m)
	{
		if (n > m)
			n -= m;
		else
			m -= n;
                std::cout << n << " " << m << std::endl;
	}
	return n;
}
//--gcd1->

//<-gcd2--
int gcd2(int n, int m)
{
	if (n > m)
		return gcd2(n-m, m);

	else if (n < m)
		return gcd2(n, m-n);

	else
		return n;
}	
//--gcd2->

//<-gcd3--
int gcd3(int n, int m)
{
	int i;
	for(i=n>m?n:m; i>0; i--)
	{
		if ((n%i == 0) && 
			(m%i == 0))
			return i;
	}
	return 0;
}	
//--gcd3->

//<-gcd4--
int gcd4(int n, int m)
{
	while (n!=0 && m!=0)
	{
		if (n > m)
			n = n % m;
		else
			m = m % n;
	}
	return n + m;
}	
//--gcd4->

//<-gcd5--
int gcd5(int n, int m)
{
	while (n != m)
	{  if (n > m)
			while (n > m)
				n -= m;
		else
			while (m > n)
				m -= n;	}
	return n;
}	
//--gcd5->

//<-gcd6--
int gcd6(int n, int m)
{
	int i;
	for (i=n; i>0; i--)
	{
		if ((n/i)*i == n &&
			(m/i)*i == m)
			break;
	}
	return i;
}	
//--gcd6->

//<-gcd_main--
int main()
{
	int n, m;
	cout << "n = "; cin >> n;
	cout << "m = "; cin >> m;

	cout << "gcd1(" << n << "," << m << ") = " << gcd1(n,m) << endl;
	cout << "gcd2(" << n << "," << m << ") = " << gcd2(n,m) << endl;
	cout << "gcd3(" << n << "," << m << ") = " << gcd3(n,m) << endl;
	cout << "gcd4(" << n << "," << m << ") = " << gcd4(n,m) << endl;
	cout << "gcd5(" << n << "," << m << ") = " << gcd5(n,m) << endl;
	cout << "gcd6(" << n << "," << m << ") = " << gcd6(n,m) << endl;

  TheEnd; 
	return 0;
}
//--gcd_main->
