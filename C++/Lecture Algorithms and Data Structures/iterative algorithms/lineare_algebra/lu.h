/* -*-C++-*-
*******************************************************************************
*
* SCCS:         @(#)lu.h
* Description:  LU factorization interface
* Author:       Juergen Koch
* Created:      Wed Nov 12 14:58:03 1997
* Modified:     Thu Jan  8 16:07:26 1998 (Juergen Koch) juergk@hpbeo93.gsr.hp.com
* Language:     C++r
* Package:      frame
*
* (C) Copyright 1997,  CoCreate Software GmbH, all rights reserved.
*
*******************************************************************************
*/

// @(#)lu.h

#ifndef LU_INCLUDED
#define LU_INCLUDED

#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;

/**
 * <P>
 * To solve the system of linear equations Ax = b use
 * </P>
 *
 * <P><pre>
 * "     LU_Solve(A,b)"
 * </P></pre>
 *
 * <P>
 * A will be overwritten by the lower left matrix L and
 * the upper right matrix U. The diagonal elements of L
 * are all one and are therefore not stored.
 * </P>
 */

int LU_Factor(Matrix & A);

int LU_Solve(Matrix & A, Vector & b);

#endif
