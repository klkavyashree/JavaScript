/************************************************************
 * Execution    :   1. cmd> node binaryTree.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon binaryTree.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   .
 * 
 * @description
 * 
 * @file        :   binaryTree.js
 * @overview    :   find in how many ways can input number can be search by using binary tree
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   22-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
var dsUtil=require('../UtilPrgms/DSUtility')
var read=require('readline-sync')
var num=read.questionInt("enter the number")
var fact=dsUtil.findFactorial(2*num)//finding factorial of the number
var fact1=dsUtil.findFactorial(num+1)
var fact2=dsUtil.findFactorial(num)
var res=fact/(fact1*fact2);
console.log(res)//printing output
