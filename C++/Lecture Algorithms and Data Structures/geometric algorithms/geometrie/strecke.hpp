#pragma once
#include <iostream>
using namespace std;
#include "punkt.hpp"

class Strecke {
public:
	Punkt p1, p2;
	Strecke(const Punkt & p1, const Punkt & p2);
	Strecke();
};

istream & operator>>(istream & is, Strecke & st);

ostream & operator<<(ostream & os, const Strecke & st);
