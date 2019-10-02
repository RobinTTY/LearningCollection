#include <cassert>

#include "DoubleVector.h"
#include "DoubleMatrix.h"
#include "trisol.h"

using namespace LinearAlgebra;

int LU_Factor(Matrix & A)
{
  int i,j,k,n;
  n = A.rows();
  assert(n == A.cols());
  k = 1;
  double x;
  while ( (k < n) && ( (x = A(k,k)) != 0.0) )
  {
    for (i = k+1; i <= n; i++)
      A(i,k) /= x;
    for (j = k+1; j <= n; j++)
      for (i = k+1; i <= n; i++)
        A(i,j) -= A(i,k)*A(k,j);
    k++;
  }
  return (k == n) ? 0 : 1;
}

int LU_Solve(Matrix & A, Vector & b)
{
  int info = LU_Factor(A);            // A = LU
  if (info == 0)
  {
    UnitLowerTriangularSolve(A,b);    // Ly=b
    info = UpperTriangularSolve(A,b); //  y=Ux
  }
  return info;
}

