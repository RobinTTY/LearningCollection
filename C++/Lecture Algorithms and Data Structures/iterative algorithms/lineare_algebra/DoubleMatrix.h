/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#ifndef DOUBLEMATRIX_INCLUDED
#define DOUBLEMATRIX_INCLUDED

#include <iostream>
#include "LinearAlgebra.h"
#include "DoubleVector.h"

namespace LinearAlgebra
{

//-----------------------------------------------------------------------------
//
// Matrix
//
//-----------------------------------------------------------------------------

/**
 * This class implements the functionality of a general double Matrix with
 * variable number of rows and columns.
 * It is prepared to be used with the BLAS and LAPACK FORTRAN libraries.
 * The class works with out these libraries, but in order to achieve better
 * performace the FORTRAN libraries should be used.
 */
class LINEAR_ALGEBRA_API Matrix : public DoubleArray
{

public: 

/**
 * Standard constructor.
 */
  Matrix();
  
/**
 * Matrix with specified dimensions.
 */
  Matrix(const int rows, const int cols);

/**
 * Constructor for a Matrix with specified dimension and value.
 */
  Matrix(const int rows, const int cols, const double & val);

/**
 * Constructor for a Matrix from a double array.
 */
  Matrix(const int rows, const int cols, const double * data);

/**
 * Copy constructor.
 */
  Matrix(const Matrix & op);

/**
 * Access with 1-index to rows and columns.
 */
  double   operator() (const int row, const int col) const ;
  double & operator() (const int row, const int col);

/**
 * The number of rows of the array.
 */
  int rows() const ;
  
/**
 * The number of columnss of the array.
 */
  int cols() const ;
  
/**
 * If the new row or column dimension does not fit to the actual dimension then
 * the old Matrix is destroyed and a new Matrix is generated. The content will
 * be lost.
 */
  void resize(const int r, const int c);
  
/**
 * Blocks are generated with 1-index to rows and columns.
 */
  Matrix get_block(const int row_start, const int row_end,
                    const int col_start, const int col_end);
  
  void set_block(const int row_start, const int row_end,
                 const int col_start, const int col_end,
                 const Matrix & val);

#ifdef DEBUG
  void debug(std::ostream &os = std::cerr) const ;
#endif
  
protected: 

private: 

int _rows, _cols;
  
};

//-----------------------------------------------------------------------------
//
// inline functions of Matrix
//
//-----------------------------------------------------------------------------

inline Matrix::Matrix()
    : DoubleArray(), _rows(0), _cols(0)  
{  
}

inline Matrix::Matrix(const int rows, const int cols)
    : DoubleArray(rows*cols), _rows(rows), _cols(cols) 
{
}

inline Matrix::Matrix(const int rows, const int cols, const double & val)
    : DoubleArray(rows*cols, val), _rows(rows), _cols(cols) 
{
}

inline Matrix::Matrix(const int rows, const int cols, const double * data)
    : DoubleArray(rows*cols, data), _rows(rows), _cols(cols) 
{
}

inline Matrix::Matrix(const Matrix & op)
    : DoubleArray(op), _rows(op._rows), _cols(op._cols) 
{
}

inline double & Matrix::operator() (const int row, const int col) 
{
  return (*this)[(col-1)*_rows + row-1];
}

inline double   Matrix::operator() (const int row, const int col) const 
{
  return (*this)[(col-1)*_rows + row-1];
}

inline int Matrix::rows() const 
{
  return _rows;
}

inline int Matrix::cols() const 
{
  return _cols;
}
  
inline void Matrix::resize(const int r, const int c)
{
  if (r != _rows || c != _cols)
  {
    DoubleArray::resize(r*c);
    _rows = r;
    _cols = c;
  }
}
  
//-----------------------------------------------------------------------------
//
// global operator functions
//
//-----------------------------------------------------------------------------

inline Matrix operator-(const Matrix & x)
{
  Matrix y(x);
  y.negate();
  return y;
}

inline Matrix operator+(const double & x, const Matrix & y)
{
  Matrix z(y);
  z += x;
  return z;
}

inline Matrix operator-(const double & x, const Matrix & y)
{
  Matrix z(y);
  z.negate();
  z += x;
  return z;
}

inline Matrix operator*(const double & x, const Matrix & y)
{
  Matrix z(y);
  z *= x;
  return z;
}

inline Matrix operator+(const Matrix & x, const double & y)
{
  Matrix z(x);
  z += y;
  return z;
}

inline Matrix operator-(const Matrix & x, const double & y)
{
  Matrix z(x);
  z -= y;
  return z;
}

inline Matrix operator*(const Matrix & x, const double & y)
{
  Matrix z(x);
  z *= y;
  return z;
}

inline Matrix operator+(const Matrix & x, const Matrix & y)
{
  Matrix z(x);
  z += y;
  return z;
}

inline Matrix operator-(const Matrix & x, const Matrix & y)
{
  Matrix z(x);
  z -= y;
  return z;
}

LINEAR_ALGEBRA_API Vector operator * (const Matrix &A, const Vector &b);
LINEAR_ALGEBRA_API Matrix operator * (const Matrix &A, const Matrix &B);

LINEAR_ALGEBRA_API Matrix transpose(const Matrix &A);

} // namespace LinearAlgebra

#endif // DOUBLEMATRIX_INCLUDED

