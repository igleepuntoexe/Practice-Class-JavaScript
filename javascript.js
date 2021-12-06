/*Welcome to my practice of class. Made by @Igleepuntoexe on GitHub. 
If you have any questions, you can consult me through my gmail: adriiglesias2016@gmail.com 
or you can talk to me through discord, my username is: igle.exe # 8778. Thanks for reading this little snippet <3*/

/*STATEMENT: Exercise 1
Create an object called Account that will have the following attributes: holder and amount (can have
decimals).
• Create its get and set methods.
• You will have two special methods:
or enter: an amount is entered into the account, if the amount entered is negative, it will not be done
any. or withdraw: an amount is withdrawn from the account, if subtracting the current amount to which they pass us is
negative, the account amount becomes 0.
Create an account, enter one amount and withdraw another.*/

console.log("###########################################################")
console.log("###################### Exercise 1 #########################")

//Create the class
class Account{
    //Create the constructor
    constructor(name,amount){
        this._name = name
        this._amount = amount
    }

    //Create get and set methods
    get(){
        return this._name
    }

    get(){
        return this._amount
    }

    set(name){
        this._name = name
    }

    set(amount){
        this._amount = amount
    }

    //Create the methods
    receive(ingress){
        if (ingress > 0){
            this._amount +=  ingress
        }
    }

    withdraw(remove){
        this._amount -= remove
        if (remove < 0){
            this._amount = 0
        }
    }
}

//Now we create the Objects
let account1 = new Account("Igleepuntoexe",110)

//Solve the Exercise
console.log("Hi " + account1._name + " in this moment you  have " + account1._amount + "$")
account1.receive(1000)
console.log("Hi " + account1._name + " now you have " + account1._amount + "$")
account1.withdraw(1000)
console.log("Hi " + account1._name + ". I am the state and I'm going to keep your money, now you have " + account1._amount + "$")


console.log("###########################################################")
console.log("###################### Exercise 2 #########################")
/*STATEMENTS: Exercise 2
• His attributes are: name, age, sex (M male, M female), weight and height.
• By default, all the attributes be default values according to their type (0 numbers, empty string for String, etc.). Gender will be female by default.
• The methods that will be implemented are: 
o calculate BMI (): it will calculate if the person is at their ideal weight (weight in kg / (height ^ 2 in m)), if
this formula returns a value less than 20, the function returns a -1, if it returns a number
between 20 and 25 (inclusive), it means that it is below its ideal weight the function returns a 0
and if it returns a value greater than 25 it means that you are overweight, the function returns a 1. You
o isOlderOfAge (): indicates if it is of legal age, returns a Boolean.
o Set methods of each parameter*/

//Create the class
class Person{
    //Create the constructor
    constructor(name2,age,gender,weight,height){
        this._name = name2
        this._age = age
        this._gender = gender
        this._weight = weight
        this._height = height
    }

    //Create get and set methods
    get(){
        return this._name2
    }

    get(){
        return this._age
    }

    get(){
        return this._gender
    }

    get(){
        return this._weight
    }

    get(){
        return this._height
    }

    set(name2){
        this._name2 = name2
    }

    set(age){
        this._age = age
    }

    set(gender){
        this._gender = gender
    }

    set(weight){
        this._weight = weight
    }

    set(height){
        this._height = height
    }

    //Create the methods
    calculateBMI(weightcalc){
        weightcalc = (this._weight / (Math.pow(this._height,2)))
        if (weightcalc < 20){
            return -1
        }else if(weightcalc >= 20 && 25 >= weightcalc){
            return 0
        }else if(weightcalc > 25){
            return + 1
        }
    }

    isOlderOfAge(agecalc){
        agecalc = this._age
        if (agecalc < 18){
            return false
        }else{
            return true
        }
    }
}

//Solve the Exercise
let person1 = new Person("Igle",18,"Men",70,1.75)
console.log("My BMI is: " + person1.calculateBMI(person1._weight,person1._height))
console.log("Are you 18 years old? " + person1.isOlderOfAge(person1.age))