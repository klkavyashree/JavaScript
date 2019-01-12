/**@purpose : to print 2D array
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 12 jan 2019
 
 * */
var util=require('../UtilPrgms/Utility');
var read = require('readline-sync');
var m = read.questionInt("enter the number of rows ");
var n = read.questionInt("enter the number of columns ");
var arr=[];
while(arr.length!=(m*n))
{
    var j=read.questionInt("enter the value");
    
    arr.push(j);
}
//console.log(arr);
util.Print2DArray(m,n,arr);


