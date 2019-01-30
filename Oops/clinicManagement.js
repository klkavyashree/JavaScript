/************************************************************
 * Execution    :   1. cmd> node clinicManagement.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon clinicManagement.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   to add and edit all the details of the patients and doctors into the file and giving appontment to the patient.
 * 
 * @description
 * 
 * @file        :   clinicManagement.js
 * @overview    :  to add and edit all the details of the patients and doctors.
 * @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
 * @version     :   1.0
 * @since       :   27-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/
const read = require('readline-sync')
const util = require('./OopsUtility/OopsUtil')
const fileStream = require('fs')
var acess = fileStream.readFileSync('clinicManage.json')
object = JSON.parse(acess)
util.clinicManagement(object)
