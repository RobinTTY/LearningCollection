/*  File HashDataImpl.cpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashDataImpl is the base class for objects which are
to be added in a hash table. It can be used to add either
a string value or an integer value or both. The class provides
default implementations for the methods getKey(), isEqual() and
toString(). The methods getKey() and isEqual() are implemented
as follows:
getkey() returns the addd integer value as key.
isEqual() is true if the string values and the integer values
of both objects are equal.
Derived classes should consider to override the methods getKey()
and isEqual() as well as toString().

Reference: Chapter Searching
*/
#include "HashDataImpl.hpp"

string HashDataImpl::toString() {
	string result = svalue + " : ";
  result = result + to_string(getKey());
	return result;
}
