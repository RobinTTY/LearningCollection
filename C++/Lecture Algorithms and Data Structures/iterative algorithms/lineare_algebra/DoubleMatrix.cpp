/* -*-C++-*-
 * (c) Copyright 1998, Juergen Koch
 *
 * ALL RIGHTS RESERVED
 *
 */

#include <iostream>
#include "assert.h"
#include "DoubleMatrix.h"

namespace LinearAlgebra
{

Matrix Matrix::get_block(const int row_start, const int row_end,
				     const int col_start, const int col_end)
{
  Matrix x;

  int rn = rows();
  int rm = row_end - row_start + 1;
  
  int cn = cols();
  int cm = col_end - col_start + 1;

  if (row_start >= 1 && row_end <= rn && rm > 0)
  {
    if (col_start >= 1 && col_end <= cn && cm > 0)
    {
      x.resize(rm, cm);
      
      int rj = 1;
      for (int ri=row_start; ri <= row_end; ri++)
      {
        int cj = 1;
        for (int ci=col_start; ci <= col_end; ci++)
          x(rj,cj++) = (*this)(ri,ci);
        rj++;
      }
    }
  }
  return x;
}

  
void Matrix::set_block(const int row_start, const int row_end,
			     const int col_start, const int col_end,
			     const Matrix & val)
{
  //
  // Check row dimensions
  //
  
  int rn = rows();
  int rm = row_end - row_start + 1;
  
  assert(rm == val.rows());
  
  //
  // Check column dimensions
  //
  
  int cn = cols();
  int cm = col_end - col_start + 1;
  
  assert(cm == val.cols());
  
  if (row_start >= 1 && row_end <= rn && rm == val.rows() && rm > 0)
  {
    if (col_start >= 1 && col_end <= cn && cm == val.cols() && cm > 0)
    {
      int rj = 1;
      for (int ri=row_start; ri <= row_end; ri++)
      {
        int cj = 1;
        for (int ci=col_start; ci <= col_end; ci++)
          (*this)(ri,ci) = val(rj,cj++);
        rj++;
      }
    }
  }
}

#ifdef DEBUG

void Matrix::debug(std::ostream &os) const 
{
  int r = rows();
  int c = cols();
  
  os << "Matrix with " 
	  << r << " rows and " << c << " columns:" << std::endl;

  for (int i=1; i<=r; i++)
  {
    os << "  ";
    for (int j=1; j<=c; j++)
    {
      os << (*this)(i,j) << "  ";
    }
    os << std::endl;
  }
  os << std::endl;
}

#endif

Vector operator * (const Matrix &A, const Vector &b)
{
  int n = b.dim(), m = A.rows();
  assert(A.cols() == n);
  Vector c(m,0.0);
  for (int i=1; i<=m; i++)
    for (int j=1; j<=n; j++)
      c(i) += A(i,j)*b(j);
  return c;
}

Matrix operator * (const Matrix &A, const Matrix &B)
{
  int rA = A.rows(), cA = A.cols();
  int rB = B.rows(), cB = B.cols();
  assert(cA == rB);
  Matrix C(rA,cB,0.0);
  for (int i=1; i<=rA; i++)
    for (int j=1; j<=cB; j++)
      for (int k=1; k<=cA; k++)
        C(i,j) += A(i,k)*B(k,j);
  return C;
}

Matrix transpose(const Matrix &A)
{
  int c = A.cols() , r = A.rows();
  Matrix AT(c,r);
  
  for (int i = 1; i <= r; i++)
    for (int j = 1; j <= c; j++)
      AT(j,i) = A(i,j);
  
  return AT;
}

} // namespace LinearAlgebra
