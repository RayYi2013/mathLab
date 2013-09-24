/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 19/09/13
 * Time: 9:21 PM
 * To change this template use File | Settings | File Templates.
 */
/*Write a method to replace all spaces in a string with '%20'. You may assume that the
string has sufficient space at the end of the string to hold the additional characters,
  and that you are given the "true" length of the string. (Note: if implementing in Java,
  please use a character array so that you can perform this operation in place.)*/

function replaceString(input){
  var a = input.split(''),
    n = a.length,
    l, i, c=0;

  for(i = 0; i<n; i++){
    if(a[i]==' '){
      c++;
    }
  }

  //because the string '%20' take 2 more space than ' '.
  n--;
  l = n + c*2;

  while(n>0){
    if(a[n] == ' '){
      a[l--] = '0';
      a[l--] = '2';
      a[l--] = '%';
      n--;
    }
    else{
      a[l--] = a[n--];
    }
  }

  return a.join('');
}
function replaceString1(input){
  var a = input.split(''),
    n = a.length- 1, i,l = n+1;

  while(n>0){
    if(a[n] == ' '){
      l += 2;
      i = l-1;
      while(i>n+2){
        a[i] = a[i-2];
        i--;
      }
      a[i--] = '0';
      a[i--] = '2';
      a[i--] = '%';
    }
    n--
  }

  return a.join('');
}

var start = function(){
  console.log('please input test string:');
}

module.exports.start = start;

module.exports.doTest = function(input){
  var res = replaceString(input);
  console.log('new string is:\n%s\n\n',res);
  start();
};
