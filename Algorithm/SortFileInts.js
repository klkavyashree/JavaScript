/************************************************************
 * Execution    :   1. cmd> node SortFileInts.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon SortFileInts.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   sort ints using insertion sort algorithm and read words from files.
 * 
 * @description
 * 
 * @file        :   SortFileInts.js
 * @overview    :   sorting of ints in ascending order.
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

const read=require('readline-sync');
var fileName=read.question("enter file name");
var wordArray=util.callfile(fileName);
wordArray=util.bubblesort(wordArray);
console.log(wordArray);