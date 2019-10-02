/*  File SearchInterface.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

This interface is used for all implementations 
of the different search algorithms.

Reference: Chapter Searching
*/
#pragma once

//<-search_interface--
class SearchInterface {
public:
	// returns true if data contains value at least once
	virtual bool search(
		int data[], // array of data
		int left,   // left index for search
		int right,  // right index for search
		int value)  // value to search for
		= 0;
  virtual ~SearchInterface(){}
};
//--search_interface->
