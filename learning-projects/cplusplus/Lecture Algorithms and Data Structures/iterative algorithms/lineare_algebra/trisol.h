/* -*-C++-*-
*******************************************************************************
*
* SCCS:         @(#)trisol.h
* Description:  triangular linear system solver interface
* Author:       Juergen Koch
* Created:      Wed Nov 12 14:58:03 1997
* Modified:     Thu Jan  8 14:57:33 1998 (Juergen Koch) juergk@hpbeo93.gsr.hp.com
* Language:     C++
* Package:      frame
*
* (C) Copyright 1997,  CoCreate Software GmbH, all rights reserved.
*
*******************************************************************************
*/

// @(#)trisol.h

#ifndef TRIANGULAR_SOLVER_INCLUDED
#define TRIANGULAR_SOLVER_INCLUDED

#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;

/** 
 * Interface for the solution of triangular linear systems.
 * All matrices are assumed to be square and regular.
 * The algorithms work in place.
 * For more details see Golub and Van Loan, Matrix Computations,
 * Chapter 3.
 */

/**
 * Solve a linear system with lower triangular matrix.
 * Row version of the forward substitution.
 */
int LowerTriangularSolve(const Matrix & L, Vector & b);

/**
 * Solve a linear system with lower triangular matrix.
 * Row version of the forward substitution.
 * The diagonal elements equal 1.
 */
void UnitLowerTriangularSolve(const Matrix & L, Vector & b);

/**
 * Solve a linear system with upper triangular matrix.
 * Row version of the backward substitution.
 */
int UpperTriangularSolve(const Matrix & U, Vector & b);

/**
 * Solve a linear system with upper triangular matrix.
 * Row version of the backward substitution.
 * The diagonal elements equal 1.
 */
void UnitUpperTriangularSolve(const Matrix & U, Vector & b);

/**
 * Solve a linear system with upper triangular matrix.
 * Modified row version of the backward substitution, except that the main
 * diagonal of U is in D, i.e U(i,i) = D(i).
 */

int UpperTriangularSolve(const Matrix & U, const Vector & D,
                         Vector & b);

#endif
