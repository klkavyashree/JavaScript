/************************************************************
 * Execution    :   1. cmd> node addAnagramToStack.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon addAnagramToStack.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   .
 * 
 * @description
 * 
 * @file        :   addAnagramToStack.js
 * @overview    :   Find the prime and anagram numbers within the range and display using stack.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   21-01-2019
 * 
 * **********************************************************/
/**
 * import the Utility class to use the functionalities.
 */
var util = require('../UtilPrgms/Utility')
var pr=require('util');
var read=require('readline-sync')
var dsUtil=require('../UtilPrgms/DSUtility')
var arrPrime=[];
var arrAnagram=[];
for(let index=2;index<1000;index++)
{
    if(util.checkPrime(index))
    {
        arrPrime.push(index)//pushing prime values into the array
    }
}
for(let index=0;index<arrPrime.length;index++)
{
    for(let index1=index+1;index1<arrPrime.length;index1++)
    {
            if(util.isAnagram(arrPrime[index],arrPrime[index1]))
            {
              
                arrAnagram.push(arrPrime[index1]);//pushing prime and angram values into the array
                arrAnagram.push(arrPrime[index]);//pushing prime and angram values into the array
                
            }
    }
    
}
var stack = new dsUtil.Stack;
for(let index=0;index<arrAnagram.length;index++)
{
    stack.push(arrAnagram[index]);//push nagram values into the stack
}

for(let index=0;index<arrAnagram.length;index++)
{
    var data=stack.pop()//poping value from the stack
    console.log(data);
}