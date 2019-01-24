/************************************************************
 * Execution    :   1. cmd> node OrderedList.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon OrderedList.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   OrderedList.js
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
const ll = require('../UtilPrgms/DSUtility');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var temp = [];
const util = require('../UtilPrgms/Utility');
try {
    var linklist = new ll.LinkedList();//creating linklist object
    var fileName = read.question("enter filename")
    var datas = util.callfile(fileName);
    for (let index = 0; index < datas.length; index++) {
        temp.push(parseInt(datas[index]))
    }
    console.log(temp)
    data = util.bubblesort(temp);//calling bubblesort function
    console.log(data)
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
    var display = linklist.display();
    console.log(display);
    var num = read.question("Enter the data you want to search");
    var check = linklist.search(num);//calling searching function
    console.log(check);
    if (check) {
        linklist.remove(num);
    }
    else {
        linklist.addToPos(num);
    }
    var display = linklist.display();//display the elemets using linklist implementation
    console.log(display);
    util.writefile(fileName, display)//writting into the file
} catch (err) {
    console.error(err);
}