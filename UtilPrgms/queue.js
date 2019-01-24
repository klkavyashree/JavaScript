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

////////////////////////////////queue///////////
/*
        *@purpose : to add the elements into queue and get first inserted element inthe first
        *@param   : user input data
        */
class Queue {
    constructor() {
        this.top = null;
        this.size = 0;
        this.front = null;
    }

    push(data) {//if the queue is  empty the data will add as first node into the stack

        if (this.isEmpty()) {

            var node = new Node(data)
            this.top = node;//adding first dta into the queue
            this.front = node;
            this.size++;
            return;
        }
        var node = new Node(data);
        this.top.next = node;//adding data at the end 
        this.top = node;
        this.size++;
    }
    pop() {//return datas which are in the queue
        if (this.isEmpty()) {
            console.log('no elemets found')
            return;
        }
        var dat = this.front.data
        this.front = this.front.next;//taking ref of next node into first of qeue
        this.size--;
        return dat;//return data to the user
    }
    peek() {
        return this.top.data//return the top value which is the value added inthe last
    }
    print() {//printing the datas inthe queue
        var t = this.front;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }

    isEmpty() {//checking wheather the queue is is full or not
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }
    getSize() {
        return this.size;//return the size value of the queue
    }
}
module.exports = {
    Queue
}