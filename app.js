
// ==================CHAPTER 21-25 START======================

// Task no 1 
// var first = prompt("Enter your first name:");
// var last = prompt("Enter your last name:");
// var fullname = first+" "+last;
// alert("Welcome Mr." + " " +fullname)



// Task no 2 
// var a = prompt("Enter your favourite phone model:", "Samsung");
// document.write("My favourite phone is:" + " " + a + "<br>" +
//                  "Length of string is:" + " " +a.length)



// Task no 3
// var a = "pakistani";
// var copya=a.indexOf("n");
// document.write("String:" + " Pakistani" + 
// "<br>" +"Index of 'n':" + " " +copya);


// Task no 4 
// var a = "Hello World";
// var copya=a.lastIndexOf("l");
// document.write("String:" + " Hello World" + 
// "<br>" +"Last index of 'l':" + " " +copya);


// Task no 5
// var a = "pakistani";
// var copya = a.charAt(3);
// document.write("String:" + " Pakistani" + 
// "<br>" +"Character at index 3:" + " " +copya);


// Task no 6 
// var first = prompt("Enter your first name:");
// var firstname = first.toString();
// var last = prompt("Enter your last name:");
// var lastname = last.toString();
// var fullname = firstname+" "+lastname;
// alert("Welcome Mr." + " " +fullname)


// Task no 7
// var a = "Hyderabad";
// var copya=a.replace("Hyder", "Islam")
// document.write("City:" + " " + a + "<br>" + 
//       "After replacement:" + " " + copya)


// Task no 8
// var message = "“Ali and Sami are best friends.  They play cricket and football together.”"; 
// var copymessage= message.replace(/and/g, "&")             
// document.write(message +"<br>" +"<br>" +copymessage)               



// Task no 9
// var a =  "472";
// document.write("Value:" + " " + a + "<br>" + "Type: string" + "<br>")
// Number();
// document.write("Value:" + " " + a + "<br>" + "Type: number" )


// Task no 10
// var name = "peanuts";
// document.write("User input:" +" "+ name + "<br>");
// var upperca = name.toUpperCase()
// document.write("User input:" +" "+ upperca);


// Task no 11
// var input = "javascript";
// document.write("User input:" +" "+ input + "<br>");
// var firstchar = input.slice(0,1);
// var firstchar = firstchar.toUpperCase();
// var otherchar = input.slice(1);
// var otherchar = otherchar.toLowerCase();
// var input = firstchar + otherchar;
// document.write("Title case:" +" "+ input);



// Task no 12   skip


// Task no 13    skip
// var name = prompt("Enter username");
// for (i=0; i < name.length; i++) {
//     if (name === "!") {
//         alert("Please enter a valid name")
      
//     }
//     else {
//         alert("Welcome"+" "+name)
//         break
//     }
// }




// Task no 14  skip change some in index
// var search = prompt("Welcome to Dipy-Bakery, What do you want to order sir/ma'am?");
// var lower = search.toLowerCase();
// var index = items.indexOf(search);
// for (i = 0; i < items.length; i++) {
//     if (items[i] === lower) {
//         alert(lower+" "+ "is available at index"+" "+ index)
//         break
//     }
//     else {
//      alert("We are sorry!"+" "+lower+" "+"is not available in our bakery.")
//      break
//     }
// }


// Task no 15     skip



// Task no 16    skip
// var str = "University of Karachi";






// Task no 17   
// var title = "Pakistan";
// var str = title.charAt(title.length-1);
// document.write("User input:"+" "+title+"<br>"+
//                 "Last character of input:"+" "+str)



// Task no 18    skip





// ====================CHAPTER 26-30 START==================================================

// Task no 1
// var val = prompt("Enter number:");
// var num = Number(val);
// var round = Math.round(val);
// var floor = Math.floor(val);
// var ceil = Math.ceil(val);
// document.write("number:" + " " + num + "<br>" +
//                "round off value:" + " " + round + "<br>" +
//                "floor value:" + " " + floor + "<br>" +
//                "ceil value:" + " " + ceil  )



// Task no 2
// var value = prompt("Enter a negative number:");
// var num = Number(value);
// var round = Math.round(value);
// var floor = Math.floor(value);
// var ceil = Math.ceil(value);
// document.write("number:" + " " + num + "<br>" +
//                "round off value:" + " " + round + "<br>" +
//                "floor value:" + " " + floor + "<br>" +
//                "ceil value:" + " " + ceil  )



// Task no 3
// var a = prompt("Enter a negative number:");
// var round = Math.abs(a);
// document.write("The absolute value of" + " " + a + " is" + " " + round)



// Task no 4
// alert("Roll the Dice")
// var random = Math.random()*5;
// var round = Math.round(random);
// if (round === 0) {
//     document.write("Random dice value: 1" )
// }
// else if (round === 1) {
//     document.write("Random dice value: 2" )
// }
// else if (round === 2) {
//     document.write("Random dice value: 3" )
// }
// else if (round === 3) {
//     document.write("Random dice value: 4" )
// }
// else if (round === 4) {
//     document.write("Random dice value: 5" )
// }
// else if (round === 5) {
//     document.write("Random dice value: 6" )
// }



// Task no 5
// alert("Press enter to start the toss:");
// var val = Math.random()*2;
// var round = Math.round(val);
// if (round === 0) {
//     document.write("1" + "<br>" + "Random coin value: Heads")
// }
// if (round === 1) {
//     document.write("2" + "<br>" + "Random coin value:Tails")
// }


// Task no 6
// var random = Math.random()*100;
// var round = Math.round(random);
// if (round === 0) {
//     document.write("Random number between 1 and 100:"+" "+1)
// }
// else {
//     document.write("Random number between 1 and 100:"+" "+round)
// }


// Task no 7 skip



// Task no 8
// var input = prompt("Enter a number between 1 and 10:");
// var secret = Math.random()*10;
// var round = Math.round(secret);
// if (input === round) {
//     alert("Congatulation sir, you won!")
// }
// else {
//     alert("Try again")
// }



// ====================CHAPTER 31-34 START==================================================



// Task no 1

// var a = new Date();
// document.write(a)


// Task no 2

// var a = new Date();
// var b= a.toString();
// var c = b.slice(3,7)
// document.write("Current Month" +" "+"  "+ c)


// Task no 3

// var a = new Date();
// var b= a.toString();
// var c= b.slice(0,3)
// document.write("Today is"+" " + c)


// // Task no 4

// var a=new Date();
// var b= a.getDay();
// if (b === 0){
// document.write("Its a Fun Day");
// }
// else if (b === 1){
// document.write("Its a Fun Day");
// }
// else {
//     document.write("Its not a Fun Day")
// }


// // Task no 5

// var a= new Date();
// var b= a.getDay();
// if (b < 16 ){
//     document.write("First fifteen Days of the month")
// }
// else {
//     document.write("last Fifteen Days of the month")
// }


// Task no 6


// var a= new Date();
// document.write("Current Date"+" "+a)
// var mili= a.getTime();
// document.write("</br>"+"Elapsed milliseconds since Jan 1, 1970:"+" "+mili)
// var min = mili/(1000*60*60)
// document.write("</br>"+"Elapsed minutes sindh Jan 1, 1970:"+" "+min)


// Task no 7

// var a= new Date();
// var time= a.getHours();
// if ( time < 13 ){
//     document.write("its AM")
// }
// else { 
//     document.write("its PM")
// }


// Task no 8

// var a= new Date();
// var b= new Date("jun 30, 2020, 00:00:00")
// var date= a.getDate();
// if (date < 30){
// document.write("Later Date :"+" "+b)
// }


// Task no 9

// var rmz = new Date("jun 18, 2015");
// var a= rmz.getTime();
// var td= new Date();
// var b= td.getTime();
// var dif= b - a
// var days= dif/(1000*60*60*24)
// document.write(days+" "+"Days have passed since 1st Ramzan,2015");


// Task 10

// var r= new Date (prompt("Enter a referenc Date exp, jun 18, 2015"));
// var a= r.getTime();
// var td= new Date("jan 01,2015");
// var b= td.getTime();
// var dif= a-b;
// var sec= dif/(1000)
// document.write(sec);


// Task 11

// var date = new Date ();
// document.write("current date:" + " " + date + "<br>");
// date.setHours(11);
// document.write("1 hour ago, it was"+" "+ date)


// // Task 12
// var date= new Date();
// document.write("current date:" + " " + date + "<br>");
// date.setYear(1920);
// document.write("100 years back,"+" "+ date)


// Task no 13
// var age = (prompt("Enter your age", "10"));
// var date = new Date ();
// var year = date.getFullYear();
// var dob = year - age
// document.write("Your age is"+" "+age+"<br>");
// document.write("Your birth year is"+" "+dob)



// Task no 14
// var name = (prompt("Enter your name","Mukesh"));
// var month = (prompt("Enter current month", "February"));
// var numb = (prompt("Enter number of units", "410"));
// var charge = (prompt("Enter charges per unit", "16"));

// document.write("K-Electric Bill"+"<br>"+"<br>"+
//         "Customer Name:" + " " + name + "<br>" + "Month:" + " " + month + "<br>" +
//         "Number of units:" + " " + numb + "<br>" + "Charges per unit:" + " " + charge+"<br>"+"<br>");

// document.write("Net Amount Payable (within Due Date):" + numb*charge + "<br>" +
//    "Late payment charge: 350" + "<br>" + 
//    "Gross Amount Payable (after Due Date):" + ((numb*charge)+(350)))




// ====================================CHAPTER 35-38 START========================================



// Task no 1
// function date(){
//     alert(new Date)
// }
// date()


// Task no 2
// function name(a,b) {
//     alert(a+" "+b)
// }
// name(prompt("enter first name"), prompt("enter last name"))


// Task no 3
// function sum(a,b) {
//     alert(a+b)
// }
// sum(+prompt("Enter first value"), +prompt("Enter second value"))



// Task no 4
// function calc (num1,opr,num2) {
//     if (opr === "+"){
//         return  num1 + num2
//     }
//     else if (opr === "-") {
//         return num1 - num2
//     }
//     else if (opr === "/") {
//         return num1 / num2
//     }
//     else if (opr === "*") {
//         return num1 * num2
//     }
//     else if (opr === "%") {
//         return num1 / num2 * 100 + "%"
//     }    
//     else {
//         alert("Please type correct")
//     }
    
// }
// var result = calc(+prompt("Enter first value"), 
// prompt("Enter operator"),
// +prompt("Enter second value"))
// alert(result)



// Task no 5
// function square (a) {
//     alert(a*a)
// }
// square(3)



// Task no 6 skip






// Task no 7
// function calcu (a,b) {
//     if (a ==1 || a <= 1000 && b == 2 || b <= 100000) {
//         for (i = a; i <= b; i++) {
//             document.write(i + "<br>")
//         }
//     }
// }

// calcu (prompt("Enter starting value"), prompt("Enter ending value"))




// Task no 8 skip



// Task no 9
// function rect (a,b) {
//     alert("Area of rectangle is:"+" "+a*b)
// }
// rect(prompt("Enter width"), prompt("Enter height"))


// Task no 10 skip



// Task no 11 skip



// Task no 12 
// function long(str) {
//   var word = str.split(" ");
//   var length = word.sort(
//       (strA, strB) => {
//           return strB.length - strA.length;
//       }
//   )
//   document.write(length[0])

// }
// long("Web Development Tutorial")




// Task no 13 skip
// function count (a,b) {
//      alert(a.length+" "+"and the letter is"+" "+b)
// }
// count(prompt("Enter a word"), prompt("Enter a letter"))



// Task no 14
// function radius (a) {
//        document.write("Circumference of circle ="+ " "+2*3.142*a)
// }
// radius(prompt("Enter radius to find circumference of circle:"))


// function circle (area) {
//     document.write("<br>" +"Area of circle ="+ " "+3.142*area*area)
// }
// circle(prompt("Enter radius to find area of circle:"))


// ===================================THE END===================================================




