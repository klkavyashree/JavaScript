/**@purpose : find the three  distinct values which will give zero when we add all three
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 12 jan 2019
 
 * */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
var i=read.questionInt("enter the array length of the array");
var arr=[];
while(arr.length!=i)
{
    var j=read.questionInt("enter the value");
    
    arr.push(j);
}
//console.log(arr);
util.CheckSumEqualToZero(arr);
