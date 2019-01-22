/************************************************************
 * Execution    :   1. cmd> node permutationString.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon permutation.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the distance of a point from the origin.
 * 
 * @description
 * 
 * @file        :   permutationString.js
 * @overview    :   Uses to find all the permutation of the given string
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util = require('../UtilPrgms/Utility');

var read=require('readline-sync');    //scan for input
var n=read.question("enter String which u need to find permutation");    //getting string frm user and assighning it to nutil.FindPermutationOfString(n);              //calling function from util 
util.findPermutationOfString(n);