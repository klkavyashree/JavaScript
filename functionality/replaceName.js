


/**@purpose : To get input from user i.e more than 3 char 
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 10 jan 2019
 
 * */
var util= require('../UtilPrgms/Utility');//importing function from util

var read=require('readline-sync');//scan for input
var name=read.question("enter ur name");//getting user input
util.replace(name);//importing replace function from utility file