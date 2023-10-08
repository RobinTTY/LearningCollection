/*  File point_set.cpp

Authors: M. Dausmann, J. Koch

Class PointSet is used in TSP algorithms to store
the set of points to be visited. It provides not
a type of its own, a vector is used to store the
points. But useful functions are implemented here.

Reference: Chapter Random Numbers

*/
#include <iostream>
#include <random>
#include "point_set.hpp"

using namespace std;

const int PointSet::MAX_POINTS = 10;   // at most 10 points for BF!

void PointSet::printPointset(const string & s, const vector<Point> & pl) {
	cout << s << endl;
	for (unsigned int i = 0; i < pl.size(); i++)
	{
		cout << pl[i].toString();
		if (i != pl.size() - 1) cout << ", ";
	}
	cout << endl;
}

vector<Point> PointSet::readPoints() {
	string s;
	vector<Point> points;
	double x, y;
	cout << "Enter each point in a separate line in the format:" << endl;
	cout << "id of point: x, y (positive) coordinates of the point." << endl;
	cin.clear();
	cin.ignore(numeric_limits<streamsize>::max(), '\n');	
	while (true) {
		getline(cin, s);
		if (s == "") break;
		size_t poscol = s.find(":");
		size_t poscom = s.find(",");
		string id = s.substr(0, poscol);
		x = stod(s.substr(poscol + 1, poscom));
		y = stod(s.substr(poscom + 1));
		points.push_back(Point(x, y, id));
	}
	return points;
}

vector<Point> PointSet::generatePoints() {
	int number;
	cout << "Number of Points: " << endl;
	cin >> number;

	random_device rd;
	default_random_engine e(rd());
	uniform_real_distribution<double> d(0.0, 10.0);

	vector<Point> points;
	double x, y;
	string s;
	for (int i = 0; i < number; i++)
	{
		x = d(e);
		y = d(e);
		s = "P" + to_string(i + 1);
		points.push_back(Point(x, y, s));
	}
	return points;
}

vector<Point> PointSet::pointsForStandardExample() {
	vector<Point> points;
	points.push_back(Point(5.6, 2.8, "P1"));
	points.push_back(Point(3.0, 4.0, "P2"));
	points.push_back(Point(4.8, 5.5, "P3"));
	points.push_back(Point(2.0, 0.0, "P4"));
	points.push_back(Point(4.6, 3.5, "P5"));
	points.push_back(Point(3.0, 6.0, "P6"));
	points.push_back(Point(5.2, 5.2, "P7"));
	points.push_back(Point(0.0, 3.0, "P8"));
	points.push_back(Point(5.0, 5.6, "P9"));
	points.push_back(Point(1.6, 6.6, "P10"));
	return points;
}

vector<Point> PointSet::pointsForReducedExample() {
	vector<Point> points;
	points.push_back(Point(5.6, 2.8, "P1"));
	points.push_back(Point(3.0, 4.0, "P2"));
	points.push_back(Point(4.8, 5.5, "P3"));
	points.push_back(Point(2.0, 0.0, "P4"));
	return points;
}

vector<Point> PointSet::pointsForExampleExamSS15() {
	vector<Point> points;
	points.push_back(Point(1.0, 4.0, "P1"));
	points.push_back(Point(1.0, 1.0, "P2"));
	points.push_back(Point(2.0, 5.0, "P3"));
	points.push_back(Point(2.0, 2.0, "P4"));
	points.push_back(Point(3.0, 3.0, "P5"));
	points.push_back(Point(5.0, 4.0, "P6"));
	points.push_back(Point(5.0, 2.0, "P7"));
	return points;
}

vector<Point> PointSet::choosePointset() {
	vector<Point> points;
	cout << "Which set of points shall be used to demonstrate TSP algorithms?" << endl;
	cout << "1: manual input of the points" << endl;
	cout << "2: randomly generated set of points" << endl;
	cout << "3: Standard example from the script (10 points)" << endl;
	cout << "4: Smaller part of the standard example (4 points)" << endl;
	cout << "5: Example from examination SS15" << endl;
	int what = 1;
	bool ok = false;
	do {
		cin >> what;
		if (!cin) {
			what = 0; cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
		}
		if (what == 1) {
			points = readPoints();
			ok = true;
		}
		else if (what == 2) {
			points = generatePoints();
			ok = true;
		}
		else if (what == 3) {
			points = pointsForStandardExample();
			ok = true;
		}
		else if (what == 4) {
			points = pointsForReducedExample();
			ok = true;
		}
		else if (what == 5) {
			points = pointsForExampleExamSS15();
			ok = true;
		}
		else {
			cout << "Wrong input, please try again!" << endl;
		}
	} while (!ok);

	return points;
}
