/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 20/09/13
 * Time: 12:13 AM
 * To change this template use File | Settings | File Templates.
 */

/*
Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string
*/

function countCompressLength(input){
  var n = input.length,
    c = 0; size = 0,
    last=input[0];

  //count length of compressed string
  for(i=0; i<n; i++){
    if(input[i] == last){
      c ++;
    }
    else{
      size += 1 + (c.toString().length);
      c = 1;
      last = input[i];
    }
  }
  size += 1 + (c.toString().length);

  return size;
}

function doCompress(input){
  var n = input.length,
    c = 0, i,
    last=input[0],
    a = [], j=0;

  for(i=0; i<n; i++){
    if(input[i] == last){
      c++;
    }
    else{
      a[j++] = last;
      a[j++] = c;
      last = input[i];
      c = 1;
    }
  }
  a[j++] = last;
  a[j++] = c;

  return a.join('');
}


function countCompressLength1(input){
  var n = input.length,
    c = 0, i,
    b = false,
    last='';

  //count length of compressed string
  for(i=0; i<n; i++){
    if(input[i] != last){
      last = input[i];
      c++;
      if(b){
        c++;
      }
      b = true;
    }
    else{
      if(b){
        c++;
        b = false;
      }
    }
  }
  if(b) c++;

  return c;
}

function compress(input){

  //if not smaller, return original.
  var c = countCompressLength(input);
//  console.log('new length is: %d',c);
  if(c>=input.length){
    return input;
  }

  //compress string to array
  return doCompress(input);
}

var start = function(){
  console.log('please input test string:');
}

module.exports.start = start;

module.exports.doTest = function(input){
  var res = compress(input);
  console.log('new string is:\n%s\n\n\n',res);
  start();
};
