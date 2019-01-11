/**@purpose : calculate prime factors for n value
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 11 jan 2019
 
 * */
var util=require('../UtilPrgms/Utility');
var read = require('readline-sync');
var n = read.questionInt("enter the value ");
var res=util.PrimeFactor(n);
console.log(res);