/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 21/09/13
 * Time: 3:58 PM
 * To change this template use File | Settings | File Templates.
 */

/*
You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the 1 's digit is at the head
of the list. Write a function that adds the two numbers and returns the sum as a
linked list.
  FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem
*/


var helper = require('./../util/helper');

function addition(l1, l2, up){
  var head, i = 0;
  if (typeof up === "undefined") {
    up = null;
  }
  if(l1==null && l2==null && up==null){
    return null;
  }

  if(l1!=null){
    i += l1.value;
    l1 = l1.next;
  }
  if(l2!=null){
    i += l2.value;
    l2 = l2.next
  }
  if(up!=null){
    i += up.value;
  }
  head = convertList(i);
  head.next = addition(l1, l2, head.next);
  return head;
}

function addition1(l1, l2){
  var result = null,
    node = null,
    i = 0;

  do{
    i = 0;
    if(l1!=null){
      i += l1.value;
      l1 = l1.next;
    }

    if(l2!=null){
      i += l2.value;
      l2 = l2.next;
    }

    if(node!=null && node.next != null){
      i += node.next.value;
    }

    if(result == null){
      result = convertList(i);
      node = result;
    }
    else{
      node.next = convertList(i);
      node = node.next;
    }

  }while(l1 != null || l2 != null)

  return result;
}



//forword order, first digit is tail.
function convertList1(number){
  var i = Math.floor(number /10);
  if(i<=0){
    return {value: number%10, next: null};
  }

  var node = convertList1(i),
    node = head;
  node.next = convertList1(i);
  return head;
}

//reverse order, first digit is head.
function convertList(number){
  var i = Math.floor(number /10),
    head = {value: number%10, next: null},
    node = head;
  while(i>0){
     node.next = {value: i%10, next : null};
    node = node.next;
    i =  Math.floor(i /10);
  }
  return head;
}

function init(){
  console.log('pleae input two operators:\n');
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


  var list1 = convertList(l);
  var list2 = convertList(k);

  console.log('first linked list is:\n');
  console.log(helper.linkedListToString(list1));

  console.log('second linked list is:\n');
  console.log(helper.linkedListToString(list2));

  console.log('result linked list is:\n');
  console.log(helper.linkedListToString(addition(list1,list2)));

  init();
  return false;
};