
/************************************************************
 * Execution    :   1. cmd> node UnorderedList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon UnorderedList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   UnorderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   17-01-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const read = require('readline-sync');
/**
 * import the Utility class to use the functionalities of LinkedList.
 */
var ll = require('../UtilPrgms/DSUtility');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var util = require('../UtilPrgms/Utility');
try {
    var linklist = new ll.LinkedList();//creating list object

    let data = util.callfile('nm.txt');
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
    var display = linklist.display();//display all  the value using linklist display
    console.log(display);//print all the values inthe linklist
    let name = read.question("Enter the data you want to search");
    var check = linklist.search(name);
    console.log(check);
    if (check) {
        linklist.remove(name);//rempove the element if it is already inthe file
    }
    else {
        linklist.add(name);
    }
    var display = linklist.display();//display the elemets using linklist implementation
    console.log(display);
    util.writefile('nm.txt', display)//
} catch (err) {
    console.error(err);
}