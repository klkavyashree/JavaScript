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
/*class of linklist will hold the nodes and that nodes have the data user can store the data inthe linklist 
and can add,get,remove those datas  */
class LinkedList {
    constructor() {
        this.first = null;//var first will hold the first node adress
        this.size = 0;//will hold the size of the linklist
    }
    add(data) {//it will add data to the linklist 
        var node = new Node(data);//creating node whenever the user want to add data
        if (this.first == null) {//if the user adding data for 1st time
            this.first = node;
            this.size++;

        }
        else {//if the user adding data for the more than 1 time
            var temp = this.first;
            while (temp.next) {
                temp = temp.next;
            }
            this.size++;//inc size
            temp.next = node;//assighning node adress to the prev node
        }
    }
    search(item) {//to search the element given by user
        if (this.first == null) {
            return false;
        }

        var temp = this.first;
        while (temp) {
            if (temp.data == item) {//checking is user given data is equal to the temp pointing to the node 
                return true;
            }

            temp = temp.next;
        }
        return false;
    }
    addToPos(data) {//adding data to the position where the data can fit
        var temp = this.first;
        var prev = temp;

        if (data < temp.data) {//checking for the 1st data
            this.insertFirst(data);
            return
        }
        var node = new Node(data);//creating new node
        while (temp.next) {
            if (temp.data < data) {
                prev = temp;
                temp = temp.next;
            }
            else {
                prev.next = node
                node.next = temp

                break;
            }
        }
        if (!temp.next) {//if the data is adding at the last
            temp.next = node;
        }
        this.size++;
    }
    remove(data) {

        var temp = this.first;
        if (temp.data == data) {
            this.deleteFirst();//deleting first element
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }
    display() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + " " + temp.data;//concating all the data in the list 
            temp = temp.next;
        }
        return str;
    }
    insertFirst(data) {//inserting data for the first time
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;
            return;
        }
        else {
            node.next = this.first;
            this.first = node;
            this.size++;
            return;
        }
    }
    insert(index, data) {//inserting data into the exaxt position
        if (index == 1) {
            this.insertFirst(data);//adding data at the fisrt
            return;
        }
        if (this.first == null) {
            return;
        }
        var node = new Node(data);//creating new node
        var count = 0, prev = this.first, temp = this.first;
        try {
            while (temp) {//if the addinbdata is not 1st element
                if (count == index - 1) {
                    prev.next = node;
                    node.next = temp;
                    this.size++;
                    return;
                }
                count++;//incrementing the count
                prev = temp;
                temp = temp.next;
            }
            return false;
        }
        catch (exception) {
            console.log(exception + "Enter correct index");
        }

    }
    deleteFirst() {//to delete the first value
        if (this.first == null) {
            console.log("Linked List empty");
            return;
        }
        var n = this.first.data;
        this.first = this.first.next;//pointing fist to the next elment in that list
        this.size--;//decrementing size
        return n;
    }
    show() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + temp.data + " ";
            if (temp.next != null) {
                str = str + "  ";
            }
            temp = temp.next;
        }
        console.log(str);
        return str;



    }
    getData() {
        var temp = this.head;
        var str = "";
        while (temp) {
            str = str + temp.data;
            if (temp.next != null) {
                str = str + " ";
            }
            temp = temp.next;
        }
        return str;
    }
}







module.exports = {
    LinkedList,
    
    /*
       *@purpose : to find day falls on the given user input date format
       *@param   : day-take date from command line of user choice 
       *           month-take month from command line of user choice
       *           year- take year from command line of user choice
       *@description : use formula and calculate the day 
       */
    dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);

        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));

        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;

        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;


    },
    /**
	 * @description	Finds the  prime in the range.
	 * 
	 * @param {number} initial 
	 * @param {number} final 
	 * 
	 * @returns Array of primes in the range.
	 */
    findPrime(initial, final) {
        var flag = 0, k = 0;
        var prime = [];

        for (var index1 = initial; index1 <= final; index1++) {
            for (var index2 = 2; index2 < index1; index2++) {
                if (index1 % index2 == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = index1;
            }
        }
        return prime;
    },
    /**
         * @description	To find the anagram of all the primes in the range.
         * 
         * @param {number} initial 
         * @param {number} final
         * 
         * @returns	Array which are prime and anagram in the range. 
         */
    findAnaPrime(initial, final) {
        var primes = this.findPrime(initial, final);
        var n = primes.length;

        var anaPrimes = [];
        var h = 0;

        for (let index1 = 0; index1 < n - 1; index1++) {
            for (let index2 = index1 + 1; index2 < n - 1; index2++) {
                if (algoutil.anagram(primes[index1], primes[index2])) {
                    anaPrimes[h++] = primes[index1];
                    anaPrimes[h++] = primes[index2];
                }
            }
        }
        return anaPrimes;
    },
    /**
         * @description	To find the factorial sor the given number.
         * 
         * @param {number} user i/p number
         * 
         * @returns	the factorial of the given number. 
         */

    findFactorial(num)  {
        var fact = 1
        for (let i = 1; i <= num; i++) {//loop over till get num value and return th eproduct of all
            fact = fact * i
        }

        return fact;

    }

}