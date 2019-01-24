/************************************************************
* 
* Purpose      :   To have all the functionalities of datastructure Programs.
* 
* @description
* 
* @file        :   Utility.js
* @overview    :   Export the functionalities to developers for reuseability,
*                  simplification of coding.
* @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
* @version     :   1.0
* @since       :   10-01-2019
* 
* **********************************************************/

/*
  *@purpose : To get user input value 
  *@description : we can call this method whenever we want take input from user
                  and can return the string by replacing username.
  */

/**
 * To create a new node which contains datas and holds the next data in it.
 */
class Node {
    constructor(data) {
        this.data = data;
        /**
         * next holds next data, here as the node created is new it points to null.
         */
        this.next = null;
    }
}
//////////////////////////////////Deque////////////
/*
        *@purpose : to add the elements into dequeue and get data from both the ends and can add the elements from both the ends
        *@param   : user input data
        */
class Deque {
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }

    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    isEmpty() {
        return this.front == -1;
    }

    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeRear() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.rear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.arr.length - 1;
        }
        else {
            item = this.arr[this.rear]
            this.rear = this.rear--;
        }
        return item;
    }
    removeFront() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = this.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }

    PalindromeChecker(str) {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        //  console.log(this.front);
        //console.log(this.rear);
        while (this.front != this.rear && this.front < this.rear) {

            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
}
module.exports = {
    Deque
}