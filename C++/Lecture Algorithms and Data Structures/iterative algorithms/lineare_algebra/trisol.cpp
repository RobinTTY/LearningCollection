#include <cassert>
#include <cmath>
#include <cfloat>

#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;

//
// preliminary function to avoid divisions by zero
//

static inline int double_equal_eps(double a)
{
  return (abs(a) < DBL_EPSILON) ? 1 : 0;
}

int LowerTriangularSolve(const Matrix & L, Vector & b)
{
  int n = L.rows();
  
  assert(L.cols() == n);
  assert(b.dim() == n);
  
  double x = L(1,1);
  if (double_equal_eps(x)) return 1;
  b(1) /= x;
  for (int i=2; i<=n; i++)
  {
    double tmp = 0.0;
    for (int j=1; j<i; j++)
      tmp += L(i,j)*b(j);
    x = L(i,i);
    if (double_equal_eps(x)) return 1;
    b(i) = (b(i) - tmp)/x;
  }
  return 0;
}

void UnitLowerTriangularSolve(const Matrix & L, Vector & b)
{
  int n = L.rows();
  
  assert(L.cols() == n);
  assert(b.dim() == n);
  
  for (int i=2; i<=n; i++)
  {
    double tmp = 0.0;
    for (int j=1; j<i; j++)
      tmp += L(i,j)*b(j);
    b(i) -= tmp;
  }
}

int UpperTriangularSolve(const Matrix & U, Vector & b)
{
  int n = U.rows();
  
  assert(U.cols() == n);
  assert(b.dim() == n);
  
  double x = U(n,n);
  if (double_equal_eps(x)) return 1;
  b(n) /= x;
  for (int i=n-1; i>=1; i--)
  {
    double tmp = 0.0;
    for (int j=i+1; j<=n; j++)
      tmp += U(i,j)*b(j);
    x = U(i,i);
    if (double_equal_eps(x)) return 1;
    b(i) = (b(i) - tmp)/x;
  }
  return 0;
}

void UnitUpperTriangularSolve(const Matrix & U, Vector & b)
{
  int n = U.rows();
  
  assert(U.cols() == n);
  assert(b.dim() == n);
  
  for (int i=n-1; i>=1; i--)
  {
    double tmp = 0.0;
    for (int j=i+1; j<=n; j++)
      tmp += U(i,j)*b(j);
    b(i) -= tmp;
  }
}

int UpperTriangularSolve(const Matrix & U, const Vector & D,
                         Vector & b)
{
  int n = U.rows();
  
  assert(U.cols() == n);
  assert(D.dim() == n);
  assert(b.dim() == n);
  
  double x = D(n);
  if (double_equal_eps(x)) return 1;
  b(n) /= x;
  for (int i=n-1; i>=1; i--)
  {
    double tmp = 0.0;
    for (int j=i+1; j<=n; j++)
      tmp += U(i,j)*b(j);
    x = D(i);
    if (double_equal_eps(x)) return 1;
    b(i) = (b(i) - tmp)/x;
  }
  return 0;
}
  

