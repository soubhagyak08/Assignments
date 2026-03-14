//Premetive Data Types//
//1.Number- The data Type used to store number with/without decimals.
let num1: number =10;
let num2: number =12.23187;
console.log(num1);
console.log(num2);

//2.String- The data type used to store collection of chars
let empname: string = "soubhagya";
let location: string = "Bhubaneswar";
let company: string = "tcs";
let email: string = "anc@gmail.com" 

console.log(empname);
console.log(location);
console.log(company);
console.log(email);

//3.boolean- the data types used to store true/false values.
let x:number = 10;
let y:number = 20;
let z:boolean = x > y;
console.log(z);

//4.null value-the data type used to store null values
let n: null = null;
console.log(n);

//5.Undefined value- the data type used to store no values or undefined 
let u: undefined;
console.log(u);

//6.union- Union represents more than one data types assigned to the variable
let empAddress : string | number | boolean = "123 main Road";
console.log(empAddress);
empAddress = 12345;
console.log(empAddress);
empAddress = true;
console.log(empAddress);

//7. any: this data type used to store  any type of value 
let data:  any = 10;
console.log(data);

data = "Hello";
console.log(data);

data = "true";
console.log(data);

//Non Premetive Data Types//
//Object ==> The data type used to store collection of key-value pairs

//interface personInfo {
name: string,
    empId: number,
    visaStatus: boolean,
    address: {
        city: string,
        state: string,
        zip: number
    }
}
    


let person: personinfo = {
    name: "soubhagya",
    empId: 1234,
    visaStatus: true,
    address: {
        city: "hyderabad",
        state: "TS",
        zip: 500081
    }
}
person.name = "Sarath";
person.empId = 5678;
console.log(person);

//2. Array ==> The data type used to store collection of similar/different data types
let fruits: string[] = ["apple", "mango", "grapes"];
let prices: number[] = [100, 150, 180];
let fruitsAndPrices: (string | number)[] = ["apple", 100, "mango", 150, "grapes", 180];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruits[1]);
console.log(fruitsAndPrices[3]);

//3. tuple ==> Table represents storing multiple values, different data types together at one place with a restriction on the order along with the number of values.

//Array  vs Tuple

//Store employee name, employee phone number, and employee visa status within the array. 
let empInfo: (string | number | boolean)[] = [9553220022, "Bharath Reddy", true, "hyderabad"];

//Store employee name, employee phone number, and employee visa status within the tuple. 
let newEmpInfo: [string, number, boolean, string] = ["Bharath Reddy", 9553220022, true, "hyderabad"];

//4. function ==> The data type used to store a block of code that performs a specific task.
function launchBrowserAndLogin(browserName: string): void {  //void means no data / no return type
    console.log(`Launch the ${browserName} Browser`);
    console.log("Enter the URL: https://www.qa.icici.com/");
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
    console.log("Verify the home page is displayed");
}

function logoutAndCloseBrowser(): void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getBalance(): number {
    console.log("Navigate to the account balance page");
    let accountBalance:number = 100000;
    return accountBalance;
}

//5. Map ==> Map represents a collection of key-value pairs with JavaScript class data type. 
let empData:Map<number,string> = new Map();
empData.set(123,"Bharath");
empData.set(124,"Sarath");
empData.set(123,"Hemanth");
empData.set(126,"Sarath");
empData.delete(126);
console.log(empData.get(123));
console.log(empData.size);
console.log(empData);

//6. Set ==> Set represents a collection of unique values.
let empIds:Set<number> = new Set();
empIds.add(1234);
empIds.add(5678);
empIds.add(1234);//duplicate value will not be added to the set
console.log(empIds);

//6. Date ==> Date represents a specific point in time.
let currentDate = new Date();
console.log(currentDate);

//get the current year
console.log(currentDate.getFullYear());

//get the current month
console.log(currentDate.getMonth()+1); //month values are from 0 to 11, so we need to add 1 to get the correct month number

//get the current date
console.log(currentDate.getDate());

// get the current day of the week
console.log(currentDate.getDay()); //day values are from 0 to 6, where 0 represents Sunday and 6 represents Saturday

//get the current hours
console.log(currentDate.getHours());

//get the current minutes
console.log(currentDate.getMinutes());

//get the current seconds
console.log(currentDate.getSeconds());