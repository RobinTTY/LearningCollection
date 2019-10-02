/* -*-C++-*-
*******************************************************************************
*
* SCCS:         @(#)vector.h
* Description:  least squares solution of a linear system
* Author:       Juergen Koch
* Created:      Wed Nov 12 14:58:03 1997
* Modified:     Wed Mar 11 16:31:09 1998 (Juergen Koch) juergk@hpbeo93.gsr.hp.com
* Language:     C++
* Package:      frame
*
* (C) Copyright 1997,  CoCreate Software GmbH, all rights reserved.
*
*******************************************************************************
*/

// @(#)solve_ls.h

#ifndef SOLVE_LS_INCLUDED
#define SOLVE_LS_INCLUDED

#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;

//------------------------------------------------------------------------------
//
// Find the solution to ||A*x - f||  -> min
//                                 2     x
//
// We assume that det(A^t*A) > 0
//
//------------------------------------------------------------------------------

int solve_linear_least_squares(const Matrix& A,
                               const Vector& f,
                               Vector& x);

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
                               Vector& x);

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
                               Vector& z);

#endif
