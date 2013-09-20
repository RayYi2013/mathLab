/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 9/19/13
 * Time: 3:01 PM
 * To change this template use File | Settings | File Templates.
 */

function quickSort(a){
    var n = a.length;
    if(n <=1){
        return a;
    }
    var p0 = a[Math.floor(n/2)],
        p = [],
        left = [],
        right = [],
        r = [],
        c;
    for(var i=0; i<n; i++){
        c = a[i];
        if(p0 == c){
            p.push(c);
        }
        else if(p0 > c){
            left.push(c);
        }
        else{
            right.push(c);
        }
    }

/*
    if(left.length>0){
        r.concat(quickSort(left));
    }
    r.concat(p);
    if(right.length>0){
        r.concat(quickSort(right));
    }
*/

    r = quickSort(left).concat(p, quickSort(right));
    return r;
}


function main(){
    var a = [2,3,3,4,5,6,32,7,8,9,11,23,66,24,25,266,43];


    console.dir(quickSort(a));

}

main();
