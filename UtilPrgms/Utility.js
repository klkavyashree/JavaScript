 module.exports={
     /*
    *@purpose : To get user input value 
    *@description : we can call this method whenever we want take input from user
                    and can return the string by replacing username.
    */
 replace(UserName)        //function to replace username with user input
{
    if(UserName.length>=3 && isNaN(UserName))        //if the user given input is greater than 3 char controlflow will enter the loop
    {
        var string="";                            //empty string 
        var string1="Hello <<username>>, how are you?";//Given String; 
        string=string+string1.substring(0,6);    //taking substring frm the given string and concating to the empty string
        string = string+UserName;          //concating user input into the older string
        string=string+string1.substring(18,32);    //concating remaining string of given string with the new string
        console.log(string);         //printing to the console
    }
    else          //if the length of the string is less than 3 char controlflow will enter else loop
    {
    console.log("name should contain more than 3 characters and first char should be string");  //printing to the console
    
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
flipCoin(count)
{
    
    var j;
    var tailp=0;
    var headp=0;
    
    for(j=0;j<count;j++)
    {
        var i = Math.random();
        if(i<0.5)
        {
           tailp++ 
        }
        else 
            headp++
    }
    console.log("percentage of heads "+(headp/count)*100+" percentage of tails "+(tailp/count)*100)
},




}




