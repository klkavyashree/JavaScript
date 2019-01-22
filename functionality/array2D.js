/************************************************************
 * Execution    :   1. cmd> node array2D.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon array2D.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Read and display 2 Dimensional values.
 * 
 * @description
 * 
 * @file        :   array2D.js
 * @overview    :   Use arrays to store and retrieve the values in order.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   12-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');
var read = require('readline-sync');
var rows = read.questionInt("enter the number of rows ");//reading row value from user
var column = read.questionInt("enter the number of columns ");//reading column value from user
util.print2DArray(rows,column);


