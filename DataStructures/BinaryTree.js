var dsUtil=require('../UtilPrgms/DSUtility')
var read=require('readline-sync')
var num=read.questionInt("enter the number")
var fact=dsUtil.findFactorial(2*num)
var fact1=dsUtil.findFactorial(num+1)
var fact2=dsUtil.findFactorial(num)
var res=fact/(fact1*fact2);
console.log(res)
