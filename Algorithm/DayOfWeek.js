/************************************************************
 * Execution    :   1. cmd> node DayOfWeek.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon DayOfWeek.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   find day of the week 
 * 
 * @description
 * 
 * @file        :   DayOfWeek.js
 * @overview    :   find assumed value of user
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   16-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const util=require('../UtilPrgms/Utility');

const read = require('readline-sync');

var day=read.questionInt("enter the the day");
var month=read.questionInt("enter the month it should be in integers");
var year=read.questionInt("enter the year");
var num=util.dayOfWeek(day,month,year);
var res=["sunday","monday","tueday","wednesday","thursday","friday","saturday"];
if(num<=res.length)
{
    console.log("the day fall on "+res[num]);
}
else{
    console.log("invalid date")
}

