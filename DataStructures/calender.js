/************************************************************
 * Execution    :   1. cmd> node calender.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon calender.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   by using Queue, print calender  
 * .
 * 
 * @description
 * 
 * @file        :   calender.js
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
var ref=require('readline-sync')
var util = require('../UtilPrgms/Utility');
var dsUtil=require('../UtilPrgms/DSUtility')

function calender() {
    var month=ref.questionInt('enter the month');
var year=ref.questionInt('enter the year')
   
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]
    var day = util.dayOfWeek(1, month, year);
    console.log(day);
    var leap = util.isLeapYear(year);//checking wheather the given year is leap year by using isleapyear function
    if (leap = true) {
        dates[2] = 29;//if the year is leap year then the number of days is 29
    }
    for (var i = 0; i < week.length; i++) {
        take.print(week[i] + "  ");//printing weekdays
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            take.print("" + i + "   ");//printing dates less than 10
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


      


