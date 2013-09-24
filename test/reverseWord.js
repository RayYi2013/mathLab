/**
 * Given a string, returns a string with the order of the words reversed.
 *
 * For example, "dog bites man" becomes "man bites dog"
 */
/*reverse_words(string $input) { }
char *reverse_words(char *input) { }
std::string reverse_words(std::string input) { }*/

function reverse_words1(input){
  var tmp = '';
  var a = input.split(' ');
  var n = a.length;
  for(var i=0; i<n/2; i++){
    tmp = a[i];
    a[i]= a[n-i];
    a[n-i] = tmp;

  }
  return a.join(' ');
}

function reverse(a, s, e){
    var tmp;
    var i = 0, c=s;
    while(c<e){
        tmp = a[s+i];
        a[s+i] = a[e-i];
        a[e-i] = tmp;
        i++;
        c += 2;
    }
}

function reverse_words(input){
    var a=[], n = input.length, i, s;
    for(i=0; i<n; i++){
        a[i]=input[i];
    }

    //reverse whole string
    reverse(a,0,n-1);

    i=0;
    while(i<n){
        //skip space.
        while(i<n && a[i]==' '){
            i ++;
        }
        s = i;

        //find word
        while(i<n && a[i]!=' '){
            i ++;
        }
        reverse(a,s,i-1);
    }
//    reverse(a,s,i-1);

    return a.join('');
}

function reverse_words1(input){
  var n = input.length;
  var a=[];
  var s=n, e=n;
  for(var i=n-1; i>=0; i--){
    if(input[i]==' '){
      if(s!=e){
        a.push(input.substring(s,e));
      }
      e = i;
      s=i;
    }
    else{
      s = i;
    }
  }
  a.push(input.substring(0,e));
  return a.join(' ');
}



var start = function(){
  console.log('please input test string:');
}

module.exports.start = start;

module.exports.doTest = function(input){
  var res = reverse_words(input);
  console.log('new string is:\n%s\n\n\n',res);
  start();
};
