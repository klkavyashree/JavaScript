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
        arrPrime.push(index)
    }
}
for(let index=0;index<arrPrime.length;index++)
{
    for(let index1=index+1;index1<arrPrime.length;index1++)
    {
            if(util.isAnagram(arrPrime[index],arrPrime[index1]))
            {
              
                arrAnagram.push(arrPrime[index1]);
                arrAnagram.push(arrPrime[index]);
                
            }
    }
    
}
var stack = new dsUtil.Stack;
for(let index=0;index<arrAnagram.length;index++)
{
    stack.push(arrAnagram[index]);
}
//stack.print();
for(let index=0;index<arrAnagram.length;index++)
{
    var data=stack.pop()
    console.log(data);
}