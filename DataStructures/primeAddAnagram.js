/************************************************************
 * Execution    :   1. cmd> node primeAddAnagram.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon primeAddAnagram.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To display all prime and angram numbers within 1000 with interval as 100.
 * 
 * @description
 * 
 * @file        :   primeAddAnagram.js
 * @overview    :   Find the prime numbers within the range and display.
 * @author      :   K L Kavyashree <klkavyashree@gmail.com>
 * @version     :   1.0
 * @since       :   21-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
var dsUtil = require('../UtilPrgms/DSUtility');
var ref = require('util')
var util = require('../UtilPrgms/Utility')
arrPrime = []
var array = [['0-100'], ['100-200'], ['200-300'], ['300-400'], ['400-500'], ['500-600'], ['600-700'], ['700-800'], ['800-900'], ['900-1000']]

for (let i = 2; i < 1000; i++) {
    if (util.checkPrime(i)) {
        arrPrime.push(i);//pushing all the prime value into the arrPrime
    }
}
var i = 0, j = 1, range = 100;
for (let index = 0; index < arrPrime.length; index++) {
    for (let index1 = index + 1; index1 < arrPrime.length; index1++) {
        if (util.isAnagram(arrPrime[index], arrPrime[index1])) {//checking for the angram and prime value
            if (arrPrime[index] <= range) {
                if (!array.includes(arrPrime[index]) && !array.includes(arrPrime[index1])) {
                    array[i][j] = arrPrime[index];
                    j++;
                }
            }
            else {
                j = 1;
                range = range + 100;
                i++;
                if (!array.includes(arrPrime[index]) && !array.includes(arrPrime[index1])) {
                    array[i][j] = arrPrime[index];//pushing the angram and prime value into the array
                }
            }
        }
    }
}


for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        ref.print(array[i][j] + " ")
    }
    console.log()//printing into the console
}