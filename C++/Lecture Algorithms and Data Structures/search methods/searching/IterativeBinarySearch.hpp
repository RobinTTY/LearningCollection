/*  File IterativeBinarySearch.java

Authors: G. Gühring, J. Koch, M. Dausmann

This functor class contains an implementation of the
iterative version of the binary search algorithm.

Reference: Chapter Searching
*/

#include "SearchInterface.hpp"

//<-binsearch_iter--
class IterativeBinarySearch : public SearchInterface {
public:
  bool search(int data[], int left, int right, int value) {
    while (true) {
      if (right < left) return false;
      int mid = (left + right) / 2;
      if (value == data[mid]) return true;
      if (value < data[mid]) right = mid - 1;
      else left = mid + 1; // value > data[mid]
    }   
  }
};
//--binsearch_iter->
