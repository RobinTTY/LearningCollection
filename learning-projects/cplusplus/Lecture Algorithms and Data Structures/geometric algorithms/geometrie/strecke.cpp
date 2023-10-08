#include "strecke.hpp"

Strecke::Strecke(const Punkt& p1, const Punkt& p2) : p1(p1), p2(p2) {}

Strecke::Strecke() {}

istream & operator>>(istream & is, Strecke & st)
{   // Einlesen in der Form|(x,y)-(x,y)|
	char c;
	is >> c >> st.p1 >> c >> st.p2 >> c;
	return is;
}

ostream & operator<<(ostream & os, const Strecke & st)
{   // Ausgeben in der Form|(x,y)-(x,y)|
	os << '|' << st.p1 << '-' << st.p2 << '|';
	return os;
}
