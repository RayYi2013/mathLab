/**
 * Created with JetBrains WebStorm.
 * User: ray
 * Date: 19/09/13
 * Time: 9:23 PM
 * To change this template use File | Settings | File Templates.
 */


process.stdin.resume();
process.stdin.setEncoding('utf8');

module.exports.getInput = function(comment,cb){
  process.stdout.write(comment);
  process.stdin.on('data', function (data) {
    var input = data.toString().trim();
    if(input == 'q'){
      process.exit();
    }
    else{
      cb(input);
    }
  });
};


