/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 9/19/13
 * Time: 5:22 PM
 * To change this template use File | Settings | File Templates.
 */
var stdin = require('../util/stdin');


function isUniqueChars(input){
    var checker = 0,
        n = input.length,
        c;

    for(var i=0; i<n; i++){
        c = input.charCodeAt(i) - 'a'.charCodeAt(0);
        c = 1<<c;
        if((checker & (c))>0){
            return false;
        }
        checker |= c;
    }
    return true;
}

module.exports.start = function(){
  console.log('please input test string:');
}

module.exports.doTest = function(input){
  var res = isUniqueChars(input);
  console.dir('input ' + (res ? 'is' : 'is not') + ' uniqueChars.');
  return false;
};