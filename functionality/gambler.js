/**@purpose : keep the number of treck who will win
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 12 jan 2019
 
 * */

 var util=require('../UtilPrgms/Utility');

 var read=require('readline-sync');          //scan for input
 var stake=read.questionInt("enter stake value");            //getting value from user
 var goal=read.questionInt("enter goal value");              //getting value frm user
 var play=read.questionInt("how number of times want to play");   //getting value frm user
 util.gambler(stake,goal,play);             //calling function from util
 