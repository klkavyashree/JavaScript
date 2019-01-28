/************************************************************
 * Execution    :   1. cmd> node addAnagramToQue.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon addAnagramToQue.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   .
 * 
 * @description
 * 
 * @file        :   addAnagramToQue.js
 * @overview    :   Find the prime and anagram numbers within the range and display using Que.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   21-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
var util = require('../UtilPrgms/Utility')

var dsUtil = require('../UtilPrgms/DSUtility')
var que=require('../UtilPrgms/queue')
var arrPrime = [];
var arrAnagram = [];
for (let index = 2; index < 1000; index++) {
    if (util.checkPrime(index))//check for prime numbers
    {
        arrPrime.push(index)//pushing value into the array
    }
}
for (let index = 0; index < arrPrime.length; index++) {
    for (let index1 = index + 1; index1 < arrPrime.length; index1++) {
        if (util.isAnagram(arrPrime[index], arrPrime[index1])) {

            arrAnagram.push(arrPrime[index1]);//pushing value into the anagramarray
            arrAnagram.push(arrPrime[index]);//pushing value into the anagramarray

        }
    }

}
var que = new que.Queue;
for (let index = 0; index < arrAnagram.length; index++) {
    que.push(arrAnagram[index]);//pushing value into the 
}
que.print();//printing values using que print
