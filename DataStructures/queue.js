/************************************************************
 * Execution    :   1. cmd> node Queue.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Queue.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   push and pull the element from the Queue data structure
 * .
 * 
 * @description
 * 
 * @file        :   Queue.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/  
 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util = require('../UtilPrgms/DSUtility');
var read = require('readline-sync');

function Queue() {
    var que = new util.Queue;
    var totalbankcash = 100000;
    flag = true;
    var ask = read.question("Enter the total number of people ");
    
       if(ask>0){
        for (var i = 1; i <= ask; i++) {
            var ans = read.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
            if (ans == 1) {//if the ans is 1 then ask user to enter amount he want to deposit
                var amount = read.question("Enter total amount do you want to Deposit ");
                que.push(Number(amount));
                flag= true;
               
            }
            else if (ans == 2) {//if the ans is 2 then ask user to enter amount he want to withdraw
                var amount = read.question("Enter total amount do you want to Withdraw  ");
                que.push(Number(-amount));
                
                flag= true;
               
            }
            else {
                console.log("Make sure that, you entered the correct key ");
                flag= false;
                return;
            }
        }
        }
        else{
            console.log("Invalid input ");
            return;
        }
    
    
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= ask; i++) {
            addition = (addition + que.pop());//adding the total amount they deposit or withdraw
        }
        console.log(addition);
        var totaltransaction = totalbankcash + addition;//cal toatal transaction 
        console.log("At the end of the day Total amount left in the bank ", totaltransaction);
        if (totaltransaction < totalbankcash) {
            console.log("Bank cash is not Maintained");
        }
        else {
            console.log("Bank cash is maintained");//printing to the console
        }
    }
}
Queue();