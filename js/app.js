/* ALERT */
// 1.	Write a script to greet your website visitor using JS alert box.
// alert("Welcome  User");

// 2.	Write a script to display following message on your web page:
// alert("Error! Please enter a valid password.");

// 3.	Write a script to display following message on your web page: (Hint : Use line break)
// alert("Welcome to JS Land.. \nHappy Coding!");

// 4.	Write a script to display following messages in sequence:
// alert("Welcome to JS Land..");
// alert("Happy Coding!");

/* VARIABLE FOR STRING */
// 1. Declare a variable called username.
// var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Manal Liaquat";

// 3. Write a script to
//    a. declare a JS variable, titled message
//    b. assign “Hello World” to the variable message
//    c. display the message in alert box 
// var message = "Hello World";
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. Example:
// var name = prompt("Enter your name");
// var age = +prompt("Enter  your age");
// var qlfc = prompt("Enter your qualification");
// var number = +prompt("Enter your number");
// alert("Name : "+name+"\nAge : "+age+"\nQualification : "+qlfc+"\nNumber : +92"+number);

// 5. Write a script to display the following alert using one JS variable:
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// 6. Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself? Store the following into variables:
// number of children, partner’s name, geographic location, and job title.
// var pName = "Bushra"
// var child = 3;
// var geoloc = "Karachi"
// var job = "Software Developer"
// alert("You will be a "+job+" in "+geoloc+", and married to "+pName+" with "+child+" Kids.");


// 7. Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned 
// message in an alert box. (Hint: use string concatenation)
// var str1 = "My email address is ";
// var str2 = prompt("Enter your email address");
// alert(str1+str2);

// 4. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
// var book = "\'A smarter way to learn JavaScript.\'";
// alert("I am trying to learn from the book "+book);

// Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”,
//  “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes”
// var name = prompt("Enter your name");
// var age = +prompt("Enter  your age");
// var qlfc = prompt("Enter your qualification");
// var number = +prompt("Enter your number");
// alert("My name is : "+name+"\nI am : "+age+" years old\nMy last qualification is : "+qlfc+"\nMy cell number : +92"+number);

// 10. Write a script to display this in browser through JS
// document.write("Hurrey! I can write HTML content through JavaScript");

/* VARIABLE FOR NUMBERS */
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age = 20;
// alert("I am "+age+" years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
// var visits = 19;
// alert("You have visited this site "+visits+" times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// var birthYear = 1997;
// document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is Number"); 

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//    a. Visitor’s name
//    b. Product title
//    c. Quantity i.e. how many products a visitor wants to order.
//    Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
// var fullName = prompt("Enter your name","Shahzeb Hussain");
// var prd = prompt("What do you want T-Shirts / Shirts / pents or specify yours?","T-Shirts");
// var qty = prompt("How many item you want?","1");
// document.writeln(fullName+" ordered "+qty+" "+prd+"(s) on daraz.pk");

/* VARIABLE NAMES:	LEGAL	&	ILLEGAL */
// 1. Declare 3 variables in one statement
// var name, age, dob;

// 2. Declare 5 legal & 5 illegal variable names.
// var fullName, age20, ni8t, _fool, $2dollar;
// var 1qwe, .good, /lock, 23_s, &$sd1;  

/* 3. Display this in your browser :
    a. A heading stating “Rules for naming JS variables”
    b. Variable names can only contain ______, ______, ______ and ______.
        For example $my_1stVariable
    c. Variables must begin with a ______, ______ or _____.
        For example $name, _name or name
    d. Variable names are case _________
    e. Variable names should not be JS _________. */
// document.write("\"Rules for naming JS variables\"<br><br>");
// document.writeln("a. Variable names can only contain ______, ______, ______ and ______.<br>For example $my_1stVariable");
// document.writeln("<br><br>b. Variables must begin with a ______, ______ or _____.<br>For example $name, _name or name");
// document.writeln("<br><br>c. Variable names are case _________.");
// document.writeln("<br><br>d. Variable names should not be JS _________.");

/* MATH	EXPRESSIONS */
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a = +prompt("Enter first number to add");
// var b = +prompt("Enter second number to add");
// var c = a + b;
// alert("Sum of "+a+" and "+b+" is "+c);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 
// var n = +prompt("What operation do you want to apply to two numbers?\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Modulus!\n");
// var a = +prompt("Enter value of A");
// var b = +prompt("Enter value of B");
// switch (n) {
//     case 1:
//         alert(a+" + "+b+" = "+(a+b));
//         break;
//     case 2:
//         alert(a+" - "+b+" = "+(a-b));
//         break;
//     case 3:
//         alert(a+" * "+b+" = "+(a*b));
//         break;
//     case 4:
//         alert(a+" / "+b+" = "+(a/b));
//         break;
//     case 5:
//         alert(a+" % "+b+" = "+(a%b));
//         break;
//     default:
//         break;
// }

/* 3. Do the following using JS Mathematic Expressions
    a. Declare a variable.
    b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
    c. Initialize the variable with some number.
    d. Show the value of variable in your browser like “Initial value: 3”.
    e. Increment the variable.
    f. Show the value of variable in your browser like “Value after increment is: 4”.
    g. Add 7 to the variable.
    h. Show the value of variable in your browser like “Value after addition is: 11”.
    i. Decrement the variable.
    j. Show the value of variable in your browser like “Value after decrement is: 10”.
    k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1” */

// var n;
// document.write("Value after variable declaration is : "+n);
// n=3;
// document.write("<br>Initial value is : "+n);
// n++;
// document.write("<br>Value after increment is : "+n);
// n+=7;
// document.write("<br>Value after addition is : "+n);
// n--;
// document.write("<br>Value after decrement is : "+n);
// n%=3;
// document.write("<br>The remainder is : "+n);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
// var cost = 600;
// cost *=5;
// document.write("Total cost to buy 5 tickets to a movie is "+cost+" PKR");

// 5. Write a script to display multiplication table of any number in your browser. 
// var n = +prompt("Enter a number to see its multiplication table","1");
// document.writeln("Multiplication table of "+n+"<br><br>");
// for(var i=1;i<=10; i++)
//     document.writeln(n+" x "+i+" = "+(n*i)+"<br>");

/* The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    a. Store a Celsius temperature into a variable.
    b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    c. Now store a Fahrenheit temperature into a variable.
    d. Convert it to Celsius & output “NNoF is NNoC”.
 */
// document.write("This is Celius & Fahrenheit converter JS app");
// alert("Enter values of celcius and fahrenhiet")
// var c = +prompt("Enter Celcius value",25);
// var f = +prompt("Enter Fahrenheit value",50);
// document.write("<br>C = "+c+"<sup><sup>o</sup></sup>");
// document.write("<br>F = "+f+"<sup><sup>o</sup></sup>");
// document.write("<br><br>"+c+"<sup><sup>o</sup></sup>C = "+((c * (9/5))+32)+"<sup><sup>o</sup></sup>F");
// c = (f-32) * 5/9;
// document.write("<br>"+f+"<sup><sup>o</sup></sup>F = "+c+"<sup><sup>o</sup></sup>C");

/* 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    a. Price of item 1
    b. Price of item 2
    c. Ordered quantity of item 1
    d. Ordered Quantity of item 2
    e. Shipping charges 
    Compute the total cost & show the receipt in your browser. 
*/
// var pItem1 = 560;
// var pItem2 = 200;
// var qItem1 = 2;
// var qItem2 = 5;
// var shCharges = 150;
// var tot = (pItem1 * qItem1) + (pItem2 * qItem2) + shCharges;
// document.write("<h3>Shopping Cart</h3>")
// document.write("<br>Price of Item 1 is "+pItem1);
// document.write("<br>Quantity of Item 1 is "+qItem1);
// document.write("<br>Price of Item 2 is "+pItem2);
// document.write("<br>Quantity of Item 2 is "+qItem2);
// document.write("<br><br>Shipping Charges "+shCharges);
// document.write("<br><br>Total cost of your order is "+tot+" PKR.");

// 8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser.
// var tot = +prompt("Enter total marks");
// var obt = +prompt("Enter obtained marks");
// document.write("<br>Total Marks : "+tot);
// document.write("<br>Obtained Marks : "+obt);
// var prc = (obt/tot) * 100;
// document.write("<br>Percentage is : "+prc.toFixed(2));

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// var $dollar = 10;
// var saudiR = 25;
// var totPKR = ($dollar*104) + (saudiR*28);
// document.write($dollar+"USD + "+saudiR+"SR = "+totPKR+"PKR" );

/* 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
    a. Add 5
    b. Multiply by 10
    c. Divide the result by 2
    Perform all calculations in a single expression. 
*/
// var n = 2;
// n = ((n + 5) * 10) / 2;
// alert(n);

/* 11. The Age Calculator: Forgot how old someone is? Calculate it!
    a. Store the current year in a variable.
    b. Store their birth year in a variable.
    c. Calculate their 2 possible ages based on the stored values. 
    Output them to the screen like so: “They are either NN or NN years old”. 
*/
// var currentYear = 2018;
// var birthYear = 1997;
// document.write("<h3>The Age Calculator</h3><br>");
// document.write("<br>Current Year : "+currentYear);
// document.write("<br>Birth Year : "+birthYear);
// var age = currentYear - birthYear;
// document.write("<br>They are either "+(age-1)+" or "+age+" Years Old");

/* 12. The Geometrizer: Calculate properties (area & circumference) of a circle.
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
    c. Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
*/
// document.write("<h1>Area of Circle</h1><br>");
// var PI = 3.142;
// var r = +prompt("Enter radius of circle");
// var circumference = 2 * PI * r;
// document.write("<br>Its Circumference is : "+circumference);
// var area = PI * (r * r);
// document.write("<br>Area of Circle is : "+area);

// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a = 10;
// document.write("Result:<br>The value of A is: "+a);
// document.write("<br>.......................................<br>");
// document.write("<br>The value of ++A is : "+ (++a));
// document.write("<br>Now the vale of A is : "+a+"<br>");
// document.write("<br>The value of A++ is : "+ (a++));
// document.write("<br>Now the vale of A is : "+a+"<br>");
// document.write("<br>The value of --A is : "+ (--a));
// document.write("<br>Now the vale of A is : "+a+"<br>");
// document.write("<br>The value of A-- is : "+ (a--));
// document.write("<br>Now the vale of A is : "+a+"<br>");

/* 14. What will be the output in variables a, b & result after
execution of the following script:
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
Explain the output at each stage:
    --a;
    --a - --b;
    --a - --b + ++b;
    --a - --b + ++b + b--; 
 */
// var a = 2;
// var b = 1;
// document.write("A = "+a);
// document.write("<br>B = "+b);
// document.write("<br>Ans of (--a - --b + ++b + b--) = "+ (--a - --b + ++b + b--));


/* 15. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
    a. Store your favorite snack into a variable
    b. Store your current age into a variable.
    c. Store a maximum age into a variable.
    d. Store an estimated amount per day (as a number). 
    e. Calculate how many would you eat total for the rest of your life.
    Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
*/
// var snack =  "Jam Delight Biscuits";
// var currentAge = +prompt("Enter your Current Age", 20);
// var estimatedMaxAge = +prompt("Enter your estimated maximum age",85);
// var amountSnackPD = 2; /* amount of snacks per day */
// var price = 10; /* price of 2 biscuits */
// var totBiscuits = ((estimatedMaxAge - currentAge) * 365) * 2 ; /* year to per day conversion */ 
// var totPrice = price * totBiscuits;
// document.write("<h3>The Lifetime Supply Calculator</h3><br>");
// document.write("<br>Favorite Snack : "+snack);
// document.write("<br>Current Age : "+currentAge);
// document.write("<br>Estimated Maximum Age : "+estimatedMaxAge);
// document.write("<br>Amount of Snack per Day : "+amountSnackPD);
// document.write("<br>Price of Two Snacks per Day  : "+price);
// document.write("<br><br>You'll need "+totBiscuits+" "+snack+ " to last you until the ripe old age of "+estimatedMaxAge+" and price of "+totBiscuits+" Biscuits is "+totPrice+" PKR.");

/* USER	INPUT	&	CONDITIONAL	STATEMENTS */
// 1. Write a program that takes input a name from user & greet the user like this:
// var userName = prompt('Enter you name');
// alert("Hi, "+userName  );

/* 2. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, 
    multiplication table of 5 should be displayed by default.
 */
// var n = +prompt("Enter a number to see its multiplication table","5");
// document.writeln("Multiplication table of "+n+"<br><br>");
// for(var i=1;i<=10; i++)
//     document.writeln(n+" x "+i+" = "+(n*i)+"<br>");

// 3. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var city = prompt("Enter you city name");
// if(city === "Karachi" || city === "karachi")
//     alert("Welcome to city of lights");

/* 4. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
    If the user is female, give the message: Good Morning Ma’am. 
*/
// var gender = prompt("Enter your gender");
// if(gender === "male" || gender === "Male")
//     alert("Good Morning Sir!");
// else(gender === "female" || gender === "Female")
//     alert("Good Morning Ma\'am");

/*5. Write a program to take input color of road traffic signal from the user & show the message according to this table:
    a. red = vehicles must stop
    b. yellow = vehicles should get ready to move
    c. green = vehicles can move now
 */
// var inputColor = prompt("Enter a traffic signal color");
// var  colors = ["red", "yellow", "green"];
// for(i=0; i<=2; i++){
//     if(inputColor === colors[0]){
//         alert("vehicles must stop");
//         break;
//     }
//     else if(inputColor === colors[1]){
//         alert("vehicles should get ready to move");
//         break;
//     }
//     else{
//         alert("vehicles can move now");
//         break;
//     }
// }

// 6. Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome”
// var currentAge = +prompt("Enter your age");
// var maxAge = +prompt("Enter your estimated max age");
// if(currentAge <= maxAge)
//     alert("You are Welcome");
// else
//     alert("You\'re no more in thin WORLD!");

// 7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel = +prompt("Enter how much remaining fuel is in your car ");
// if(fuel <= 0.25)
//     alert("Please refill the fuel in your car");
// else
//     alert("Go Go Go -->");

// 8. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true. a becomes "+a);
    
// }
// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true. b becomes "+b);
// }
// else
//     alert("If part is not render because condition is false");
// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is false");
// }
// if (c === 13){
//  alert("condition 2 is false");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is false");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// if (true){
//     alert("True");
//    }
//    if (false){
//     alert("False");
//}
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// 9. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
// document.write("<h3>Marks Sheet</h3>");
// var sum = 0;
// var grade, remarks;
// for(var i=1; i<=3; i++){
//     var obt = +prompt("Enter obtained marks of Subject "+i);
//     sum = sum + obt;
// }
// var tot = +prompt("Enter total marks of three subjects","300");
// var perc = (sum / tot) * 100;

// if(perc >= 80){
//     grade = "A1";
//     remarks = "Excellent";
// }
// else if(perc >= 70){
//     grade = "A";
//     remarks = "Good";
// }
// else if(perc >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<br>Total Marks : "+tot);
// document.write("<br>Marks Obtained : "+sum);
// document.write("<br>Percentage : "+perc.toFixed(2));
// document.write("<br>Grade : "+grade);
// document.write("<br>Remarks : "+remarks);    

/* 10. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users, the following:
    a. Name of item1
    b. Name of item2
    c. Price of item 1
    d. Price of item 2
    e. Ordered quantity of item 1
    f. Ordered Quantity of item 2
    g. Shipping charges
    Compute the total cost. If the total cost is above 2000 PKR , offer them 10% discount & show the receipt in your browser.
*/
// alert("Welcome to ShopShop.pk!\nIf you shop more than 2000 PKR you'll be given 10% discount");
// var item1 = prompt("What do you want to buy as item one?","Shirt");
// var qty1 = +prompt("How many "+item1+" you want?","1");
// var item2 = prompt("What do you want to buy as item two?","USB Flash Drive");
// var qty2 = +prompt("How many "+item2+" you want?","1");
// var price1 = 699;
// var price2 = 999;
// var shipCharges = 250;
// var totCost = (qty1 * price1) + (qty2 * price2) + shipCharges;
// document.write("<h3>Shopping Cart</h3><br>");
// document.write("<br>Price of "+item1+" is "+price1);
// document.write("<br>Quantity of "+item1+" is "+qty1 );
// document.write("<br>Price of "+item2+" is "+price2);
// document.write("<br>Quantity of "+item2+" is "+qty2+"<br>");
// document.write("<br>Shipping Charges : "+shipCharges+"<br>");
// if(totCost >= 2000){
//     document.write("<br>Actual Cost of your order is "+totCost+"PKR");
//     var discount = (totCost * 10) / 100;
//     var totCost = totCost - discount;
//     document.write("<br>Discounted Price is "+totCost+"PKR");    
// }
// else
//     document.write("<br>Total Cost of your order is "+totCost+"PKR");

/* 11. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
    a. If user guesses the same number, show “Bingo! Correct answer”.
    b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
*/
// var n = 3;
// var p = +prompt("Guess a number from 1 to 10");
// if(p === n)
//     alert("Bingo! Correct Answer");
// else if(p === ++n)
//     alert("Closed enough!");
// else
//     alert("Try Again!");

// 12. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3
// var n = +prompt("Enter number to check whether the number is divisible by 3 or not");
// if (n%3 === 0)
//     alert("This number is divisible by 3");
// else
//     alert("This number is not divisible by 3");

// 13. Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie.
// var teamA = prompt("Enter name of team A");
// var scoreA = +prompt("Enter total score of team A");
// var teamB = prompt("Enter name of team B");
// var scoreB = +prompt("Enter total score of team B");
// if(scoreA > scoreB)
//     alert( teamA+" is winner");
// else if(scoreB > scoreA)
//     alert(teamB+" is winner");
// else
//     alert("Its a draw!");

// 14. Take a string, a number and a Boolean in three variables. Write a program that checks the type of variables & responds accordingly.
// var string = "Pakistan";
// var number = 28;
// var boolean = true;
// alert(string);
// alert(number);
// alert(boolean); 

// 15. Write a program that checks whether the given input is an even number or an odd number.
// var n = +prompt("Enter a number");
// if(n&2 === 0)
//     alert("Its a Even Number");
// else
//     alert("Its a Odd Number");

/* 17. Write a program to create a calculator for +,-,*, / & % by using if statements. Take the following input:
    a. First number
    b. Second number
    c. Operation (+, -, *, /, %)
    Compute & show the calculated result to user.
*/
// var a = +prompt("Enter value of a");
// var b = +prompt("Enter value of b");
// var c;
// var opr = +prompt ("Choose operator\n1. add\n2. subtract\n3. multiply\n4. Divide\n5. Modulus");
// if(opr === 1){
//     c = a + b;
//     alert(c);
// }
// else if(opr === 2){
//     c = a-b;
//     alert(c);
// }
// alse if(opr === 3){
//     c = a*b;
//     alert(c);
// }    
// else if(opr === 4){
//     c = a/b;
//     alert(c);
// }
// else if(opr === 5){
//     c = a%b;
//     alert(c);
// }

/* 21. The Translator:
Write a program that:
    a. takes 1 input, a language code (e.g. "es", "de", "en")
    b. tells "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
    (Hint: use translate.google.com to check the translation of hello world in different languages)
*/
// var str = "Hello World";
// var translate = prompt("Enter language to translate "+str+" into\nurdu, french, chinese");
// if(translate === "urdu")
//     alert("Helo Dunya");
// else if(translate === "french")
//     alert("Hola World");
// else if("Nihao");

/* 23. The Pluralizer: Write a program that:
    a. takes 2 inputs, a noun and a number.
    b. tells the number and pluralized form, like "5 cats" or "1 dog". 
*/

// Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)
// var char = +prompt("Enter a number");
// if (char >= 65 || char <= 90)
//     alert("its a uppercase");
// else if(char >= 97 || char <= 122)
//     alert("Its a lowercase");

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// var time = +prompt("Enter time in 24 hour format");
// if(time >= 0000 && time < 1200)
//     alert("Good Morning");
// else if(time>=1200 && time<1700)
//     alert("Good Afternoon");
// else if(time>=1700 && time<2100)
//     alert("Good Evening");
// else if(time>=2100 && time<2359)
//     alert("Good Night");









