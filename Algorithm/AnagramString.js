/************************************************************
 * Execution    :   1. cmd> node AnagramString.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Anagramstring.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Checks if two Strings are Anagram or not.
 * 
 * @description
 * 
 * @file        :   AnagramString.js
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
var String1=read.question("enter the String1 to check for anagram");
var String2=read.question("enter the String2 to check for anagram");
var ans=util.findAnagram(String1,String2);
console.log(ans);