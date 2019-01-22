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
var ll = require('../UtilPrgms/DSUtility');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var util = require('../UtilPrgms/Utility');
try {
    var linklist=new ll.LinkedList();//creating linklist object
    var fileName=read.question("enter filename")
    let datas = util.callfile(fileName);
    var data=util.bubblesort(datas);//calling bubblesort function
    console.log(datas)
    for(let index=0;index<data.length;index++)
        linklist.add(data[index]);
    var display = linklist.display();
    console.log(display);
    let name = read.question("Enter the name you want to search");
    var check = linklist.search(name);//calling searching function
    console.log(check);
    if(check){
        linklist.remove(name);
    }    
    else{
        linklist.addToPos(name);
    }
    var display = linklist.display();//display the elemets using linklist implementation
    console.log(display);
    util.writefile(fileName,display)//writting into the file
} catch (err) { 
  console.error(err);
}