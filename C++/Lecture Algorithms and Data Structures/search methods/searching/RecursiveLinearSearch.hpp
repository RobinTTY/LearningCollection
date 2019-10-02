/*  File RecursiveLinearSearch.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

This functor class contains an implementation of the
recursive version of the linear search algorithm.

Reference: Chapter Searching
*/

#include "SearchInterface.hpp"

//<-linsearch_reku--
class RecursiveLinearSearch : public SearchInterface {
public:
  bool search(int data[], int left, int right, int value) {
    if (left > right) return false;
    if (data[left] == value) return true;
    return search(data, left+1, right, value);
  }
};
//--linsearch_reku->
