/**@purpose : to count the random numbers need to generate user needed coupan
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 12 jan 2019
 
 * */
var util=require('../UtilPrgms/Utility');
var read = require('readline-sync');
var n = read.questionInt("needed coupan number is? ");
if(n>1)
{
var count=util.CoupanCount(n);
console.log(count);
}
else{
    console.log("enter number greater than 1");
}