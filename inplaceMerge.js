/**
 * a and b are both SORTED arrays of integers. Each contains n sorted integers.
 * a has length 2*n, with the last n slots empty, and b has just n elements.
 * This method merges the elements from b into a, in place, without dynamic memory
 * allocation. Optimize for speed.
 *
 * For example, a = [ 1, 5, 6, 9, _, _, _, _ ] b = [3, 4, 7, 10]
 */
//void inplace_merge(int* a, int* b, int n);

function inplace_merge(a,b,n){
  var c = 2*n-1;
  var c1 = n-1;
  for(var i=n-1; i>=0; i--){
    var p = findLowest(b,a[i],c1);
    if(p>0){
      for(var j= p; j<b.length; j++)
      {
        a[c--] = b[j];
      }
      c1=p-1;
    }
    else
    {
      a[c--]=a[i];
    }
  }
}

function findLowest(a, c, c1){
  for(var i=0; i<c1; i++){
    if(c<a[i]) return i;
  }
  return -1;
}


function main(){
  var a= [1,5, 6, 9, 0,0,0,0];
  var b = [3,4,7,10];

  inplace_merge(a,b,4);

  console.dir(a);

}

main();

