/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#include "assert.h"
#include "IntArray.h"

namespace LinearAlgebra
{

IntArray::IntArray(std::istream &is, const int dim)
  : _dim(dim), _data(0) 
{
  if (dim < 0)
  {
    /*
     * Read the dimension from the stream.
     */
    is >> _dim;
  }

  if (_dim < 0)
    _dim = 0;

  initialize(_dim);

   for (int i=0; i< _dim; i++)
     is >> (*this)[i];
}

void IntArray::copy(const int*  data)
{
  for (int i=0; i< _dim; i++)
    (*this)[i] = data[i];
}

void IntArray::set(const int&  val)
{
  for (int i=0; i< _dim; i++)
    (*this)[i] = val;
}

void IntArray::negate()
{
  // switch to BLAS
  for (int i=0; i<_dim; i++)
    (*this)[i] *= -1;
}

IntArray & IntArray::operator+=(const int & val)
{
  // switch to BLAS
  if (val != 0.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] += val;
  }
  return *this;
}

IntArray & IntArray::operator-=(const int & val)
{
  // switch to BLAS
  if (val != 0.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] -= val;
  }
  return *this;
}

IntArray & IntArray::operator*=(const int & val)
{
  // switch to BLAS
  if (val != 1.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] *= val;
  }
  return *this;
}

IntArray & IntArray::operator+=(const IntArray & op)
{
  // switch to BLAS
  assert(_dim == op._dim);
  for (int i=0; i<_dim; i++)
    (*this)[i] += op[i];
  return *this;
}

IntArray & IntArray::operator-=(const IntArray & op)
{
  // switch to BLAS
  assert(_dim == op._dim);
  for (int i=0; i<_dim; i++)
    (*this)[i] -= op[i];
  return *this;
}


#ifdef DEBUG

void IntArray::debug(std::ostream &os) const 
{
  int n = dim();
 
  os << "IntArray with " << n << " elements:" << std::endl;

  for (int i=0; i<n; i++)
	  os << "  " << (*this)[i] << std::endl;

  os << std::endl;	
}

#endif

} // namespace LinearAlgebra
