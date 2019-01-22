var read=require('readline-sync')
var dsUtil=require('../UtilPrgms/DSUtility')
var util=require('../UtilPrgms/Utility');
var ref=require('util');
var hashArray=[[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]];
var fileName=read.question('enter the filename');

data=util.callfile(fileName);
var col=0
for(let index=0;index<data.length;index++)
{
    var d=parseInt(data[index]);
    console.log(d)
    rem=d%11;
    
    hashArray[rem][col]=data;
    col++
}
for(let i=0;i<hashArray.length;i++)
{
    for(let j=0;j<hashArray[i].length;j++)
    {
        ref.print(hashArray[i][j]+" ")
    }
    console.log();
}
