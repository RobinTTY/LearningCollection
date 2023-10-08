/* -*-C++-*-
*******************************************************************************
*
* SCCS:         @(#)qr.h
* Description:  qr solver interface
* Author:       Juergen Koch
* Created:      Wed Nov 12 14:58:03 1997
* Modified:     Wed Mar 11 15:53:58 1998 (Juergen Koch) juergk@hpbeo93.gsr.hp.com
* Language:     C++
* Package:      frame
*
* (C) Copyright 1997,  CoCreate Software GmbH, all rights reserved.
*
*******************************************************************************
*/

// @(#)qr.h

#ifndef QR_INCLUDED
#define QR_INCLUDED

#include "DoubleVector.h"
#include "DoubleMatrix.h"

using namespace LinearAlgebra;

/**
 * <P>
 * solution of a linear system using QR factorization
 * </P>
 *
 * <P>
 * This algorithm computes the factorization of a matrix A into a product of an
 * orthognal matrix Q and an upper triangular matrix R, such that QR = A.
 * </P>
 * 
 * <P>
 * Q is a collection of Householder column vectors Q1, Q2, ... QN.
 * </P>
 *
 * <P>
 * Now the solution of Ax = b can be calculated from Rx = Q'b. This is an easy
 * task since R is an upper triangular matrix.
 * </P>
 *
 * <P>
 * The algorithm returns 0 if successful, 1 if A is detected to be singular.
 * </P>
 */

int QR_Solve(Matrix &A, Vector &b);

#endif
