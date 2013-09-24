
/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 20/09/13
 * Time: 7:44 PM
 * To change this template use File | Settings | File Templates.
 */

/*
 Given an image represented by an NxN matrix, where each pixel in the image is 4
 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

function rotate(a){
  var n = a.length,
    layer = Math.floor(n/2) + 1,
    offset = 0,
    first = 0,
    last = 0,
    tmp;

  for(var i=0; i<=layer; i++){
    first = i;
    last = n - 1 - i;
    for(var j = first; j<last; j++){
      offset = j - first ;
      //keep top
      tmp = a[first][j];

      //left -> top
      a[first][j] = a[last-offset][first];

      //bottom -> left
      a[last-offset][first] = a[last][last-offset];

      //right -> bottom
      a[last][last-offset] = a[j][last];

      //top -> right
      a[j][last] = tmp;
    }
  }
}


function generateMatrix(n){
  var m = Math.floor(n/2),
      a = [], b = [],
      c = '';
  for(var i=0; i<n; i++){
    b = [];
    for(var j=0; j<n; j++){
      if(i<m){
        c = '*';
      }
      else{
        c = '+';
      }
      b.push( c);
    }
    a.push(b);
  }

  return a;
}

function main(){
  var a = generateMatrix(5);

  console.log('original matrix is:\n');
  console.dir(a);

  rotate(a);

  console.log('\n\n\nnew matrix is:\n');
  console.dir(a);

}

main();