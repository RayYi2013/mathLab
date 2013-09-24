/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 21/09/13
 * Time: 10:00 AM
 * To change this template use File | Settings | File Templates.
 */


//generate array with random number between 0 and 100.
module.exports.generateArray = function (l){
  var a = [],
    max = 100,
    min = 0;
  for(var i=0; i<l; i++){
    a.push( Math.floor((Math.random()*10) + min));
  }
  return a;
}

module.exports.createLinkedList = function (a){
  var n = a.length,
    head = { value: a[0], next: null},
    c = head;

  for(var i =1; i<n; i++){
    c.next = { value:a[i],next: null};
    c = c.next;
  }

  return head;
}

//list contain number. its structor is: { value: a[0], next: null}
module.exports.linkedListToString = function (h){
  var str = '',
    node = h;

  while(node!=null){
    str += node.value + '';
    if(node.next != null){
      str += ' -> ';
    }
    node = node.next;
  }

  return str;

}

