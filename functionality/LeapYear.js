/**@purpose : To check weather the user input is leap year or not
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 10 jan 2019
 
 * */
var util= require('../UtilPrgms/Utility');

var read=require('readline-sync');//scan for input
var year=read.questionInt("enter year should be of 4 digits");//getting user input
console.log(util.LeapYear(year));//calling Leapyear function from utility file