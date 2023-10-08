/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#include <iostream>
#include <cassert>
#include <cmath>
#include "DoubleVector.h"

namespace LinearAlgebra
{

Vector Vector::get_block(const int start, const int end)
{
  Vector x;

  int n = dim();
  int m = end - start + 1;
  
  if (start >= 1 && end <= n && m > 0)
  {
    x = Vector(m);
    int j = 0;
    for (int i=start-1; i < end; i++)
      x[j++] = (*this)[i];
  }
  return x;
}

void Vector::set_block(const int start, const int end, const Vector & val)
{
  int n = dim();
  int m = end - start + 1;

  assert(m == val.dim());
  
  if (start >= 1 && end <= n && m == val.dim() && m > 0)
  {
    int j = 0;
    for (int i=start-1; i < end; i++)
      (*this)[i] = val[j++];
  }
}

double maxabs( const Vector & x )
{
	double maxabs = 0.0;
	const int n = x.dim();
	for (int i = 1; i<=n; ++i)
	{
		if ( abs(x(i)) > maxabs )
			maxabs = x(i);
	}
	return maxabs;
}


#ifdef DEBUG

void Vector::debug(std::ostream &os) const 
{
  int n = dim();
 
  os << "Vector with " << n << " elements:" << std::endl;

  for (int i=0; i<n; i++)
	  os << "  " << (*this)[i] << std::endl;

  os << std::endl;	
}

#endif

} // namespace LinearAlgebra
