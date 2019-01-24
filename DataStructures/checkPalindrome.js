/************************************************************
 * Execution    :   1. cmd> node checkPalindrome.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon checkPalindrome.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To check if the given word is palindrome or not.
 * 
 * @description
 * 
 * @file        :   checkPalindrome.js
 * @overview    :   Use rear and front to check from both ends if the word is palindrome or not.
 * @author      :   Kavyashree K L<kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   20-01-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities of Deque.
 */
var util = require('../UtilPrgms/deQueue');
function check() {
    var deque = new util.Deque;//creating deque object
    var answer = readline.question("Enter the string  ");
    var result = deque.PalindromeChecker(answer);
    if (result == false) {
        console.log("String is not a Palindrome ");//printing to the console
    }
    else {
        console.log("String is palindrome  ");
    }
}
check();