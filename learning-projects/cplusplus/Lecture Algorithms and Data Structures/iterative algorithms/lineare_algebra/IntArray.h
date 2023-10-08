/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#ifndef INTARRAY_INCLUDED
#define INTARRAY_INCLUDED

#include <iostream>
#include "LinearAlgebra.h"

namespace LinearAlgebra
{

//-----------------------------------------------------------------------------
//
// class IntArray
//
//-----------------------------------------------------------------------------

/**
 * Array with integers.
 */
class LINEAR_ALGEBRA_API IntArray
{

public: 

/**
 * Standard constructor.
 */
  IntArray();
  
/**
 * Constructor for a Vector with specified dimension.
 */
  IntArray(const int dim);
  
/**
 * Constructor for a Vector with specified dimension and value.
 * All elements have the same value.
 */
  IntArray(const int dim, const int & val);
  
/**
 * Constructor for a Vector from a int array.
 * A new int array is created, i.e. the int pointer data is not shared.
 * This means we use deep copy.
 */
  IntArray(const int dim, const int * data);
  
/**
 * Constructor for a Vector with specified dimension.
 * The data are generated from the input stream.
 */
  IntArray(std::istream &is, const int dim=-1);
  
/**
 * Copy constructor.
 */
  IntArray(const IntArray & op);

/**
 * Destructor. Be careful, the destructor is not virtual ! 
 */
  ~IntArray();
  
/**
 * Assignment operator.
 */
  IntArray & operator=(const IntArray & op);
  
/**
 * Access with 0-index.
 */
  int   operator[] (const int i) const ;
  int & operator[] (const int i);
  
/**
 * Access with 1-index.
 */
  int   operator() (const int i) const ;
  int & operator() (const int i);
  
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
  IntArray & operator-();
  
/**
 * Negate all elements.
 */
  void negate();
  
/**
 * Add an array and a int.
 */
  IntArray & operator+=(const int & val);

/**
 * Subtract a int from an array.
 */
  IntArray & operator-=(const int & val);

/**
 * Multiply an array by a int.
 */
  IntArray & operator*=(const int & val);
  
/**
 * Add two arrays.
 */
  IntArray & operator+=(const IntArray & op);
  
/**
 * Subtract an array from an array.
 */
  IntArray & operator-=(const IntArray & op);
  
#ifdef DEBUG
  void debug(std::ostream &os = std::cerr) const ;
#endif

protected: 
  
  void initialize(int dim);
  void copy(const int*  data);
  void set(const int&  val);
  void destroy();
  
private: 
  
  int _dim;
  int *_data;
};

//-----------------------------------------------------------------------------
//
// inline functions of class IntArray
//
//-----------------------------------------------------------------------------

inline void IntArray::initialize(int dim)
{
  _data = new int[dim];
  _dim = dim;
}

inline void IntArray::destroy()
{     
  if (_data != 0)
  {
    delete [] (_data);     
    _data = 0;
    _dim = 0;
  }
}

inline IntArray::IntArray()
    : _dim(0), _data(0) 
{  
}

inline IntArray::IntArray(const int dim)
    : _dim(dim), _data(0) 
{
  initialize(dim);
#ifdef DEBUG
  set(4711);
#endif
}

inline IntArray::IntArray(const int dim, const int & val)
    : _dim(dim), _data(0) 
{
  initialize(dim);
  set(val);
}

inline IntArray::IntArray(const int dim, const int * data)
    : _dim(dim), _data(0) 
{
  initialize(dim);
  copy(data);
}

inline IntArray::IntArray(const IntArray & op)
    : _dim(op._dim), _data(0) 
{
  initialize(op._dim);
  copy(op._data);
}

inline IntArray::~IntArray()
{
  destroy();
}

inline IntArray & IntArray::operator=(const IntArray & op)
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

inline int   IntArray::operator[] (const int i) const 
{
  return (i >= 0 && i < _dim) ? _data[i] : 4711;
}

inline int & IntArray::operator[] (const int i) 
{
  return (i >= 0 && i < _dim) ? _data[i] : _data[0];
}

inline int   IntArray::operator() (const int i) const 
{
  return (*this)[i-1];
}

inline int & IntArray::operator() (const int i) 
{
  return (*this)[i-1];
}

inline IntArray & IntArray::operator-()
{
  negate();
  return *this;
}

inline int IntArray::dim() const 
{
  return _dim;
}

inline int IntArray::size() const 
{
  return _dim;
}

inline void IntArray::resize(const int dim)
{
  if (_dim != dim)
  {
    destroy();
    initialize(dim);
  }
}

} // namespace LinearAlgebra

#endif // INTARRAY_INCLUDED
