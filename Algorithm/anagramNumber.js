/************************************************************
 * Execution    :   1. cmd> node anagramNumber.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon anagramNumber.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Checks if two Strings are Anagram or not.
 * 
 * @description
 * 
 * @file        :   anagramNumber.js
 * @overview    :   Checks two String if they are simply a rearrangement of each other.
 * @author      :   kavyashree k l <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   15-01-2019
 * 
 * **********************************************************/        

/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
function anagramPalimdrome() 
{
    console.log("program start");
    util.isAnagramPalimdrome();
}
anagramPalimdrome()