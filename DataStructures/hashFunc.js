var read=require('readline-sync')
var dsUtil=require('../UtilPrgms/DSUtility')
var util=require('../UtilPrgms/Utility');
var ref=require('util');
var hashArray=[["0-->"],['1-->'],['2-->'],["3-->"],["4-->"],["5-->"],["6-->"],["7-->"],["8-->"],["9-->"],["10-->"]];
var fileName=read.question('enter the filename');
var num=read.question('enter the number u want to search');
var arr1=new Array(10);

data=util.callfile(fileName);

for(let index=0;index<data.length;index++)
{
    var col=0
    var d=parseInt(data[index]);
   
    rem=d%11;

   while(hashArray[rem][col]!=undefined)
    {
        col++
    }
    arr1[rem]=new dsUtil.LinkedList;
    arr1[rem]=data[index];
     hashArray[rem][col]=data[index];
}
console.log(hashArray)
for(let index=0;index<=10;index++)
{
    arr1[index]=new dsUtil.LinkedList;
}

for(let index=0;index<hashArray.length;index++)
{
    for(let index1=0;index1<hashArray.length;index1++)
    {
        arr1[index]=hashArray[index][index1];
    }
}
var rema=num%11;
if(arr1[rema].search(num))
{
    arr1[rema].pop();
}
else
{
    arr1[rema].push(num);
}
console.log(arr1)