/* -*-C++-*-
*******************************************************************************
*
*               Hewlett-Packard Company Confidential
*
* SCCS:         
* Description:  least squares solution of a linear system
* Author:       Juergen Koch
* Created:      
* Modified:     Wed Mar 11 16:49:20 1998 (Juergen Koch) juergk@hpbeo93.gsr.hp.com
* Language:     C++
* Package:      geo
*
* (C) Copyright 1995 Hewlett-Packard GmbH, MDD all rights reserved.
*
*******************************************************************************
*/

#include <cassert>

#include "DoubleVector.h"
#include "DoubleMatrix.h"
#include "qr.h"

using namespace LinearAlgebra;

//------------------------------------------------------------------------------
//
// Find the solution to ||A*x - f||  -> min
//                                 2     x
//
//------------------------------------------------------------------------------

int solve_linear_least_squares(const Matrix& A,
                               const Vector& f,
                               Vector& x)
{
  //
  // We solve the normal equations A^t*A*x = A^t*f
  //

  assert(A.rows() == f.dim());
  
  Matrix At(transpose(A));

  Matrix AtA(At*A);
  x = At*f;

  return QR_Solve(AtA,x);
}

//------------------------------------------------------------------------------
//
// Find the solution to ||A*x - f||  ->   min
//                                 2    B*x = g
//
//------------------------------------------------------------------------------

int solve_linear_least_squares(const Matrix& A,
                               const Vector& f,
                               const Matrix& B,
                               const Vector& g,
                               Vector& x)
{
  //
  // We use a Lagrange multiplier lambda and solve the extended system:
  //
  //          C*y=h
  //
  // with:
  //
  //     | At*A|  Bt |       |  x   |       | At*f |
  // C = |-----|-----|   y = |      |   h = |      |
  //     |  B  |  0  |       |lambda|       |   g  |
  
  int info =0;

  int l = B.rows(), m = A.cols(), n = A.rows();
    
  assert(m == B.cols());
  assert(n == f.size());
  assert(l == g.size());

  int N = m + l;
  Matrix At = transpose(A);

  //
  // Generate block matrix C
  //
  
  Matrix C(N, N, 0.0);
  
  C.set_block(  1,  m,  1,  m,         At*A);
  C.set_block(m+1,m+l,  1,  m,            B);
  C.set_block(  1,  m,m+1,m+l, transpose(B));

  //
  // Generate block vector h
  //
  
  Vector h(N);

  h.set_block(  1,m,At*f);
  h.set_block(m+1,N,g);

  //
  // Solve the linear system
  //
  
  info = QR_Solve(C,h);
  
  if ( info == 0)
  {
    x = h.get_block(1,m);
  }

  return info;
}

//------------------------------------------------------------------------------
//
// Find the solution to
//
// ||A*x - fx||  ->   min
//             2    B*x = gx
//
// ||A*y - fy||  ->   min
//             2    B*y = gy
//
// ||A*z - fz||  ->   min
//             2    B*z = gz
//
//------------------------------------------------------------------------------

int solve_linear_least_squares(const Matrix& A,
                               const Vector& fx,
                               const Vector& fy,
                               const Vector& fz,
                               const Matrix& B,
                               const Vector& gx,
                               const Vector& gy,
                               const Vector& gz,
                               Vector& x,
                               Vector& y,
                               Vector& z)
{
  int info = 0;

  //
  // We solve the problem for each component seperatly. This is slow since the
  // decomposition of the linear system is computed three times instead of once.
  // If you want to increase performance here is the right point!
  //

  if (static_cast<bool>((info = solve_linear_least_squares(A, fx, B, gx, x))))
    return info;
  
  if (static_cast<bool>((info = solve_linear_least_squares(A, fy, B, gy, y))))
    return info;

  if (static_cast<bool>((info = solve_linear_least_squares(A, fz, B, gz, z))))
    return info;

  return info;
}

  
