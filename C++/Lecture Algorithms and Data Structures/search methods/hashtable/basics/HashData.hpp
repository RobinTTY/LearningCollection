/*  File HashData.hpp

Authors: G. Gühring, J. Koch, M. Dausmann

Class HashData is an abstract class, which describes the basic
properties a class must have, whose objects are
to be added in a hash table. The class defines
the abstract methods getKey() and isEqual().
 
Reference: Chapter Searching
*/
#include <string>
using namespace std;

//<-hash_data--
class HashData {
public:
  virtual int getKey() = 0;  // assert getKey() >= 0
  virtual bool isEqual(HashData & data) = 0;
  static const int freeKey = -1;
  static const int deleteKey = -2;
  virtual ~HashData() {}
//--hash_data->
  virtual string toString() = 0;
//<-brace--
  // ...
};
//--brace->
