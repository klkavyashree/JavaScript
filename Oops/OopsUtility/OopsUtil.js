/************************************************************
* 
* Purpose      :   To have all the functionalities of oops Programs.
* 
* @description
* 
* @file        :   OopsUtil.js
* @overview    :   Export the functionalities to developers for reuseability,
*                  simplification of coding.
* @author      :   Kavyashree K L <kavya.kavyashree97@gmail.com>
* @version     :   1.0
* @since       :   24-01-2019
* 
* **********************************************************/

/*
  *@purpose : To get user input value 
  *@description : we can call this method whenever we want take input from user
                  and can return the string by replacing username.
  */


var readline = require('readline-sync')
var fileStream = require('fs')


module.exports = {
    /** 
    *@description:to calculate the price of the items in the list 
    *@param:taking parsed object from the main function it includes all the description of the items
    */
    inventory(object) {
        var rice = object.rice;//taking reference of the object
        var wheat = object.wheat;//taking reference of the object
        var pulses = object.pulses;

        for (let key in rice) {//looping over each element that is in the rice
            console.log('\n');
            console.log("The total rate of ", rice[key].name, " is ", rice[key].weight * rice[key].rate);
            //printing total amount 
        }

        for (let key in wheat) {//looping over each element that is in the wheat
            console.log('\n');
            console.log("The total rate of ", wheat[key].name, " is ", wheat[key].weight * wheat[key].rate);
            //printing total amount
        }

        for (let key in pulses) {//looping over each element that is in the pulses
            console.log('\n');
            console.log("the total rate of ", pulses[key].name, " is ", pulses[key].weight * pulses[key].rate);
        } //printing total amount
    },
    /** 
   *@description:to replace the patterns in the file using reg expression 
   *@param:taking user input to replace the required values
   */
    replaceUsingRegex(name, fullName, num, date, fileString) {
        fileString = fileString.replace(/<<name>>/g, name)//replace method will replace the 1st value with 2nd sec value
        fileString = fileString.replace(/<<full name>>/g, fullName)//g reads global it will change all occurances in that file
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, date);//get the date from user
        return fileString
    },
    /** 
    *@description:to calculate the price of the items in the list 
    *@param:taking parsed object from the main function it includes all the description of the items
    */
    calculateStock(object) {
        var stock = object.Stock;//creating object
        var sum = 0;
        for (let key in stock)//looping over each value of stock
        {
            console.log('the stock value of' + stock[key].name)
            console.log(stock[key].share * stock[key].price)
            sum = sum + stock[key].share * stock[key].price//summing all the value of the stock
        }
        console.log("total stock value is " + sum)//printing the total value
    },
    /** 
    *@description:to take all the names in the object into the array  
    *@param:taking parsed object from the user
    */
    getNameOfStock(object) {//it will give all the names of stock in array
        var nameArray = []
        var stock = object.Stock
        for (let key in stock) {//looping over each element
            nameArray.push(stock[key].name)
        }
        return nameArray;//return  array
    },

    /** 
    *@description:to add the item into the object that is already exist 
     *@param:taking parsed object from the main function it includes all the share details
    */
    addData(object) {//to add datas into the array of Stock
        var name = readline.question('enter the stock name')//taking i/p from the user
        while (this.getNameOfStock(object).includes(name)) {//if array doesnot have stock in that name it will add into the arry
            console.log('the name is already exist')
            name = readline.question('enter the different stock name')
        }
        var price = readline.questionInt('enter the stock price')
        var share = readline.questionInt('enter the number of shares')
        object.Stock.push({//adding into stock object
            "name": name,
            "share": price,
            "price": share
        })
        fileStream.writeFileSync('stock.json', JSON.stringify(object));
        return;
    },
    /** 
    *@description:to delete the data from the object that is already exist 
    *@param:taking parsed object from the main function it includes all the shares details
     */
    deleteData(object) {//to delete the stock which is given by user
        console.log('The elements are ' + this.getNameOfStock(object))
        var ans = readline.question('enter the element name u want to search')
        while (!this.getNameOfStock(object).includes(ans)) {//if the array includes the user given name only that time it will remove 
            console.log('enter the validtotalCountame')
            ans = readline.question('enter the element name u want to search')
        }
        for (let index = 0; index < object.Stock.length; index++) {
            if (ans == object.Stock[index].name) {
                object.Stock.splice(index, 1);
            }
        }
        fileStream.writeFileSync('stock.json', JSON.stringify(object));//again udating the file
        console.log('deleted successfully')
        return;
    },
    /** 
    *@description:to display data that is already exist in the json file 
    *@param:taking parsed object from the main function it includes all the shares details
     */
    displayData(object) {//displaying data that includes inthe object
        console.log(object);
        return;
    },
    /** 
    *@description:to display the cards in 2d array by arranging them in random manner
    */
    arrangeIn2D() {
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = [];
        totalCount = suit.length * rank.length;//taking the total count of the cards

        for (let index = 0; index < suit.length; index++) {
            for (let index1 = 0; index1 < rank.length; index1++) {
                deck.push(suit[index] + "" + rank[index1]);//pushing all the elmets into the deck array

            }
        }
        for (let index = 0; index < totalCount; index++) {//methond to take the random numbers to arrange the cards randomly 
            var random = parseInt(Math.random() * totalCount)
            let temp = deck[index]//taking element ref in temprovory variable
            deck[index] = deck[random]
            deck[random] = temp
        }
        var playersArray = [[], [], [], []]//to assigh the values into the 2D array 
        var count = 0
        for (let index = 0; index < 4; index++) {
            for (let index1 = 0; index1 < 9; index1++) {
                playersArray[index][index1] = deck[index1 + count];
            }
            count = count + 9;//incrementing the count value to for 9 to distribute 9 cards to each player
        }
        console.log(playersArray)

    },
    /** 
    *@description:to display the cards in ordered manner by using que and insertion sort
    */
    cardInOrder() {
        var util = require('../../UtilPrgms/queue')
        var utillity = require('../../UtilPrgms/Utility')
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = [];
        var player1 = new util.Queue
        var player2 = new util.Queue
        var player3 = new util.Queue
        var player4 = new util.Queue
        totalCount = suit.length * rank.length;//taking the total count of the cards

        for (let index = 0; index < suit.length; index++) {
            for (let index1 = 0; index1 < rank.length; index1++) {
                deck.push(rank[index1] + "" + suit[index]);//pushing all the elmets into the deck array

            }
        }
        for (let index = 0; index < totalCount; index++) {//methond to take the random numbers to arrange the cards randomly
            var random = parseInt(Math.random() * totalCount)
            var temp = deck[index]//taking element ref in temprovory variable
            deck[index] = deck[random]
            deck[random] = temp
        }
        for (let index = 0; index < deck.length; index++) {
            if (index < 13) {

                player1.push(deck[index])//pushing values into the queue
            }
            else if (index < 26 && index >= 13) {

                player2.push(deck[index])//pushing values into the queue
            }
            else if (index < 39 && index >= 26) {
                player3.push(deck[index])//pushing values into the queue
            }
            else {
                player4.push(deck[index])//pushing values into the queue
            }
        }
        array1 = player1.getData().split(" ")//splitting data that is in the queue
        array2 = player2.getData().split(" ")//splitting data that is in the queue
        array3 = player3.getData().split(" ")//splitting data that is in the queue
        array4 = player4.getData().split(" ")//splitting data that is in the queue

        utillity.insertionsort(array1)//sorting all the values using insertion sort
        utillity.insertionsort(array2)
        utillity.insertionsort(array3)
        utillity.insertionsort(array4)
        console.log("the cards that 1st player is having is" + array1.join())//displaying all the cards that the player have
        console.log("the cards that 2nd player is having is" + array2.join())
        console.log("the cards that 3rd player is having is" + array3.join())
        console.log("the cards that 4th player is having is" + array4.join())
    },

    /** 
    *@description:to take all the names in the object into the array  
    *@param:taking parsed object from the user
    */
    getNameFromBook(object) {//it will give all thetotalCountames of stock in array
        var nameArray = []
        var data = object.detail
        for (let key in data) {//looping over each element
            nameArray.push(data[key].name)
        }
        return nameArray;//returnin array
    },
    /** 
    *@description:to take all the phone number in the object into the array  
    *@param:taking parsed object from the user
    */
    getPhoneNumber(object) {//it will give all thetotalCountames of stock in array
        var numArray = []
        var data = object.detail
        for (let key in data) {//looping over each element
            numArray.push(data[key].phoneNumber)
        }
        return numArray;//returnin array
    },
    /** 
    *@description:to add all the details of the  person into the object and adding it into the json file  
    *@param:taking parsed object from the user
    */
    addToAddressBook(object) {
        var data = object.detail;
        var name = readline.question('enter the name')//taking i/p from the user
        while (!isNaN(name)) {
            console.log("enter valid name with initial letter as string")
            name = readline.question('enter the name')
        }
        var fullName = readline.question('enter the fullname')
        while (!isNaN(name)) {
            console.log("enter valid name with initial letter as string")
            name = readline.question('enter the fullname')
        }
        var city = readline.question('enter the city')
        while (!isNaN(name)) {
            console.log("enter valid name with initial letter as string")
            name = readline.question('enter the city')
        }
        var state = readline.question('enter the state')
        while (!isNaN(name)) {
            console.log("enter valid name with initial letter as string")
            name = readline.question('enter the state')
        }
        var zipCode = readline.questionInt('enter the zipcode')
        while (zipCode < 100000 || zipCode > 1000000) {
            console.log('zipcode should be of 6 digit')
            zipCode = readline.questionInt('enter the zipcode')
        }
        var phoneNumber = readline.questionInt('enter the phone number')
        while (this.getPhoneNumber(object).includes(phoneNumber) || phoneNumber > 9999999999 || phoneNumber < 999999999) {//if array doesnot have stock in that name it will add into the arry
            console.log('the number is already exist or it should be of 10 digits')
            phoneNumber = readline.questionInt('enter the different phone number')
        }
        data.push({//adding into stock object
            "name": name,
            "fullName": fullName,
            "city": city,
            "state": state,
            "zipcode": zipCode,
            "phoneNumber": phoneNumber
        })
        fileStream.writeFileSync('addressBook.json', JSON.stringify(object));
        console.log('added successfully')
        return;
    },
    /** 
   *@description:to remove the details of the  person from the object and updating it into the json file  
   *@param:taking parsed object from the user
   */
    removeFromBook(object) {//to delete the stock which is given by user
        console.log('The elements are ' + this.getNameFromBook(object))
        var ans = readline.question('enter the element name u want to remove')
        while (!this.getNameFromBook(object).includes(ans)) {//if the array includes the user giventotalCountame ony that time it will remove 
            console.log('enter the valid name')
            ans = readline.question('enter the element name u want to search')
        }
        for (let index = 0; index < object.detail.length; index++) {
            if (ans == object.detail[index].name) {
                object.detail.splice(index, 1);
            }
        }
        fileStream.writeFileSync('addressBook.json', JSON.stringify(object));//again udating the file
        console.log('deleted successfully')
        return;

    },
    displayAddressBook(object) {
        console.log(object)
        return;
    },
    /** 
    *@description:to edit the details of the  person from the object and updating it into the json file  
    *@param:taking parsed object from the user
    */
    updateBook(object) {//to edit teh details in that book
        var data = object.detail;
        input = 0;
        for (let key in data) {
            console.log("indexvalue " + key + "  " + data[key].fullName)//getting all the names of that book
        }
        var key = readline.questionInt(' which persons index u want to update ')
        while (input < 8) {
            console.log("press 1 to edit name")
            console.log("press 2 to edit fullname")
            console.log("press 3 to edit city")
            console.log("press 4 to edit state")
            console.log("press 5 to edit zipcode")
            console.log("press 6 to edit phone number")
            console.log("press 7 to exit")
            input = readline.questionInt('enter the your choice')
            switch (input) {
                case 1: var name = readline.question('enter the name')//edditing the name 
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].name = name;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));
                    console.log('updated successfully')
                    break;
                case 2: var fullName = readline.question('enter fullname')//edditing the fullname 
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].fullName = fullName;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));
                    console.log('updated successfully')
                    break;
                case 3: var city = readline.question('enter city')//edditing the city 
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].city = city;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));//writting update information into the file
                    console.log('updated successfully')
                    break;
                case 4: var state = readline.question('enter state')//edditing the state 
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].state = state;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));//writting update information into the file
                    console.log('updated successfully')
                    break;

                case 5: var zipCode = readline.question('enter zipcode')//editting zipcode
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].zipcode = zipCode;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));//writting update information into the file
                    console.log('updated successfully')
                    break;

                case 6: var phoneNumber = readline.question('enter phonenumber')//editting phoneNumber
                    while (this.getPhoneNumber(object).includes(phoneNumber) || phoneNumber > 9999999999 || phoneNumber < 999999999) {//if array doesnot have stock in thattotalCountame it will add into the arry
                        console.log('the name is already exist or it should be of 10 digit')
                        phoneNumber = readline.question('enter the different phone number')
                    }
                    for (let index = 0; index < data.length; index++) {
                        if (index == key) {
                            data[key].phoneNumber = phoneNumber;
                        }
                    }
                    fileStream.writeFileSync('addressBook.json', JSON.stringify(object));//writting update information into the file
                    console.log('updated successfully')
                    break;
            }
            if (input == 7) {
                break;
            }


        }
        return;
    },
    /** 
    *@description:to sort the details of the  person from the object based on name and writtingting it into the json file  
    *@param:taking parsed object from the user
    */
    sortOnName(object) {//sorting based on names
        let data = object.detail
        function sortByName(a, b) {
            if (a.name == b.name)
                return 0
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        }
        data = data.sort(sortByName)
        this.displayAddressBook(object)
    },
    /** 
    *@description:to sort the details of the  person from the object based on zipcode and writting it into the json file  
    *@param:taking parsed object from the user
    */
    sortOnZipCode(object) {//sorting based on zipcode
        let data = object.detail
        function sortByName(a, b) {
            return a.zipcode - b.zipcode//checking for the ordered values
        }
        data = data.sort(sortByName)
        this.displayAddressBook(object)//displaying the values

    },
    /** 
   *@description:to take all the names in the object into the array  
   *@param:taking parsed object from the user
   */
    getNameFromDoctor(object) {//it will give all thetotalCountames of stock in array
        var nameArray = []
        var data = object.Doctor
        for (let key in data) {//looping over each element
            nameArray.push(data[key].name)
        }
        return nameArray;//return array
    },
    /** 
   *@description:to take all the id in the object into the array  
   *@param:taking parsed object from the user
   */
    getIdFromDoctor(object) {//it will give all the names of stock in array
        var nameArray = []
        var data = object.Doctor
        for (let key in data) {//looping over each element
            nameArray.push(data[key].Id)
        }
        return nameArray;//returnin array
    },
    getSpecialisationFromDoctor(object) {//it will give all specialisation in array
        var nameArray = []
        var data = object.Doctor
        for (let key in data) {//looping over each element
            nameArray.push(data[key].specialisation)
        }
        return nameArray;//returnin array
    },
    getNameFromPatient(object) {//it will give all thetotalCountames of stock in array
        var nameArray = []
        var data = object.Patient
        for (let key in data) {//looping over each element
            nameArray.push(data[key].name)
        }
        return nameArray;//returnin array
    },
    getIdFromPatient(object) {//it will give all thetotalCountames of stock in array
        var nameArray = []
        var data = object.Patient
        for (let key in data) {//looping over each element
            nameArray.push(data[key].Id)
        }
        return nameArray;//returnin array
    },
    /** 
    *@description:to take all the phone numbers in the object into the array  
    *@param:taking parsed object from the user
    */
    getPhoneNumberFromPatient(object) {//it will give all specialisation in array
        var nameArray = []
        var data = object.Patient
        for (let key in data) {//looping over each element
            nameArray.push(data[key].phoneNumber)
        }
        return nameArray;//returnin array
    },
    /** 
   *@description:to take all the deatails of thedoctore and patients and maintaining the appointment of the doctors 
   *@param:taking parsed object from the user
   */
    clinicManagement(object) {

        var doctor = object.Doctor;
        var patient = object.Patient
        var count = patient.length;
        console.log('enter 1 to search for doctor')
        console.log('enter 2 to search for patient')
        console.log('enter 3 to take appointment')
        var ans = readline.question('enter the choice')
        if (ans == 1) {
            console.log('enter the 1 to search doctor by his name')
            console.log('enter 2 to search doctor by his id')
            console.log('enter 3 to search doctor by his specialisation')
            var choice = readline.questionInt('enter ur choice')
            if (choice == 1) {
                console.log("name of the doctors are - " + this.getNameFromDoctor(object))
                var name = readline.question('enter the name of the doctor')
                while (!this.getNameFromDoctor(object).includes(name)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid name')
                    name = readline.question('enter the name u want to search')
                }
                for (let key in doctor) {
                    if (doctor[key].name == name) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }
            }
            else if (choice == 2) {
                console.log("id of the doctors are - " + this.getIdFromDoctor(object))
                var Id = readline.question('enter the id of the doctor')
                while (!this.getIdFromDoctor(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid Id')
                    Id = readline.question('enter the Id u want to search')
                }
                for (let key in doctor) {
                    if (doctor[key].Id == Id) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }
            }
            else if (choice == 3) {
                console.log("specialisation of the doctors are - " + this.getSpecialisationFromDoctor(object))
                var specialisation = readline.question('enter the specialisation of the doctor')
                while (!this.getSpecialisationFromDoctor(object).includes(specialisation)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid specialisation')
                    specialisation = readline.question('enter the specialisation u want to search - ')
                }
                for (let key in doctor) {
                    if (doctor[key].specialisation == specialisation) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }

            }
            else {
                console.log('enter valid input')
            }
        }
        /** 
         * @description:if the input is 2 then search for the patients that are in the hospital
        */
        else if (ans == 2) {
            console.log('enter the 1 to search patient by his name')
            console.log('enter 2 to search patient by his id')
            console.log('enter 3 to search patient by his phonenumber')
            var choice = readline.questionInt('enter ur choice')
            if (choice == 1) {
                console.log("name of the doctors are - " + this.getNameFromPatient(object))
                var name = readline.question('enter the name of the doctor')
                while (!this.getNameFromPatient(object).includes(name)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid name')
                    name = readline.question('enter the name u want to search')
                }
                for (let key in patient) {
                    if (patient[key].name == name) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }
            }
            else if (choice == 2) {
                console.log("id of the patient are - " + this.getIdFromPatient(object))
                var Id = readline.question('enter the id of the patient')
                while (!this.getIdFromPatient(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid Id')
                    Id = readline.question('enter the Id u want to search')
                }
                for (let key in patient) {
                    if (patient[key].Id == Id) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }
            }
            else if (choice == 3) {
                console.log("phonenumber of the patients are - " + this.getPhoneNumberFromPatient(object))
                var phoneNumber = readline.question('enter the phoneNumber of the patient')
                while (!this.getPhoneNumberFromPatient(object).includes(phoneNumber)) {//if the array includes the user giventotalCountame ony that time it will remove 
                    console.log('enter the valid phonenum')
                    phoneNumber = readline.question('enter the phonenumber u want to search')
                }
                for (let key in patient) {
                    if (patient[key].phoneNumber == phoneNumber) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }

            }
            else {
                console.log('enter valid input')
            }
        }
        /** 
         * @description:if the input is 3 then take the appointment from the doctor and give timing to the patients
        */
        else if (ans == 3) {
            count++;

            var date = new Date();
            if (count > 5) {
                var rem = Math.floor(count / 5)
                var day = (date.getDate()) + rem;
            }
            else {
                var day = date.getDate()
            }

            var name = readline.question("enter the patientname")
            var age = readline.questionInt("enter the age of the patient")
            var Id = Math.floor(Math.random() * 100000)
            var phoneNumber = readline.questionInt('enter the phoneNumber')
            while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
                console.log("number should be of 10 digit")
                phoneNumber = readline.questionInt('enter different phone number')
            }
            console.log("doctors that are present are")
            console.log(this.getNameFromDoctor(object))
            var appointmentFrom = readline.question('enter the doctor name from u want to take appointment')
            patient.push({
                "name": name,
                "Id": Id,
                "phoneNumber": phoneNumber,
                "age": age,
                "appointmentFrom": appointmentFrom,
                "onTheDayOf": day

            })
            fileStream.writeFileSync('clinicManage.json', JSON.stringify(object))
            console.log("your appointment is confirmed on " + day)

        }
        else
            console.log('enter valid input')

    },
    /** 
    *@description:to take all the symbol in the object into the array  
    *@param:taking parsed object from the user
    */
    getSymbolCompany(object) {
        var symbolArray = []
        var data = object.shares
        for (let key in data) {
            symbolArray.push(data[key].symbol)
        }
        return symbolArray;
    },
    /** 
    *@description:to take all the name of the customer in the object into the array  
    *@param:taking parsed object from the user
    */
    getNameOfCustomer(object) {
        var nameArray = []
        var data = object.userAcc
        for (let key in data) {
            nameArray.push(data[key].name)
        }
        return nameArray;
    },
    getPriceOfCompany(object) {
        var priceArray = []
        var data = object.shares
        for (let key in data) {
            priceArray.push(data[key].price)
        }
        return priceArray;
    },
    getShareOfCompany(object) {
        var shareArray = []
        var data = object.shares
        for (let key in data) {
            shareArray.push(data[key].shares)
        }
        console.log(shareArray)
        return shareArray;
    },
    /** 
    *@description:to take all the shares of the customer in the object into the array  
    *@param:taking parsed object from the user
    */
    getShareOfCustomer(object) {
        var shareArray = []
        var data = object.userAcc
        for (let key in data) {
            shareArray.push(data[key].shares)
        }
        return shareArray;
    },

    addToCompanyStock(companyObject) {
        var date = new Date()
        var symbol = readline.question("enter the symbol")
        while (this.getSymbolCompany(companyObject).includes(symbol)) {
            console.log('this company share is already exist')
            symbol = readline.question("enter the different symbol")
        }
        var shares = readline.questionInt('enter the total number of shares in company')
        var price = readline.questionInt('enter the price for each share')
        var dateTimeOfTransaction = date;
        companyObject.shares.push({
            "symbol": symbol,
            "shares": shares,
            "price": price,
            "dateTimeOfTransaction": dateTimeOfTransaction
        })
        fileStream.writeFileSync('companyStock.json', JSON.stringify(companyObject))
    },
    /** 
    *@description:to add all the details of the  person into the object and adding it into the json file  
    *@param:taking parsed object from the user
    */
    addToCustomerStock(customerObject, companyObject) {
        var name = readline.question('enter the name')
        while (this.getNameOfCustomer(customerObject).includes(name)) {
            console.log("this customer is already exist")
            name = readline.question('enter the name of the customer ')
        }
        var symbol = readline.question('enter the symbol')
        while (!this.getSymbolCompany(companyObject).includes(symbol)) {//validating for symbol
            console.log('this company share is not exist')
            symbol = readline.question("enter the exist symbol")
        }
       
        for (let key in companyObject.shares) {
            if (companyObject.shares[key].symbol == symbol) {
                var share = this.getShareOfCompany(companyObject)[key]
                var shares = readline.questionInt('enter the shares required')
                while(shares>share)
                {
                    console.log('the number of shares left in company are'+share)
                    shares = readline.questionInt('enter the shares required that should be less than left out shares')
                }
                companyObject.shares[key].shares = (share - shares)
            }
        }

        customerObject.userAcc.push({
            "name": name,
            "symbol": symbol,
            "share": shares,
            "price": price,
        })

        fileStream.writeFileSync('customerStock.json', JSON.stringify(customerObject))//writting into the JSONfile
        fileStream.writeFileSync('companyStock.json', JSON.stringify(companyObject))
    },
    /** 
    *@description:to remove all the details of the  person in the object and adding it into the json file  
    *@param:taking parsed object from the user
    */
    removeCompany(companyObject) {
        var symbol = readline.question("enter the symbol of the company")
        for (let key in companyObject.shares) {
            if (this.getSymbolCompany(companyObject)[key] == symbol) {
                companyObject.shares.splice(key, 1)
            }
        }
        fileStream.writeFileSync('companyStock.json', JSON.stringify(companyObject))
    },
    /** 
    *@description:person can sell the shares to the company  
    *@param:taking parsed object from the user
    */
    sellShare(companyObject, customerObject) {
        console.log('customer names that are in the list are ')
        console.log(this.getNameOfCustomer(customerObject))
        var name = readline.question('enter the name of the customer who is selling share')
        while (!this.getNameOfCustomer(customerObject).includes(name)) {
            console.log("enter the name valid customer name that are exist")
            name = readline.question('enter the name of the customer who is selling share')
        }
        console.log('symbols of the company are ' + this.getSymbolCompany(companyObject))
        var symbol = readline.question('enter the symbol of company fr whom u have to sell')
        while (!this.getSymbolCompany(companyObject).includes(symbol)) {
            console.log("enter the name valid symbol that are exist")
            symbol = readline.question('enter the symbol of company fr whom u have to sell')
        }
        var shares = readline.questionInt('enter the number of share u want to sell')
        {
            for (let key in companyObject.shares) {
                if (this.getSymbolCompany(companyObject)[key] == symbol) {
                    var share = this.getShareOfCompany(companyObject)[key]
                    companyObject.shares[key].shares = (share + shares)
                }
            }
            for (let key in customerObject.userAcc) {
                if (this.getNameOfCustomer(customerObject)[key] == name) {
                    var share = this.getShareOfCustomer(customerObject)[key]
                    customerObject.userAcc[key].shares = (share - shares)
                }
            }

        }
        fileStream.writeFileSync('customerStock.json', JSON.stringify(customerObject))
        fileStream.writeFileSync('companyStock.json', JSON.stringify(companyObject))
        this.showDetailsOfCompany(companyObject)
        this.showDetailsOfCustomer(customerObject)
    },
    /** 
    *@description:to show all the details of the company  
    *@param:taking parsed object from the user
    */
    showDetailsOfCompany(companyObject) {
        console.log(companyObject)
    },
    /** 
    *@description:to show all the details of the customer  
    *@param:taking parsed object from the user
    */
    showDetailsOfCustomer(customerObject) {
        console.log(customerObject)
    }

}