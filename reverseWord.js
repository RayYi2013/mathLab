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

function reverse_words(input){
  var a=[], n = input.length;
  for(var i=0; i<n; i++){
    a[i]=input[i];
  }

  var s = 0, e = input.length- 1,
    first_s = s, first_e =s, last_s =e,last_e = e,
    first = false, last = false;
  while(s>=e){
    if(input[s]==' '){
      if(first_s != first_e){
        first = true;
      }
      else{
        first_s = first_e = s;
      }
    }
    else{
      first_e = s-1;
    }
  }
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

function main(){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdout.write("please input a string: ");

  process.stdin.on('data', function (data) {
    data = data.toString().trim();
    var res = reverse_words(data);
//        res.sort();

    console.dir(res);
  });
}

main();
