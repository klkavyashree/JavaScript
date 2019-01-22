var util = require('../UtilPrgms/DSUtility');
var read = require('readline-sync');

function Queue() {
    var que = new util.Queue;
    var totalbankcash = 100000;
    flag = true;
    var ask = read.question("Enter the total number of people ");
    
       if(ask>0){
        for (var i = 1; i <= ask; i++) {
            var ans = read.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
            if (ans == 1) {
                var amount = read.question("Enter total amount do you want to Deposit ");
                que.push(Number(amount));
                flag= true;
               
            }
            else if (ans == 2) {
                var amount = read.question("Enter total amount do you want to Withdraw  ");
                que.push(Number(-amount));
                
                flag= true;
               
            }
            else {
                console.log("Make sure that, you entered the correct key ");
                flag= false;
                return;
            }
        }
        }
        else{
            console.log("Invalid input ");
            return;
        }
    
    
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= ask; i++) {
            addition = (addition + que.pop());
        }
        console.log(addition);
        var totaltransaction = totalbankcash + addition;
        console.log("At the end of the day Total amount left in the bank ", totaltransaction);
        if (totaltransaction < totalbankcash) {
            console.log("Bank cash is not Maintained");
        }
        else {
            console.log("Bank cash is maintained");
        }
    }
}
Queue();