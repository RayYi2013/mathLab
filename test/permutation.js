/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 19/09/13
 * Time: 8:46 PM
 * To change this template use File | Settings | File Templates.
 */

function isPermutation(s1, s2){
  //check length first
  var n = s1.length;
  if(s2.length != n){
    return false;
  }

  //hash table.
  var o1 = createHashTable(s1),
    o2,i;

  for(i=0; i<n; i++){
    c = s2[i];
    if(o1.hasOwnProperty(c) && o1[c]>0){
      o1[c] --;
    }
    else{
      return false;
    }
  }

  return true;
}

function createHashTable(s){
  //create hash table.
  var o = {}, c,
    n = s.length;
  for(i=0; i<n; i++){
    c = s[i];
    if(o.hasOwnProperty(c)){
      o[c] ++;
    }
    else{
      o[c] = 1;
    }
  }
  return o;
}

module.exports = (function(){
  var first = '', second = '';

  var start = function(){
    first = '';
    second = '';
    console.dir('please input first string:');
  };

  var doTest = function(input){
    if(first.length === 0){
      first = input;
      console.dir('please input second string:');
    }
    else{
      second = input;
      var res = isPermutation(first,second) ;
      console.dir(first + ' and ' + second + (res ? ' are' : ' are not') + ' permutation.\n\n\n');
      start();
    }
  };

  return {
    start: start,
    doTest: doTest
  };
})();
