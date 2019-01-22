/************************************************************
 * Execution    :   1. cmd> node fileCall.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon fileCall.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   search for the word usingbinary search method by reading word list from the file
 * 
 * @description
 * 
 * @file        :   fileCall.js
 * @overview    :   search for the word using binary search.
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

var wordArray=util.callfile();
wordArray=util.bubblesort(wordArray);

key=read.question("enter the word u need to search");
var ans=util.binarySearch(wordArray,key);
console.log(ans);