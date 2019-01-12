 module.exports={

    
     /*
    *@purpose : To get user input value 
    *@description : we can call this method whenever we want take input from user
                    and can return the string by replacing username.
    */
 StringReplace(UserName)        //function to replace username with user input
{
    if(UserName.length>=3 && isNaN(UserName))        //if the user given input is greater than 3 char controlflow will enter the loop
    {
        var string="";                            //empty string 
        var string1="Hello <<username>>, how are you?";//Given String; 
        string=string+string1.substring(0,6);    //taking substring frm the given string and concating to the empty string
        string = string+UserName;          //concating user input into the older string
        string=string+string1.substring(18,32);    //concating remaining string of given string with the new string
        return string;         //printing to the console
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
FlipCoin(count)
{
    
    var j;            //intialising j value
    var tailp=0;        //intialising and assighning value
    var headp=0;        //intialising and assighning value
    
    for(j=0;j<count;j++)        //looping the function for the count number of times
    {
        var i = Math.random();  //taking random value using random function
        if(i<0.5)               //if random value isless than 0.5 it is tail
        {
           tailp++ 
        }
        else                    //if random value is greater than 0.5 it is head
            headp++             //incrementing the count of head value
    }
    return "percentage of heads "+(headp/count)*100+" percentage of tails "+(tailp/count)*100;
    //printing head and tail percentage
    
},

/*
 * @purpose : to find a user input is leap year or not
 * 
     * @description :declaring function and passing 4 digit number by taking user input
     * @function: check wheather the given input is of 4 digit and check wheather the given year is leap year
     */


IsLeapYear(year)
{
    
        if(year>999 && year<10000 )  //year should be of 4 digit
        {
            if(year%4==0 && (year%100!=0 || year%400==0))    //since leap year comes for every 4 year
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
PowerOf2(n)     //pow2 function
{
    var i; 
    if(i>=0 && i<32) 
    {        //intialising variable i
    for( i=0;i<=n;i++)          //for loop to print power of 2 value till 2^n
    {
        var pow=Math.pow(2,i);      //assigning power value to the variable pow
            console.log("2 power "+i+" is "+pow);       //printing to the console
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
FindHarmonics(n)    //function harmonic
{
    var sum=0;          // intialing variable
    if(n!=0)                //if n value is greater than 0
    {
        for(let i=1;i<=n;i++)
        {
            sum=sum+(1/i);              //adding the values and assigning into the variable
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
CheckPrime(n)           //check prime function
{
    for(let i=2;i<=n/2;i++)
    {
        if(n%i==0)          //if n value is completely divide by integer number it is not prime
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
FindPrimeFactor(num)              //function to generate prime factors
{
    var arr=[];
    var i;
    for(i=2;i<=num;i++)
    {
        while(num%i==0)
        {
            arr.push(i);
            num=num/i;
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

Gambler(stake,goal,play)    //gambler function
     {
         win=0,loss=0;           //initialising values
           for(let i=0;i<play;i++)      
           {
               while(play>0 && stake>0 && goal>stake)   //checking for the valid numbers
               {
                   if(Math.random()>0.5)        //getting random value
                   {
                       stake++;          //incrementing satake value
                       win++;              //incrementing win value
                       play--;              //  decrementing play value
                   }
                   else
                   {
                       stake--;        // decrementing stack value
                       loss++;          //incrementing play value
                       play--;
                   }

               }
           }
           var total=win+loss;
           var winp=(win/total)*100;
           var lossp=(loss/total)*100;
           console.log("win percentage "+winp);         //printing to the console
           console.log("loss percentage "+lossp);       //printing to the console
           console.log("number of of win "+win);        //printing to the console
           
     },

    /*
     * @purpose : count the random number need to provide coupans to the user
     * @parm : user inputs
     * @description : take N distinct Coupon Numbers from the user and count how many random numbers 
     * need to generate distinct coupon number. 
     * @function:count total random number needed to have all distinct numbers.
     */
CoupanCount(n)
    {
        var arr=[];
        var count=0;
        while(arr.length!=n)
        {
        var j=Math.round(Math.random()*n);
        count++;
            if(!arr.includes(j))
            {
                arr.push(j);
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
    Print2DArray(m,n,arr)
    {
        var arr1=[];
        var count=0;
        var dis=require('util');
        for(let i=0;i<m;i++)
        {
            arr1.push([]);
            for(let j=0;j<n;j++)
            {
                var x=arr[count];
                arr1[i][j].push(x);
                count++;
            }

          
        }
        console.log(arr1);        
    },


    /*
     * @purpose : find the distinct 3 values which gives sum equal to zero
     * @parm : user inputs
     * @description : take input array from the user and find which distinct value give sum equal to zero 
     * @function : add 3 different digits which gives sum equal to zero.
     */
    CheckSumEqualToZero(arr)
    {
        var arr1=[];
        var count=0;
        for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
            {
                for(let k=j+1;k<arr.length;k++)
                {
                    if((arr[i]+arr[j]+arr[k])==0)
                    {
                       console.log(arr[i]+" "+arr[j]+" "+arr[k]); 
                        count++;
                    }
                }
            }
        }
        
        console.log(count);
    },

     


}





