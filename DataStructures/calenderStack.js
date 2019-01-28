/************************************************************
 * Execution    :   1. cmd> node calenderStack.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon calenderStack.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   by using stack, print calender  
 * .
 * 
 * @description
 * 
 * @file        :   calenderStack.js
 * @overview    :   take input month and year from the user and print calender
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/
 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */var take = require('util');
var stack = require('../UtilPrgms/stack');
var Utility = require('../UtilPrgms/Utility');

function calender() {

    var dayQue = new stack.Stack;//creating object of stack
    var dateQue = new stack.Stack;//creating object of stack
    var month = ref.questionInt('enter the month in integer')
    var year = ref.questionInt('enter the year')//taking user input
    while ((month < 0 || month >= 12) || (month == isNaN)) {//validating if month is less than greter then 12 it will ask use to re enter
        console.log("month should be less than 12")
        month = ref.questionInt('enter month greater than 0 nad less than 12')
    }
    while (year == (isNaN) || year < 0) {//validation for year

        console.log("year should be greater than 0")
        year = ref.questionInt('enter year greater than 0')
    }


    var day = Utility.dayOfWeek(1, month, year);
    console.log(day);
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

    var leap = Utility.isLeapYear(year);//checking wheather the given year is leap year by using isleapyear function
    if (leap = true) {
        dates[2] = 29;//if the year is leap year then the number of days is 29
    }

    for (var i = week.length - 1; i >= 0; i--) {//taking all the day of week into the array
        dayQue.push(week[i]);
    }
    for (var i = dates[month]; i >= 1; i--) {//taking all the day of week into the array
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