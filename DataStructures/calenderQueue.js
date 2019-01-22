/************************************************************
 * Execution    :   1. cmd> node calenderQueue.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon calenderQueue.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   by using Queue, print calender  
 * .
 * 
 * @description
 * 
 * @file        :   calenderQueue.js
 * @overview    :   take input month and year from the user and print calender
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/  
 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 * */
var take = require('util');
var que=require('../UtilPrgms/DSUtility');
var Utility = require('../UtilPrgms/Utility');
function calender(){

var dayQue=new que.Queue;
var dateQue=new que.Queue;
var month=+process.argv[2];
var year=+process.argv[3];

var day = Utility.dayOfWeek(1, month, year);
console.log(day);
var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

var leap = Utility.isLeapYear(year);//checking wheather the given year is leap year by using isleapyear function
if (leap) {
    dates[2] = 29;//if the year is leap year then the number of days is 29
}

for (var i = 0; i < week.length; i++) {
    dayQue.push(week[i]);
}
for (var i = 1; i <= dates[month]; i++) {
 dateQue.push(i);
}


for (var i = 0; i < week.length; i++) {
    take.print(dayQue.pop() + "  ");
}
console.log();
for (var i = 0; i < (day * 5); i++) {
    take.print(" ");
}

for (var i = 1; i <= dates[month]; i++) {
    if (i < 10) {
        take.print(" " + dateQue.pop() + "   ");//printing dates less than 10
        
    }

    if (i > 9) {
        take.print("" + i + "   ")//printing dates greater than 10
    }
    if ((i + day) % 7 == 0) {
        console.log();
    }

}

console.log("\n\n");
}
calender();