/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 9/19/13
 * Time: 5:22 PM
 * To change this template use File | Settings | File Templates.
 */

function isUniqueChars(input){
    var checker = 0,
        n = input.length,
        c;

    for(var i=0; i<n; i++){
        c = input[i] - 'a';
        c = 1<<c;
        if((checker & (c))>0){
            return false;
        }
        checker |= c;
    }
    return true;
}



function main(){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdout.write("please input a string: ");

    process.stdin.on('data', function (data) {
        data = data.toString().trim();
        var res = isUniqueChars(data);
//        res.sort();

        console.dir('input ' + res ? 'is' : 'is not' + ' uniqueChars.');
    });
}

main();