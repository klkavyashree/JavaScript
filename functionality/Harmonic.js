/**@purpose : To find Nth harmonic value  
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 11 jan 2019
 
 * */
var util = require('../UtilPrgms/Utility');

var read=require('readline-sync');    //scan for input
var n=read.questionInt("enter n value");           //getting value frm user and assighning it to n
var res=util.harmonics(n);              //calling function from util 
console.log(res);