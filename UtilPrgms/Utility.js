module.exports = {

    /************************************************************
 * 
 * Purpose      :   To have all the functionalities of Functional Programs.
 * 
 * @description
 * 
 * @file        :   Utility.js
 * @overview    :   Export the functionalities to developers for reuseability,
 *                  simplification of coding.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   10-01-2019
 * 
 * **********************************************************/

    /*
      *@purpose : To get user input value 
      *@description : we can call this method whenever we want take input from user
                      and can return the string by replacing username.
      */

    stringReplace(UserName)        //function to replace username with user input
    {
        if (UserName.length >= 3 && isNaN(UserName))        //if the user given input is greater than 3 char controlflow will enter the loop
        {
            var username1 = "";                            //empty string 
            var username2 = "Hello <<username>>, how are you?";//Given String; 
            username1 = username1 + username2.substring(0, 6);    //taking substring frm the given string and concating to the empty string
            username1 = username1 + UserName;          //concating user input into the older string
            username1 = username1 + username2.substring(18, 32);    //concating remaining string of given string with the new string
            return username1;         //printing to the console
        }

    },

    /*
    * @purpose : By using random function get the random number which is considered as flip value of the coin
    * and take user input to flip the coin and print the percentage of head v/s tails
    * 
        * @description : Declaring a function and passing the userinput for fliping the coin
        *                no of times
        * @function: coin flip takes the no of times to flip coin and print the percentage of
        *            head and tail
        */
    flipCoin(count) {

        var j;            //intialising j value
        var tails = 0;        //intialising and assighning value
        var heads = 0;        //intialising and assighning value

        for (j = 0; j < count; j++)        //looping the function for the count number of times
        {
            var i = Math.random();  //taking random value using random function
            if (i < 0.5)               //if random value isless than 0.5 it is tail
            {
                tails++
            }
            else                    //if random value is greater than 0.5 it is head
                heads++             //incrementing the count of head value
        }
        return "percentage of heads " + (heads / count) * 100 + " percentage of tails " + (tails / count) * 100;
        //printing head and tail percentage

    },

    /*
     * @purpose : to find a user input is leap year or not
     * 
         * @description :declaring function and passing 4 digit number by taking user input
         * @function: check wheather the given input is of 4 digit and check wheather the given year is leap year
         */


    isLeapYear(year) {

        if (year > 999 && year < 10000)  //year should be of 4 digit
        {
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))    //since leap year comes for every 4 year
            {
                return true;      //return value
            }
            else
                return false;    //return value 
        }
        else           //if it is not a leap year
        {
            return "year should be of 4 digits"     //return string
        }

    },

    /*
     * @purpose : to find power of 2 and print those values
     * 
         * @description : take input from the user and  print the values till 2^n 
         * @function: using math pow function find the pow of 2 values
         */
    powerOf2(n)     //pow2 function
    {

        if (n >= 0 && n < 32) {        //intialising variable i
            for (let index = 0; index <= n; index++)          //for loop to print power of 2 value till 2^n
            {
                var power = Math.pow(2, index);      //assigning power value to the variable pow
                console.log("2 power " + index + " is " + power);       //printing to the console
            }
        }
        else
            console.log("enter no b/w 0 and 32");
    },


    /*
     * @purpose : to generate Nth harmonics value to the user input 
     * @parm : user input
         * @description : take input from the user as n value and get the harmonics as output
         * @function: by using for loop add the each harmonic value till the user input
         */
    findHarmonics(n)    //function harmonic
    {
        var sum = 0;          // intialing variable
        if (n != 0)                //if n value is greater than 0
        {
            for (let i = 1; i <= n; i++) {
                sum = sum + (1 / i);              //adding the values and assigning into the variable
            }
            return sum;         //printig to the console
        }
        else
            return "n should be greater than 0";          //printing to the console if the value is not equal to zero
    },


    /*
     * @purpose : check weather the given input is prime number
     * @parm : user input
         * @description : take input from the user as n value and check weather the i/p is prime or not
         * @function: checking for all the values which are less than n 
         * whether the given value will completely divide or not
         */
    checkPrime(num)           //check prime function
    {
        for (let index = 2; index <= num / 2; index++) {
            if (num % index == 0)          //if n value is completely divide by integer number it is not prime
            {
                return false;
            }
        }
        return true;                //the given number is prime
    },

    /*
     * @purpose : to generate prime factors of the given value 
     * @parm : user input
         * @description : take input from the user as n value and generate prime factors for given value 
         * @function: generating the prime values for the given input
         */
    findPrimeFactor(num)              //function to generate prime factors
    {
        var arr = [];     //initialising the array
        var i;
        for (i = 2; i <= num; i++) {
            while (num % i == 0) {
                arr.push(i);            //pushing elements into the array
                num = num / i;          //if the number is completely divide by any number then number should be divide by that number
            }
        }
        return arr;
    },


    /*
     * @purpose : to check weather the person playing will win or loose
     * @parm : user inputs
         * @description : take input from the user and play till the person playing win or loss
         * and print the result
         * @function: check and print wheather the person will win or loss
         */

    gambler(stake, goal, play)    //gambler function
    {
        win = 0, loss = 0;           //initialising values
        for (let i = 0; i < play; i++) {
            while (play > 0 && stake > 0 && goal > stake)   //checking for the valid numbers
            {
                if (Math.random() > 0.5)        //getting random value
                {
                    stake++;          //incrementing satake value
                    win++;              //incrementing win value
                    play--;              //  decrementing play value
                }
                else {
                    stake--;        // decrementing stack value
                    loss++;          //incrementing play value
                    play--;
                }

            }
        }
        var total = win + loss;
        var winp = (win / total) * 100;
        var lossp = (loss / total) * 100;
        console.log("win percentage " + winp);         //printing to the console
        console.log("loss percentage " + lossp);       //printing to the console
        console.log("number of of win " + win);        //printing to the console

    },

    /*
     * @purpose : count the random number need to provide coupans to the user
     * @parm : user inputs
     * @description : take N distinct Coupon Numbers from the user and count how many random numbers 
     * need to generate distinct coupon number. 
     * @function:count total random number needed to have all distinct numbers.
     */
    coupanCount(n) {
        var arr = [];
        var count = 0;
        while (arr.length != n)//if the array length is not equal to given number then enter the loop
        {
            var randomValue = Math.round(Math.random() * 10000);//math.random will give the random value
            count++;
            if (!arr.includes(randomValue))//if the array doesnot contain that element then 
            {
                arr.push(randomValue);
            }
        }
        console.log(arr);
        return count;

    },

    /*
     * @purpose : print 2 dimensional array
     * @parm : user inputs
     * @description : take input from user and print the 2 dimensional array
     * @function : print 2D array
     */
    print2DArray(row, column) {
        var arr1 = [];
        console.log("enter the elements of the array");
        for (let index1 = 0; index1 < row; index1++) {
            arr1.push([]);
            for (let index2 = 0; index2 < column; index2++) {
                var read = require('readline-sync');//reading value from user
                arr1[index1][index2] = read.questionInt("enter the elements of the array");//inserting value into the array
            }
        }
        this.printArray(arr1)
    },
    printArray(arr) {

        for (let index = 0; index < arr.length; index++) {
            var array = [];
            for (let index1 = 0; index1 < arr.length; index1++) {
                p[index1] = arr[index][index1];           //

            }
            console.log(array);
        }

    },


    /*
     * @purpose : find the distinct 3 values which gives sum equal to zero
     * @parm : user inputs
     * @description : take input array from the user and find which distinct value give sum equal to zero 
     * @function : add 3 different digits which gives sum equal to zero.
     */
    checkSumEqualToZero(arr) {
        var arr1 = [];
        var count = 0;
        for (let index = 0; index < arr.length; index++) {
            for (let index1 = index + 1; index1 < arr.length; index1++) {
                for (let index2 = index1 + 1; index2 < arr.length; index2++) {
                    if ((arr[index] + arr[index1] + arr[index2]) == 0) {
                        console.log(arr[index] + " " + arr[index1] + " " + arr[index2]);
                        count++;
                    }
                }
            }
        }

        console.log(count);
    },

    /*
     * @purpose : To find a distance from the origin point
     * @parm : user inputs
     * @description : take input from user from where to find the distance 
     * @function : by using pow function calculate the distance.
     */

    findDistance(x, y) {
        var distance = Math.sqrt(x * x + y * y);
        return distance;
    },

    /*
   * @purpose : To find permutation of the string
   * @parm : user input
   * @description : take input from user and find the generate all permutation of the string
   * @function : find all possible permutation without repetation
   */
    findPermutationOfString(String) {
        var arr = [];
        var arr1 = [];

        var arr = String.split("");
        for (let i = 0; i < arr.length; i++) {
            var str = "";
            str = str + arr[i] + String.substring(i + 1, String.length);
            if (str.length != String.length) {
                str = str + String.substring(0, i);
            }
            if (!arr1.includes(str))
                arr1.push(str);
        }

        console.log(arr1);
    },

    /*
         * @purpose : To get time in seconds
         * @description : create object of date and get time in secounds 
         */
    getCurrentTime: function () {
        var date = new Date();
        var sec = date.getSeconds();
        return sec;
    },
    /*
    * @purpose : To get time in secounds
    * @parm : start when execution start
    * @parm : start when execution stop
    * @description : create date object and get time in secounds
    */
    elapsedTime: function (start, stop) {
        var elapsed = (stop - start);
        return elapsed;
    },
    /*
   * @purpose : To find elapsed time b/w the 2 timings
   * @parm : start when execution start
   * @parm : stop when execution stop
   * @description : get start and stop time and print elapsed time b/w those.
   */
    stopWatch(read) {
        var startTime = read.questionInt("press 1 to enter get start time")
        {
            if (startTime === 1) {
                var start = this.getCurrentTime();
                stopTime = read.questionInt("press 0 to stoptime")
                {
                    if (stopTime === 0) {
                        var stop = this.getCurrentTime();
                        var res = this.elapsedTime(start, stop);
                    }
                    console.log("elapsed time is" + res + "sec");
                }
            }
            else {
                console.log("invalid input");
                //stopWatch();
            }
        }
    },


    /*
    * @purpose : To find roots of the quadratic equation
    * @parm : user inputs
    * @description : By taking 3 inputs from user find the 2 roots of the equation can be found using a formula 
       delta = b*b - 4*a*c
       Root 1 of x = (-b + sqrt(delta))/(2*a)
       Root 2 of x = (-b - sqrt(delta))/(2*a)
    * @function : find roots using formula
    */
    findRoot(a, b, c) {
        var delta = ((b * b) - (4 * a * c));
        // delta=Math.abs(delta);
        if (delta > 0) {
            var Root1 = ((-b + Math.sqrt(delta)) / (2 * a));
            var Root2 = ((-b - Math.sqrt(delta)) / (2 * a));
            console.log(Root1);
            console.log(Root2);
        }
        else if (delta == 0) {
            var Root1 = (-b / (2 * a));
            console.log(Root1);
        }
        else {
            var Root1 = -b / (2 * a);
            var Root2 = (Math.sqrt(Math.abs(delta))) / 2 * a;
            console.log("Root1 value is" + Root1 + " i " + Root2);
            console.log("Root2 value is" + Root1 + " -i " + Root2);
        }
    },

    /*
         * @purpose : To find windChill using formula
         * @parm : user inputs t and v as temp and speed of the wind
         * @description : By taking 2 inputs as temp and speed from user to find wind chill using formula
         * @function : find wind chill
         */



    findWindChill(t, v) {
        var w = (37.54 + 0.6251 * t) + (0.4275 * t - 35.75) * Math.pow(v, 0.16);//by using formula finding windchill
        console.log(w);//print to the console

    },

    /*
     * @purpose : To find wheather the given 2 strings is anagram or not
     * @parm : user string inputs 
     * @description : One string is an anagram of another if the second is 
     * simply a rearrangement of the first.check weather the given strings are anagram or not
     * 
     */
    findAnagram(string1, string2) {

        var array1 = string1.toLowerCase().split("").sort();
        // console.log(Array1);
        var array2 = string2.toLowerCase().split("").sort();
        //console.log(Array2);
        for (let index = 0; index < array1.length; index++) {
            if (array1[index] != array2[index]) {
                return false;
            }

        }
        return true;

    },
    isAnagram(string1, string2) {
        string1=string1+"";
        string2=string2+"";
        if (string1.length != string2.length) {
            return false;
        }
        var arr = [];
        for (let index = 0; index < 36; index++) {
            arr[index] = 0;
    
        }
        for (let index = 0; index < string1.length; index++) {
            var ch = string1.charAt(index);
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);
    
                arr[code - 97]++;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]++;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]++;
            }
            ch = string2.charAt(index);
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);
    
                arr[code - 97]--;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]--;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]--;
            }
    
    
        }
        for (let index = 0; index < 36; index++) {
            if (arr[index] != 0) {
                return false;
            }
        }
        return true;
    },
    
   
    
   
    isPalimdrome(string1) 
    {
        var str = "";
        for (let index = 0; index < string1.length; index++) 
        {
            str = string1.charAt(index) + str;
        }
        if (str == string1)
        {
            return true;
        }
        return false;
    },
    
    isPalimdrome2String(num1,num2)
    {
        var str="";
        num1=num1+"";
        num2=num2+"";
    
        for (let i = 0; i < num1.length; i++) 
        {
            str=num1.charAt(i)+str;
        }
        if(str==num2)
        {
            return true;
        }
        return false;
    },
    
    isAnagramPalimdrome() 
    {
        var arr=[];
        for (let index = 0; index < 1000; index++) 
        {
            if (this.checkPrime(index)) 
            {
                arr.push(index);
            }
    
        }
        
        for (let i = 0; i < arr.length; i++) 
        {
            for (let j = i+1; j < arr.length; j++) 
            {
                if(this.isAnagram(arr[i],arr[j]))
                {
                    if(this.isPalimdrome2String(arr[i],arr[j]))
                    {
                        console.log(arr[i],"  ",arr[j]);
                    }
                }
            }
        }
    },
    
    /*
     * @purpose : To sort the string using bubblesort
     * @parm : user string inputs 
     * @description : sort all the strings in ascending order
     * 
     */
    bubblesort(array) {
        for (let index = 0; index < array.length; index++) {
            for (let index1 = index + 1; index1 < array.length; index1++) {
                if (array[index] > array[index1]) {
                    var temp = array[index];
                    array[index] = array[index1];
                    array[index1] = temp;
                }
            }
        }
        return array;
    },
    /*
     * @purpose : To sort the string using insertionsort
     * @parm : user string inputs 
     * @description : sort all the value in ascending order
     * 
     */
    bubblesort(array) {
        for (let index = 0; index < array.length; index++) {
            for (let index1 = index + 1; index1 < array.length; index1++) {
                if (array[index1] < array[index]) {
                    var temp = array[index];
                    array[index] = array[index1];
                    array[index1] = temp;
                }
            }
        }
        return array;
    },
    insertionsort(array) {
        for (let index = 1; index < array.length; index++) {
            var value = array[index];
            let index1 = index - 1;
            while (index1 >= 0 && array[index1] > value) {
                array[index1 + 1] = array[index1];
                index1 = index1 - 1;
            }
            array[index1 + 1] = value;
        }
        return array;
    },







}





