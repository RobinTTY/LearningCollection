/*  File distance_matrix.hpp

Autoren: J. Koch, M. Dausmann

Class DistanceMatrix stores the distances between each
points of a given pointset. The distances are computed
according to the euclidian formula.

Points are identified by their id (see class Point). 
Hence a map is computed that maps a point to an
index in the matrix.

Reference Chapter Random Numbers

*/
#pragma once
#include "point.hpp"
#include <map>
using namespace std;

//<-distmatrix--
class DistanceMatrix {
private:
	int dimension;
	double ** distMatrix; // double[][] distMatrix
	map<Point, int> index;
//--distmatrix->
public:
	DistanceMatrix() : dimension(0), distMatrix(nullptr) {}
	DistanceMatrix(const DistanceMatrix & dm);
	DistanceMatrix(vector<Point> & points);
  ~DistanceMatrix(){
    for (int i = 0; i < dimension; i++)
      delete [] distMatrix[i];
    delete [] distMatrix;
  }
  DistanceMatrix& operator=(const DistanceMatrix& x);
	double getDistance(Point & from, Point & to);
	void setDistanceToInfinity(Point & p);
	string toString() const;

	static const double INFINIT; // = DBL_MAX;
private:
	void computeDistances(vector<Point> & points);
	double distanceBetween(Point & p1, Point & p2);
	void createInitialMatrix();
	void computeIndexMap(vector<Point> & points);
//<-Braces--
	// ...
};
//--Braces->
