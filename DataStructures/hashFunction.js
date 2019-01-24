/************************************************************
 * Execution    :   1. cmd> node hashFunction.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon hashFunction.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to store the similar type of elements in the list 
 * 
 * @description
 * 
 * @file        :   hashFunction.js
 * @overview    :   read value from the list and remove if they are exist and add if they are not exist.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   23-01-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/

const read = require('readline-sync')
const dsUtil = require('../UtilPrgms/DSUtility')
const util = require('../UtilPrgms/Utility');
const ref = require('util');
var fileName = read.question('enter the filename');
var arr = new Array(10);                  //creating array of 10 elements
data = util.callfile(fileName);           //callinf file
var flag;
for (let index = 0; index < data.length; index++) {
    var int = Number(data[index])
    var rem = int % 11;                 //storing remainder in variable
    if (arr[rem] === undefined) {
        arr[rem] = new dsUtil.LinkedList//creating linklist object
        arr[rem].add(int)
    }
    else {
        arr[rem].add(int)//adding value into particular linklist 
    }
}
for (let index = 0; index <= 10; index++) {
    ref.print(index + " elements  ");
    try {
        arr[index].show();//printing linklist elements

    } catch (err) {
        console.log("empty index");
    }

}
var str = ''
var num = read.questionInt('enter the number u want to search');
if (!isNaN(num)) {
    rem = Number(num % 11);
    console.log(rem);

    if (arr[rem] === undefined) {
        arr[rem] = new dsUtil.LinkedList;
    }
    console.log(arr[rem])
    console.log(num)
    if (arr[rem].search(Number(num))) {//check for the value wheather the value is presentst or not
        console.log("The number is found in file");
        arr[rem].remove(num);

    } else {
        console.log("Number is not found in file");
        arr[rem].add(num);
    }

    for (let index = 0; index <= 10; index++) {

        ref.print(index + " result elements ,   ");
        try {
            arr[index].show();
            str = str + arr[index].getData();//get data will concat all the data and return the string
            if (arr[index] !== 'undefined' && index < arr.length - 2) {
                str = str + " ";
            }
        } catch (err) {
            console.log("Empty index");

        }

    } console.log(str + "hgh");
    console.log("\n\n");
} else {
    console.log("Wrong input ");
}
