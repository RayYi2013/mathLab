/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 21/09/13
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */

//Implement an algorithm to find the kth to last element of a singly linked list.

var helper = require('./../util/helper');

//find kth to the last element, if find it, inovke callback 'cb'.
function nthToLast(head, k, cb){
  var node = head.next;
  if(node == null){
    return 0;
  }
  var n = nthToLast(head.next, k, cb) + 1;
  if(n == k){
    cb(node);
  }

  return n;
}

function nthToLast(head, k, cb){
  var node = head,
    cur = head,
    count = 0;

  while(node!=null && count<k){
    node = node.next;
    count ++;
  }



  if(node == null){
    return head;
  }
  while(node.next!=null){
    cur =cur.next;
    node = node.next;
  }

  cb(cur);

  return cur;
}



function init(){
  console.log('pleae input total number of list and nth to the last:\n');
}

module.exports.start = function(){
  init();
}

module.exports.doTest = function(input){
  var a = input.split(' ');
  console.dir(a);
  if(a.length != 2){
    console.log('only input 2 numbers:\n');
    init();
    return;
  }

  var l = parseInt(a[0]),
    k = parseInt(a[1]);

  if(k > l){
    console.log('first number must greater than second.\n');
    init();
    return;
  }

  var list = helper.createLinkedList(helper.generateArray(l));

  console.log('original linked list is:\n');
  console.log(helper.linkedListToString(list));

  nthToLast(list, k, function(node){
    console.log('\n\n\nthe %dth object is:\n', k);
    console.dir(node);
  });

  return false;
};