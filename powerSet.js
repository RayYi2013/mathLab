/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 9/16/13
 * Time: 9:33 AM
 * To change this template use File | Settings | File Templates.
 */


function powerSet(sourceSet){
    var n = sourceSet.length,
        res = [null],
        l = 0,
        item = 0;
    for(var i = 0; i<n; i++){
        l = res.length;
        item = sourceSet[i];
        for(var j = 0; j<l; j++){
            if(res[j]==null){
                res.push(item);
            }
            else{
                res.push([res[j],item]);
            }
        }
    }
    return res;
}

function powerSet1(sourceSet){
    var n ,  item, j,
        res = [];

    if( sourceSet.length == 0){
        res.push('');
        return res;
    }

    item = sourceSet.pop();
    res = powerSet(sourceSet).slice(0);
    n = res.length;
    for(j = 0; j<n; j++){
        if(res[j]==''){
            res.push(item+'');
        }
        else{
//            res.push(item +',' + res[j]);
            res.push(res[j] + ',' + item );
        }
    }

    return res;
}


function test(input){
    var testSet = input.split('');

//    testSet.sort();

    //remove duplicate
    testSet = testSet.filter(function(item, index){
        return testSet.indexOf(item) == index;
    });

    return powerSet(testSet);
}

function main(){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdout.write("please input a string: ");

    process.stdin.on('data', function (data) {
        data = data.toString().trim();
        var res = test(data);
//        res.sort();

        console.dir(res);
    });
}

main();