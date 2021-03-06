//a is sorted array,
//search key in the array, return its index if find it, otherwise return -1.
function binarySearch(a,key){
  var lo = 0,
    hi = a.length - 1,
    mid = 0;

  while(lo<=hi){
    mid = lo + Math.floor((hi - lo)/2);
    if(key<a[mid]){  //key is in left side.
      hi = mid - 1;
    }
    else if(key>a[mid]){ //key is in right side.
      lo = mid + 1;
    }
    else{
      return mid;
    }
  }

  return -1;
}

function sortNumber(a,b) {
  return a - b;
}

var data = [2,3,3,4,5,6,32,7,8,9,11,23,66,24,25,266,43];
data.sort(sortNumber);

module.exports.start = function(){
  console.log('please input key in the array:');
  console.dir(data);
}

module.exports.doTest = function(input){
  console.log('find key %s in position %d in the array.',input,binarySearch(data,input));
};
