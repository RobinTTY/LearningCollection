/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#ifndef DOUBLEARRAY_INCLUDED
#define DOUBLEARRAY_INCLUDED

#include "LinearAlgebra.h"

namespace LinearAlgebra
{

//-----------------------------------------------------------------------------
//
// class DoubleArray
//
//-----------------------------------------------------------------------------

/**
 * This class is intended to be used as a base class for Vectors and matrices
 * with variable dimensions.
 * It is prepared to be used with the BLAS and LAPACK FORTRAN libraries.
 * The class works with out these libraries, but in order to achieve better
 * performace the FORTRAN libraries should be used.
 */
class LINEAR_ALGEBRA_API DoubleArray
{

public: 

/**
 * Standard constructor.
 */
  DoubleArray();
  
/**
 * Constructor for a Vector with specified dimension.
 */
  DoubleArray(const int dim);
  
/**
 * Constructor for a Vector with specified dimension and value.
 * All elements have the same value.
 */
  DoubleArray(const int dim, const double & val);
  
/**
 * Constructor for a Vector from a double array.
 * A new double array is created, i.e. the double pointer data is not shared.
 * This means we use deep copy.
 */
  DoubleArray(const int dim, const double * data);
  
/**
 * Copy constructor.
 */
  DoubleArray(const DoubleArray & op);

/**
 * Destructor. Be careful, the destructor is not virtual ! 
 */
  ~DoubleArray();
  
/**
 * Assignment operator.
 */
  DoubleArray & operator=(const DoubleArray & op);
  
/**
 * Access with 0-index.
 */
  double   operator[] (const int i) const ;
  double & operator[] (const int i);
  
/**
 * Access with 1-index.
 */
  double   operator() (const int i) const ;
  double & operator() (const int i);
  
/**
 * The dimension or size of the array.
 */
  int dim() const ;

/**
 * The dimension or size of the array.
 */
  int size() const ;

/**
 * If the new dimension dim does not fit to the array dimension then the old
 * array is destroyed and a new array is generated. The content will be lost.
 */
  void resize(const int dim);
  
/**
 * Unary minus.
 */
  DoubleArray & operator-();
  
/**
 * Negate all elements.
 */
  void negate();
  
/**
 * Add an array and a double.
 */
  DoubleArray & operator+=(const double & val);

/**
 * Subtract a double from an array.
 */
  DoubleArray & operator-=(const double & val);

/**
 * Multiply an array by a double.
 */
  DoubleArray & operator*=(const double & val);
  
/**
 * Add two arrays.
 */
  DoubleArray & operator+=(const DoubleArray & op);
  
/**
 * Subtract an array from an array.
 */
  DoubleArray & operator-=(const DoubleArray & op);
  
protected: 
  
  void initialize(int dim);
  void copy(const double*  data);
  void set(const double&  val);
  void destroy();
  
private: 
  
  int _dim;
  double *_data;
};

//-----------------------------------------------------------------------------
//
// inline functions of class DoubleArray
//
//-----------------------------------------------------------------------------

inline void DoubleArray::initialize(int dim)
{
  _data = new double[dim];
  _dim = dim;
}

inline void DoubleArray::destroy()
{     
  if (_data != 0)
  {
    delete [] (_data);     
    _data = 0;
    _dim = 0;
  }
}

inline DoubleArray::DoubleArray()
    : _dim(0), _data(0) 
{  
}

inline DoubleArray::DoubleArray(const int dim)
    : _dim(dim), _data(0) 
{
  initialize(dim);
#ifdef DEBUG
  set(47.11);
#endif
}

inline DoubleArray::DoubleArray(const int dim, const double & val)
    : _dim(dim), _data(0) 
{
  initialize(dim);
  set(val);
}

inline DoubleArray::DoubleArray(const int dim, const double * data)
    : _dim(dim), _data(0) 
{
  initialize(dim);
  copy(data);
}

inline DoubleArray::DoubleArray(const DoubleArray & op)
    : _dim(op._dim), _data(0) 
{
  initialize(op._dim);
  copy(op._data);
}

inline DoubleArray::~DoubleArray()
{
  destroy();
}

inline DoubleArray & DoubleArray::operator=(const DoubleArray & op)
{
  if (this != &op)
  {
    if (_dim != op._dim)
    {
      destroy();
      initialize(op._dim);
    }
    copy(op._data);
  }
  return *this;
}

inline double   DoubleArray::operator[] (const int i) const 
{
  return (i >= 0 && i < _dim) ? _data[i] : 47.11;
}

inline double & DoubleArray::operator[] (const int i) 
{
  return (i >= 0 && i < _dim) ? _data[i] : _data[0];
}

inline double   DoubleArray::operator() (const int i) const 
{
  return (*this)[i-1];
}

inline double & DoubleArray::operator() (const int i) 
{
  return (*this)[i-1];
}

inline DoubleArray & DoubleArray::operator-()
{
  negate();
  return *this;
}

inline int DoubleArray::dim() const 
{
  return _dim;
}

inline int DoubleArray::size() const 
{
  return _dim;
}

inline void DoubleArray::resize(const int dim)
{
  if (_dim != dim)
  {
    destroy();
    initialize(dim);
  }
}

} // namespace LinearAlgebra

#endif // DOUBLEARRAY_INCLUDED
