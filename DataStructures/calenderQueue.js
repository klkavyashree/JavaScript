var take = require('util');
var ref=require('readline-sync')
var que=require('../UtilPrgms/DSUtility');
var util = require('../UtilPrgms/Utility');
function calender(){

var dayQue=new que.Queue;
var dateQue=new que.Queue;
var month=ref.questionInt('enter the month');
var year=ref.questionInt('enter the year')
var year=+process.argv[3];

var day = util.dayOfWeek(1, month, year);
console.log(day);
var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

var leap = util.isLeapYear(year);
if (leap = true) {
    dates[2] = 29;
}

for (var i = 0; i < week.length; i++) {
    dayQue.push(week[i]);
}
for (var i = 1; i <= dates[month]; i++) {
 dateQue.push(i);
}


for (var i = 0; i < week.length; i++) {
    take.print(dayQue.pop() + "  ");
}
console.log();
for (var i = 0; i < (day * 5); i++) {
    take.print(" ");
}

for (var i = 1; i <= dates[month]; i++) {
    if (i < 10) {
        take.print(" " + dateQue.pop() + "   ");
        
    }

    if (i > 9) {
        take.print("" + i + "   ")
    }
    if ((i + day) % 7 == 0) {
        console.log();
    }

}

console.log("\n\n");
}
calender();