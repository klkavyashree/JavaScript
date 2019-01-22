/************************************************************
 * Execution    :   1. cmd> node mergeSort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon mergeSort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To sort the values of the file using mergesort technique
 * 
 * @description
 * 
 * @file        :   mergeSort.js
 * @overview    :   chech for the values and sort it .
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   20-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
var Utility=require('../UtilPrgms/Utility');
var read=require('readline-sync');

function merge(){
var fileName=read.question('enter filename'); 
var res=Utility.callfile(fileName);
//var arr=['abc','xyz','aaa','bbb','ccc','hdg','hjs'];
Utility.mergeSort(res);
console.log("Merge sorted result ",res);
}
merge();