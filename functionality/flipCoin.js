
/**@purpose : To get user input to get count to flip the coin by using random function calculate percentage of heads and tails 
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 10 jan 2019
 
 * */
var util= require('../UtilPrgms/Utility');

var read=require('readline-sync');//scan for input
var count=read.question("enter number of times to flip the coin");//getting user input
util.flipCoin(count);//calling flipCoin function from utility file