/************************************************************
 * Execution    :   1. cmd> node Gambler.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Gambler.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Create the Gambling game.
 * 
 * @description
 * 
 * @file        :   Gambler.js
 * @overview    :   To play Gambling game till player reaches his goal or losses all his money.
 * @author      :   kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */

 var util=require('../UtilPrgms/Utility');

 var read=require('readline-sync');          //scan for input
 var stake=read.questionInt("enter stake value");            //getting value from user
 var goal=read.questionInt("enter goal value");              //getting value frm user
 var play=read.questionInt("how number of times want to play");   //getting value frm user
 util.gambler(stake,goal,play);             //calling function from util
 