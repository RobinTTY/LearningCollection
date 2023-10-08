/*  File RecursiveBinarySearch.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

This functor class contains an implementation 
of the binary search algorithm.

Reference: Chapter Searching
*/
 
#include "SearchInterface.hpp"

//<-bin_search--
class RecursiveBinarySearch : public SearchInterface {
public:
  bool search(int data[], int left, int right, int value) {
    if (right < left) return false;  
    int mid = (left + right) / 2;
    if (value == data[mid]) return true;
    if (value < data[mid]) 
      return search(data, left, mid - 1, value);
    else
      return search(data, mid + 1, right, value);
  }
};
//--bin_search->
