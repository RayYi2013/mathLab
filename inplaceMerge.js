/**
 * a and b are both SORTED arrays of integers. Each contains n sorted integers.
 * a has length 2*n, with the last n slots empty, and b has just n elements.
 * This method merges the elements from b into a, in place, without dynamic memory
 * allocation. Optimize for speed.
 *
 * For example, a = [ 1, 5, 6, 9, _, _, _, _ ] b = [3, 4, 7, 10]
 */
//void inplace_merge(int* a, int* b, int n);

//a and b are sorted array.
function inplaceMerge1(a, b){
  var i_a = a.length-1,
    i_b = b.length- 1,
    n = a.length + b.length;

  if(a[i_a]<b[0]){
    a.push(b);
    return true;
  }

  for(var i=0; i<n; i++){
    if(i_a>=0 && i_b >=0){
      if(a[i_a]>b[i_b]){
        a[n-1-i] = a[i_a--];
      }
      else{
        a[n-1-i] = b[i_b--];
      }
    }
    else{
      if(i_a<0 && i_b>=0){
        a[i_b]=b[i_b--];
      }
    }
  }

  return true;
}
//a and b are sorted array.
function inplaceMerge(a, b){
  var i_a = a.length-1,
    i_b = b.length- 1,
    n = a.length + b.length - 1;

  while(i_a>=0 && i_b>=0){
    if(i_a<0){
      a[i_b] = b[i_b];
      i_b--;
      continue;
    }
    if(i_b<0){
      break;
    }

    if(a[i_a] > b[i_b]){
        a[n] = a[i_a--];
    } else{
        a[n] = b[i_b--];
    }
    n--;
  }

  return true;
}

function sortNumber(a,b) {
  return a - b;
}

function main(){
  var a= [1,5, 6, 9,111, 20].sort(sortNumber);
  var b = [3,4,7,10].sort(sortNumber);

  inplaceMerge(a,b);

  console.dir(a);

}

main();

