/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 19/09/13
 * Time: 9:38 PM
 * To change this template use File | Settings | File Templates.
 */
var stdin = require('./util/stdin');

//test list, format is: {command number:modal name.}
//all modal must has method 'start', 'doTest'.
var testList = {
  '1' : 'isUniqueChars'
 ,'2' : 'binarySearch'
  ,'3' : 'permutation'
  ,'4' : 'reverseWord'
  ,'5' : 'replaceInString'
  ,'6' : 'compress'
  ,'7' : 'nthToLast'
  ,'8' : 'linkedListAddition'
};

function main(){
  var cmd = '', test = null;;

  function init(){
    console.log('test command: \n');
    console.dir(testList);
    console.log('input 0 to back to main menu.');
    cmd = '';
    test = null;
  }

  init();

  stdin.getInput("please select test: ", function(input){
    input = input.trim();
    if(input == '0'){
      init();
      return;
    }

    if(cmd.length == 0){
      cmd = input.trim();
      if(testList.hasOwnProperty(cmd)){
        test = require('./test/' + testList[cmd]);
        if(test.start()){
          init();
        }
      }
      else{
        console.log('there is no such command, please select again.');
        init();
      }
    }
    else{
      if(input == '0'){
        init();
      }
      else{
        if(test.doTest(input)){
          init();
        }
      }

    }
  });
}



main();