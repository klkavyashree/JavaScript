/************************************************************
 * Execution    :   1. cmd> node Stack.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon Stack.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   push and pull the element from the stack data structure
 * .
 * 
 * @description
 * 
 * @file        :   Stack.js
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
var utilDS = require('../UtilPrgms/DSUtility');
function Stack()
{
    var stack= new utilDS.Stack;
    // var answer=Utility.callFile();
    // var str=answer[0];
    var str=read.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   
   for(i=0;i<str.length;i++)
   { ch=str.charAt(i);
    
       if(ch=='(' || ch=='[' || ch=='{')
       {
       stack.push(ch);

       }
       else{
           switch (ch)
           {
               case ')' : if(stack.pop()!='('){
                                return false;
                            }
                            break;
               case ']' : if(stack.pop()!='[')
               {
                   return false;
               }
               break;
               case '}' : if(stack.pop()!='{')
               {
                   return false;
               }break;
           }
       }


   }
   if(stack.isEmpty){
   return true;
   }
   return false;
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
}

