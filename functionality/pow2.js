/**@purpose : To find values of power of 2 till 2^n where n is the user input
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 10 jan 2019
 
 * */
var util=require('../UtilPrgms/Utility'); // importing from utilty function

var read=require('readline-sync'); // scan input
var n=read.questionInt("enter n value");
util.pow2(n);

