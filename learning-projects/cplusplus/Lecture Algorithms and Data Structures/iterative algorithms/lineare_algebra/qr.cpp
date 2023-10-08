#include <cassert>
#include <cmath>
#include <cfloat>

#include "DoubleVector.h"
#include "DoubleMatrix.h"
#include "trisol.h"

using namespace LinearAlgebra;

//
// preliminary function to avoid divisions by zero
//

static inline int double_equal_eps(double a)
{
	return (abs(a) < DBL_EPSILON) ? 1 : 0;
}

//
// Householder transformations requires a special sign function, i.e
// sign(0) = 1.
//

static inline double sign(double a)
{
  return (a < 0 ? -1 : 1);
}

//-----------------------------------------------------------------------------
//
// Classical QR factorization, based on Stewart[1973].
//
//
// This algorithm computes the factorization of a matrix A
// into a product of an orthognal matrix (Q) and an upper triangular 
// matrix (R), such that QR = A.
//
// Parameters:
//
//  A   (in/out):  On input, A is square, Matrix(1:n, 1:n), that represents
//                 the matrix to be factored.
//
//                 On output, Q and R is encoded in the same matrix
//                 in the following manner:
//
//                 R is contained in the upper triangular section of A,
//                 except that R's main diagonal is stored in D.
//
//                 The lower triangular section of A represents Q.
//                 Q is a composition of n-1 reflections:
//
//                    Q_n-1 * ... * Q_2 * Q_1 * A = R
//
//                 => Q = Q_1 * Q_2 * ... * Q_n-1
//
//                 Each reflection is represented in the form
//
//                    Q_j = I - u_j*u_j'/p_j = Q_j'
//
//                 Since u_j has the form
//
//                    [0 ... 0 * ... *]
//                             ^
//                         j-th element
//
//                 it can be stored in the lower triangular part of A.
//                 The valuse p_j are stored in a seperate vector P.
//
//  P  (output):   vector of p_j
//  D  (output):   main diagonal of R, i.e. D(i) is R(i,i)
//
// Returns:  
//
//  0 if successful, 1 if A is detected to be singular
//
// Modifications:
//
//  The algorithm could be modified to deal with non squared matrices.
//
//-----------------------------------------------------------------------------

int QR_Factor(Matrix &A, Vector& P, Vector &D)
{
  int n = A.rows();

  assert(A.cols() == n);

  P.resize(n); D.resize(n);
  
  int i,j,k;

  for (k=1; k<n; k++)
  {
    //
    // The construction of Q_k depends on the direction of the k-th column of A.
    // In order to make the algorithm more stabe we normalize the direction
    // with the maximal absolute value of the k-th column.
    //
    // eta_k = max |A(i,k)|,  for k <= i <= n
    //

    double eta_k = 0.0;
    for (i=k; i<=n; i++)
    {
      double abs_A_i_k = abs(A(i,k));
      eta_k = ( abs_A_i_k > eta_k ) ? abs_A_i_k : eta_k; 
    }

    //
    // Check if matrix is singular
    //
    
    if (double_equal_eps(eta_k))
      return 1;

    //
    // Form Q_k and premultiply A by it
    //
    
    for(i=k; i<=n; i++)
      A(i,k) /= eta_k;

    //
    // Scalar product from the k-th column
    //
    
    double square_sum_k = 0.0;
    for (i=k; i<=n; i++)
    {
      double A_i_k = A(i,k);
      square_sum_k += A_i_k*A_i_k;
    }
    
    double sigma_k = sign(A(k,k)) * sqrt(square_sum_k);

    //
    // Update Q_k
    //
    
    A(k,k) += sigma_k;
    
    P(k) = sigma_k * A(k,k);
    D(k) = -eta_k * sigma_k;

    //
    // Update R, i.e the upper right part of A
    //
    
    for (j=k+1; j<=n; j++)
    {
      double sum = 0.0;
      for (i=k; i<=n; i++)
        sum += A(i,k)*A(i,j);
      sum = sum / P(k);

      for (i=k; i<=n; i++)
        A(i,j) -= sum * A(i,k);
    }
  }

  //
  // k == n
  //
  
  D(n) = A(n,n);
  return 0;
}

//-----------------------------------------------------------------------------
//
// Solve a linear system in the form Q*R*x = b, where Q and R are generated
// from the QR-factorization above.
//
//-----------------------------------------------------------------------------

int QR_Solve(const Matrix &QR, const Vector &P, const Vector &D, Vector &b)
{
  int n = QR.rows();

  assert(n == QR.cols());
  assert(n == P.dim());
  assert(n == D.dim());
  assert(n == b.dim());

  int i,j;

  //
  // Form Q'*b = (Q_1 * ... * Q_n-1)' * b = Q_n-1 * ... * Q_1 * b
  //
  // Method:
  //
  // For j = 1,...,n-1 update b in the following way
  //
  // Q_j * b = (I - u_j*u_j'/p_j) * b = b - ((u_j'*b)/p_j) * u_j 
  //
  // => b -= ((u_j'*b)/p_j) * u_j
  
  for (j=1; j<n; j++)
  {
    //
    // Calculate (u_j'*b)
    //
    
    double u_j_b = 0.0;
    for (i=j; i<=n; i++)           // start with i=j, since u(i)=0 for i<j 
      u_j_b += QR(i,j)*b(i);

    //
    // Calculate (u_j'*b)/P(j)
    //
    
    if (double_equal_eps(P(j)))
      return 1;

    double u_j_b_p_j = u_j_b / P(j);

    //
    // Update b
    //
    
    for (i=j; i<=n; i++)           // start with i=j, since u(i)=0 for i<j 
      b(i) -= u_j_b_p_j * QR(i,j);
  }
  
  //
  // Solve the triangular system Rx = Q'b
  //
  
  return UpperTriangularSolve(QR, D, b);
}

//-----------------------------------------------------------------------------
//
// Solve a linear system A*x = b using QR-factorization.
//
//-----------------------------------------------------------------------------

int QR_Solve(Matrix &A, Vector &b)
{
  Vector P(A.rows());
  Vector D(A.rows());
  
  int info = QR_Factor(A,P,D);
  if (info == 0)
  {
    info = QR_Solve(A,P,D,b);
  }
  return info;
}


