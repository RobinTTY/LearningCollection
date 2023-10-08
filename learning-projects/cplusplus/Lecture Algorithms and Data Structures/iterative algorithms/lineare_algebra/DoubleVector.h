/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#ifndef DOUBLEVECTOR_INCLUDED
#define DOUBLEVECTOR_INCLUDED

#include <iostream>
#include "LinearAlgebra.h"
#include "DoubleArray.h"

namespace LinearAlgebra
{

//-----------------------------------------------------------------------------
//
// Vector
//
//-----------------------------------------------------------------------------

/**
 * This class implements the functionality of a general double Vector with
 * variable dimension.
 * It is prepared to be used with the BLAS and LAPACK FORTRAN libraries.
 * The class works with out these libraries, but in order to achieve better
 * performace the FORTRAN libraries should be used.
 */

class LINEAR_ALGEBRA_API Vector : public DoubleArray
{

public: 

/**
 * Standard constructor.
 */
  Vector();
  
/**
 * Constructor for a Vector with specified dimension.
 */
  Vector(const int dim);

/**
 * Constructor for a Vector with specified dimension and value.
 */
  Vector(const int dim, const double & val);

/**
 * Constructor for a Vector from a double array.
 */
  Vector(const int dim, const double * data);

/**
 * Copy constructor.
 */
  Vector(const Vector & op);

  Vector get_block(const int start, const int end);
  void set_block(const int start, const int end, const Vector & val);
  
#ifdef DEBUG
  void debug(std::ostream &os = std::cerr) const ;
#endif
  
};

//-----------------------------------------------------------------------------
//
// inline functions of Vector
//
//-----------------------------------------------------------------------------

inline Vector::Vector()
  : DoubleArray() 
{  
}

inline Vector::Vector(const int dim)
  : DoubleArray(dim) 
{
}

inline Vector::Vector(const int dim, const double & val)
  : DoubleArray(dim, val) 
{
}

inline Vector::Vector(const int dim, const double * data)
  : DoubleArray(dim, data) 
{
}

inline Vector::Vector(const Vector & op)
  : DoubleArray(op) 
{
}

//-----------------------------------------------------------------------------
//
// global operator functions
//
//-----------------------------------------------------------------------------

inline Vector operator-(const Vector & x)
{
  Vector y(x);
  y.negate();
  return y;
}

inline Vector operator+(const double & x, const Vector & y)
{
  Vector z(y);
  z += x;
  return z;
}

inline Vector operator-(const double & x, const Vector & y)
{
  Vector z(y);
  z.negate();
  z += x;
  return z;
}

inline Vector operator*(const double & x, const Vector & y)
{
  Vector z(y);
  z *= x;
  return z;
}

inline Vector operator+(const Vector & x, const double & y)
{
  Vector z(x);
  z += y;
  return z;
}

inline Vector operator-(const Vector & x, const double & y)
{
  Vector z(x);
  z -= y;
  return z;
}

inline Vector operator*(const Vector & x, const double & y)
{
  Vector z(x);
  z *= y;
  return z;
}

inline Vector operator+(const Vector & x, const Vector & y)
{
  Vector z(x);
  z += y;
  return z;
}

inline Vector operator-(const Vector & x, const Vector & y)
{
  Vector z(x);
  z -= y;
  return z;
}

LINEAR_ALGEBRA_API double maxabs( const Vector & x );

} // namespace LinearAlgebra

#endif // DOUBLEVECTOR_INCLUDED
