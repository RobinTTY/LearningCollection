/*  File distance_matrix.cpp

Autoren: J. Koch, M. Dausmann

Class DistanceMatrix stores the distances between each
points of a given pointset. The distances are computed
according to the euclidian formula.

Points are identified by their id (see class Point).
Hence a map is computed that maps a point to an
index in the matrix.

Reference Chapter Random Numbers

*/
#include <iomanip>
#include <sstream>
#include <cfloat>
#include <limits>
#include <cmath>
#include "distance_matrix.hpp"
using namespace std;

const double DistanceMatrix::INFINIT = DBL_MAX;

DistanceMatrix::DistanceMatrix(const DistanceMatrix& dm) {
	dimension = dm.dimension;
	index = dm.index;
	distMatrix = new double*[dimension];
	for (int i = 0; i < dimension; i++)
		distMatrix[i] = new double[dimension];
	for (int i = 0; i < dimension; i++) 
		for (int j = 0; j < dimension; j++) 
			distMatrix[i][j] = dm.distMatrix[i][j];
}

DistanceMatrix::DistanceMatrix(vector<Point> & points) : dimension(points.size()) 	{
	computeIndexMap(points);
	createInitialMatrix();
	computeDistances(points);
}

DistanceMatrix& DistanceMatrix::operator=(const DistanceMatrix& x){ 
  index = x.index;
  if(dimension != x.dimension){
	  int dim = x.dimension;
    double ** m = new double*[dim];
    for (int i = 0; i < dim; i++)
      m[i] = new double[dim];
    // free this
    for (int i = 0; i < dimension; i++)
      delete [] distMatrix[i];
    delete [] distMatrix;
    distMatrix = m;
    dimension = dim;
  }
	for (int i = 0; i < dimension; i++) 
		for (int j = 0; j < dimension; j++) 
			distMatrix[i][j] = x.distMatrix[i][j];
   return *this;
}

double DistanceMatrix::getDistance(Point & from, Point & to) {
	double dist = distMatrix[index[from]][index[to]];
	return dist;
}

void DistanceMatrix::setDistanceToInfinity(Point & p) {
	int j = index[p];
	for (int i = 0; i < dimension; i++)
		distMatrix[i][j] = INFINIT; // distMatrix not symmetrical any more
}

string DistanceMatrix::toString() const {
	stringstream ss;
	ss << "Points with column/row index: ";
	for (auto cursor : index) {
		ss << cursor.first.id << "(" << cursor.second << ") ";
	}
	ss << endl;
	for (int i = 0; i < dimension; i++) {
		for (int j = 0; j < dimension; j++)
			if (distMatrix[i][j] == INFINIT)
				ss << "  #INF ";
			else
				ss << setw(6) << setprecision(2) << fixed << distMatrix[i][j] << " ";
		ss << endl;
	}
	return ss.str();
}

//<-distmat_compute--
void DistanceMatrix::computeDistances(vector<Point> & points)
{
	for (int i = 0; i < dimension; i++)
		distMatrix[i][i] = INFINIT;

	for (int i = 0; i < dimension; i++) {
		for (int j = i + 1; j < dimension; j++) {
		  // Matrix is symmetric:
			distMatrix[index[points[i]]][index[points[j]]] =
			  distMatrix[index[points[j]]][index[points[i]]] =
				distanceBetween(points[i], points[j]);
		}
	}
}
//--distmat_compute->

//<-distance_euklid--
double DistanceMatrix::distanceBetween(Point & p1, Point & p2)
{
	double diffx = p1.x - p2.x;
	double diffy = p1.y - p2.y;
	return sqrt(diffx*diffx + diffy*diffy);
}
//--distance_euklid->

void DistanceMatrix::createInitialMatrix() {
	distMatrix = new double*[dimension];
	for (int i = 0; i < dimension; i++)
		distMatrix[i] = new double[dimension];

	for (int i = 0; i < dimension; i++)
		for (int j = 0; j < dimension; j++)
			distMatrix[i][j] = INFINIT;
}

void DistanceMatrix::computeIndexMap(vector<Point> & points) {
	for (int i = 0; i < dimension; i++)
		index.insert(pair<Point, int>(points[i], i));
}

