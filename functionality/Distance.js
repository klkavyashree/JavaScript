/**@purpose : to find the distance
 * @author : Kavyashree K L
 * @verson :1.0
 * @since: 13 jan 2019
 
 * *//************************************************************
 * Execution    :   1. cmd> node Distance.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Distance.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To get the distance of a point from the origin.
 * 
 * @description
 * 
 * @file        :   Distance.js
 * @overview    :   Uses Euclidean formulae to calculate the distance from the origin.
 * @author      :   kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   13-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
var x=read.questionInt("enter the x point to find distance");
var y=read.questionInt("enter the y point to find distance");
var ans=util.findDistance(x,y);
console.log(ans);