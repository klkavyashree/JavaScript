/************************************************************
 * Execution    :   1. cmd> node windChill.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon windChill.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To calculate the Wind Chill.
 * 
 * @description
 * 
 * @file        :   windChill.js
 * @overview    :   To calculate the Wind Chill by considering temperature and wind speed.
 * @author      :   Kavyashree K L <kavyashreekl@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var util=require('../UtilPrgms/Utility');

var read=require('readline-sync');
var temp=read.questionInt("enter the temperature value to find wind chill");

        while(temp>50)
        {
        console.log("temp should be less than 50");
        temp=read.questionInt("enter the temperature value to find wind chill");
        }       

var speed=read.questionInt("enter the speed value to find wind chill");
    while(speed<3 || speed>120)
        {
        console.log( "speed should be less than 120 and greater than 3");
        speed=read.questionInt("enter the speed value to find wind chill");
        }
util.findWindChill(temp,speed);