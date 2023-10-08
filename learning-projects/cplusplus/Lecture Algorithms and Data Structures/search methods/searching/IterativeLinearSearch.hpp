/*  File IterativeLinearSearch.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

This functor class contains an implementation of the
iterative version of the linear search algorithm.

Reference: Chapter Searching
*/

#include "SearchInterface.hpp"

//<-lin_search--
class IterativeLinearSearch : public SearchInterface {
public:
	bool search(int data[], int left, int right, int value) {
		for (int i = left; i <= right; i++) {
		  if (data[i] == value) return true;
		}
		return false;    
  }
};
//--lin_search->
