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
     * @param : taking user input as n
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
     * @param : take number from user to find prime or not
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
     * @param :num as user input 
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
     * @param : take stake goal and number of paly as input from user
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
        console.log("number of win " + win);        //printing to the console

    },

    /*
     * @purpose : count the random number need to provide coupans to the user
     * @param : user inputs how many coupan he needs
     * @description : take N distinct Coupon Numbers from the user and count how many random numbers 
     * need to generate distinct coupon number. 
     * @function:count total random number needed to have all distinct numbers.
     */
    coupanCount(n) {
        var arr = [];
        var count = 0;
        while (arr.length != n)//if the array length is not equal to given number then enter the loop
        {
            var randomValue = Math.round(Math.random() * 100000);//math.random will give the random value
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
     * @param : user inputs how many  rows ad colomns of array he need
     * @description : take input from user and print the 2 dimensional array
     * @function : print 2D array
     */
    print2DArray(row, column) {
        var arr1 = [];      //initialising array
        console.log("enter the elements of the array");
        for (let index1 = 0; index1 < row; index1++) {
            arr1.push([]);
            for (let index2 = 0; index2 < column; index2++) {  //looping over till reach column value 
                var read = require('readline-sync');//reading value from user
                arr1[index1][index2] = read.questionInt("enter the elements of the array");//inserting value into the array
            }
        }
        this.printArray(arr1)
    },
    printArray(arr) {

        for (let index = 0; index < arr.length; index++) {
            var array = [];           //initialising array       
            for (let index1 = 0; index1 < arr.length; index1++) {
                p[index1] = arr[index][index1];           //passing value into two dimensional array

            }
            console.log(array);      //printing array
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
                    if ((arr[index] + arr[index1] + arr[index2]) == 0) {  //if the 3 distict elements are zeroenter loop
                        console.log(arr[index] + " " + arr[index1] + " " + arr[index2]);//printing value to console
                        count++;            //increment count
                    }
                }
            }
        }

        console.log(count);//printing into console
    },

    /*
     * @purpose : To find a distance from the origin point
     * @param : user inputs
     * @description : take input from user from where to find the distance 
     * @function : by using pow function calculate the distance.
     */

    findDistance(x, y) {
        var distance = Math.sqrt(x * x + y * y);//by using formula find distance
        return distance;//returning distance
    },

    /*
   * @purpose : To find permutation of the string
   * @param : user inputs string 
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
        var date = new Date();//creating new obj of date 
        var sec = date.getSeconds();//get current second
        return sec;
    },
    /*
    * @purpose : To get time in secounds
    * @parm : start when execution start
    * @parm : start when execution stop
    * @description : create date object and get time in secounds
    */
    elapsedTime: function (start, stop) {
        var elapsed = (stop - start);//calculating elapsed time
        return elapsed;
    },
    /*
   * @purpose : To find elapsed time b/w the 2 timings
   * @param : start when execution start
   * @param : stop when execution stop
   * @description : get start and stop time and print elapsed time b/w those.
   */
    stopWatch(read) {
        var startTime = read.questionInt("press 1 to enter get start time")
        {
            if (startTime === 1) {//if input is 1 enter the loop
                var start = this.getCurrentTime();//assighning returned value ito variable
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
    * @param : user inputs as a b c
    * @description : By taking 3 inputs from user find the 2 roots of the equation can be found using a formula 
       delta = b*b - 4*a*c
       Root 1 of x = (-b + sqrt(delta))/(2*a)
       Root 2 of x = (-b - sqrt(delta))/(2*a)
    * @function : find roots using formula
    */
    findRoot(a, b, c) {
        var delta = ((b * b) - (4 * a * c));
        // delta=Math.abs(delta);
        if (delta > 0) {                //if delta is greater than 0
            var Root1 = ((-b + Math.sqrt(delta)) / (2 * a));//using formula calculate root
            var Root2 = ((-b - Math.sqrt(delta)) / (2 * a));//using formula calculate root
            console.log(Root1);
            console.log(Root2);
        }
        else if (delta == 0) {          //if delta is less than zero
            var Root1 = (-b / (2 * a));
            console.log(Root1);
        }
        else {
            var Root1 = -b / (2 * a);//if delta is less than zero it leads to imaginary valus
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
        string1 = string1 + "";
        string2 = string2 + "";
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




    isPalimdrome(string1) {
        var str = "";
        for (let index = 0; index < string1.length; index++) {
            str = string1.charAt(index) + str;
        }
        if (str == string1) {
            return true;
        }
        return false;
    },

    isPalimdrome2String(num1, num2) {
        var str = "";
        num1 = num1 + "";
        num2 = num2 + "";

        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;
        }
        if (str == num2) {
            return true;
        }
        return false;
    },

    isAnagramPalimdrome() {
        var arr = [];
        for (let index = 0; index < 1000; index++) {
            if (this.checkPrime(index)) {
                arr.push(index);
            }

        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.isAnagram(arr[i], arr[j])) {
                    if (this.isPalimdrome2String(arr[i], arr[j])) {
                        console.log(arr[i], "  ", arr[j]);
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
     * @param : user string inputs 
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

    binarySearch(res, ele) {
        var mid;
        var high = res.length - 1;
        var low = 0;
        while (high >= low) {
            mid = Math.floor(low + (high - low) / 2);   // calculate mid value     
            if (res[mid] == ele) {           // check mid with ele
                return mid;
            }

            if (res[mid] > ele) {      //check mid with ele 

                high = mid - 1;             //assign decremented mid to high 
            }
            else {
                low = mid + 1;
            }
        }
        return -1;          // if not found return -1
    },
    binaryString(res, ele) {
        var mid;
        var high = res.length - 1;
        var low = 0;

        while (low <= high) {
            mid = Math.floor(low + (high - low) / 2);// calculate mid value 
            if (res[mid] == ele) {

                return "yes";
            }
            else if (res[mid] > ele) {          //check mid with ele 
                high = mid - 1;              //assign decremented mid to high 
            }
            else {
                low = mid + 1;              //assign inremented mid to low
            }
        }
        return "no";              // if not found return -1
    },

    //@purpose:to read file 
    //@desc:whenever user wabt to read file we can read file using this function
    callfile(fileName) {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(fileName, 'utf8');//reading file

        var arr = f.split(' ');//splitting words of the file

        return arr;
    },
    /*
     * @purpose : to find assumed value
     * @param : user inputs range and give input yes or no 
     * @description : assume the input that the user thinking of and ask range weather he has that number within that range
     * 
     */

    findNumber(low, high, read) {

        var mid = (low + Math.floor((high - low) / 2));
        console.log(mid);
        if (low < high) {
            var c;
            if (low == high - 1) {
                c = read.question("is the assumed value is " + low + "if yes press y or else n")
                if (c == 'y') {
                    return low;
                }
                if (c == 'n') {

                    return high;
                }

            }

            c = read.question("is the number is in b/w " + low + " " + mid + "if yes press y or else n");
            if (c == 'y') {
                mid = this.findNumber(low, mid, read)
            }
            if (c == 'n') {
                mid = this.findNumber(mid + 1, high, read)
            }

        }
        return mid;
    },

    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes);
    },

    /*
        *@purpose : to find day falls on the given user input date format
        *@param   : day-take date from command line of user choice 
        *           month-take month from command line of user choice
        *           year- take year from command line of user choice
        *@description : use formula and calculate the day 
        */
    dayOfWeek(day, month, year) {
        console.log("ghf")
        var y0 = year - Math.floor((14 - month) / 12);
        console.log("dddhg")
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        console.log("giuuytthg")
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        console.log("ghhghg")
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0);
        return d0;


    },
    /*
      *@purpose: convert the celsius to fahrenheit and vice versa of user choice conversion
      *@param  : number-user choice 
      *@description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
      *and convert according to his wish and prints the results.
      */
    convertTemperature(number, read) {
        //ensuring user value 
        if (number == 1) {
            //ask user to enter the celsius value 
            var num = read.question("Enter your celsius value :");
            //convert into fahrenheit using formaula
            var res = (num * (9 / 5) + 32);
            console.log("The converted value is ", res);
        }
        //ensuring user value
        else if (number == 2) {
            //ask user to enter the fahrenheit value 
            var num1 = read.question("Enter your fahrenheit value :");
            //convert into celsius using formaula
            var res1 = (num1 - 32) * (5 / 9);
            console.log("The converted value is ", res1);
        }
        else {
            console.log("Invalid key ")
        }
    },

    /*
       *@purpose: to find the monthly-payment and prints the results 
       *@param  : principle-principle value from commandline
       *          year-year value from command line
       *          rate- rate value from command line
       *@description : take command line input of principle and year and rate 
       *and find the monthly payment 
       */
    findPayment(principle, year, rate) {
        //formula to calculate the result
        var R = rate / (12 * 100);
        var n = 12 * year;
        var rs = Math.pow((1 + R), (-n));
        var calculation = (principle * R) / (1 - (rs));
        console.log("The monthly payment " + calculation);
    },
    /*
           *@purpose :to find square root for non negative number by using the newton method 
           *@param : num-user input value
           *@description :take value from the user and calculate the square of that number 
           *and prints the result.
           */
    findSqrt(num) {
        if (num > 0) {
            //formula 
            var t = num;
            var epsilon = 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Squre root of non negative number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
    },

    convertToBinary(num)
    {
        var rem;
        var string="";
        while(num>0)
        {
            rem = num%2;
            num=Math.floor(num/2);
            string=rem+string;
            
        }
        while(string.length<8)
        {
            string="0"+string;
        }
       
        return string;


    },

    
    
    /*
    *@purpose:to convert the binary value to the decimal 
    *@param  : res-binary value 
    *@description :convert binary value into the decimal value and return the result
    */
    binaryToDecimal(binValue) {
      var mid=binValue.length/2;
     var sum=0;
     var count=0;
     var count1=0;
     var string="";

       
        for(let index=mid;index<binValue.length;index++)
        {
           string=string+binValue[index]
           console.log("in 2st loop"+string)
        }
        for(let index=0;index<mid;index++)
        {
           string=string+binValue[index]
           console.log("in 1st loop"+string)
        }
        for(let index=0;index<string.length;index++)
        {
                if(string[index]=='1')
                {
                    count1++;
                }
        }
       
        for(index=string.length-1;index>=0;index--)
        {
            console.log(string[index])
            if(string[index]=='1')
            {
             sum=(sum+Math.pow(2,count)*1)
             console.log(sum);
            }
            count++;
        }

            console.log("the decimal val is"+sum)
            if(count1==1)
            {
                console.log("swapped number is even")
            }
            else
            {
                console.log("swapped number is odd")
            }
    },

    











}











