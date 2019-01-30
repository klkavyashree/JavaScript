/************************************************************
 * Execution    :   1. cmd> node replaceString.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon replaceString.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   replace the particular strings of the file using regex.
 * 
 * @description
 * 
 * @file        :   replaceString.js
 * @overview    :  replace the string of the file.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   25-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const fileStream = require('fs')
const string = fileStream.readFileSync('oops.txt', 'utf8')//acessing file

const read = require('../Oops/OopsUtility/OopsUtil')//acessing function
const sync = require('readline-sync')

var name = sync.question('enter name to u want to replace')//reading input from the user
while (!isNaN(name))//validating for the name it should be string not number
{
    console.log('enter valid name')
    name = sync.question('enter name to u want to replace')//reading input from the user
}

var fullName = sync.question('enter fullname')
while (!isNaN(fullName))//validating for the name it should be string not number
{
    console.log('enter valid fullName')
    fullName = sync.question('enter name to u want to replace')//reading input from the user
}

var num = sync.questionInt('enter phone number')
while (isNaN(num))//validating for the name it should be string not number
{
    console.log('enter valid name')
    name = sync.question('enter name to u want to replace')//reading input from the user
}

var date = new Date();//creating object of date
var ans = read.replaceUsingRegex(name, fullName, num, date, string);
console.log(ans);

