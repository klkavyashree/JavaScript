/************************************************************
 * Execution    :   1. cmd> node Quadratic.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Quadratic.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Find the roots of the Quadratic equation.
 * 
 * @description
 * 
 * @file        :   Quadratic.js
 * @overview    :   Take A,B,C values of the equation Ax2+Bx+c=0 to get two root valkue of 'x'.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
var a=read.questionInt("enter the a value to find the root");//read value from user
var b=read.questionInt("enter the b value to find the root");//read value from user
var c=read.questionInt("enter the c value to find the root");//read value from user
util.findRoot(a,b,c);//calling function from util class