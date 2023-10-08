/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#include <cassert>
#include "DoubleArray.h"

namespace LinearAlgebra
{

void DoubleArray::copy(const double*  data)
{
  for (int i=0; i< _dim; i++)
    (*this)[i] = data[i];
}

void DoubleArray::set(const double&  val)
{
  for (int i=0; i< _dim; i++)
    (*this)[i] = val;
}

void DoubleArray::negate()
{
  // switch to BLAS
  for (int i=0; i<_dim; i++)
    (*this)[i] *= -1.0;
}

DoubleArray & DoubleArray::operator+=(const double & val)
{
  // switch to BLAS
  if (val != 0.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] += val;
  }
  return *this;
}

DoubleArray & DoubleArray::operator-=(const double & val)
{
  // switch to BLAS
  if (val != 0.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] -= val;
  }
  return *this;
}

DoubleArray & DoubleArray::operator*=(const double & val)
{
  // switch to BLAS
  if (val != 1.0)
  {
    for (int i=0; i<_dim; i++)
      (*this)[i] *= val;
  }
  return *this;
}

DoubleArray & DoubleArray::operator+=(const DoubleArray & op)
{
  // switch to BLAS
  assert(_dim == op._dim);
  for (int i=0; i<_dim; i++)
    (*this)[i] += op[i];
  return *this;
}

DoubleArray & DoubleArray::operator-=(const DoubleArray & op)
{
  // switch to BLAS
  assert(_dim == op._dim);
  for (int i=0; i<_dim; i++)
    (*this)[i] -= op[i];
  return *this;
}

} // namespace LinearAlgebra
