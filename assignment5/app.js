// // Chapter One

// // Question number 1
// // Write a script to greet your website visitor using JS alert
// // box.

// alert("Assalam u Allaikum");

// // Question number 2
// // 2. Write a script to display following message on your web
// // page:

// alert("Error! Please Enter a Valid Password");

// // Question number 3
// alert("Welcome to Js Land... \n Happy Coding!");

// // Question number 3
// alert("Welcome to Js Land...");
// alert(" Happy Coding!",);

// // Chapter #2
// // Question number 1
// var username;

// // Question number 2
// var myName="Ubaid Nawab";

// // Question number 3
// // part a
//  var message;
//  // Question number 3
// // part b
// message="Hello World";

// // Question number 4
// var StudentName = "Ubaid Nawab";
// var StudentAge = "15 years Old";
// var StudentProfession = "Certified Mobile App Developer";
// alert(StudentName);
// alert(StudentAge);
// alert(StudentProfession);

// // Question number 5
// var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);

// // Question number 6
// var email = "ubaidsheikh.91@gmail.com";
// alert("my email address is "+email);
// alert(`my email address is ${email}`);

// // Question number 7

// var book ="A smarter way to learn JavaScript";
// alert("i am trying to learn from the book "+book);

// // Question number 8
// document.write("yah! I can write HTML content through JavaScript");

// // Question number 9
// alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ");

// // Chapter #3
// // Question number 1 
// var age = 15;
// alert(`i am ${age} years Old`);

// // Question number 2
// var n = 14;
// alert(`You have visited this site ${n} times`);

// // Question number 3
// var birthYear = 1996;
// document.write(`<br> My birth year is ${birthYear} <br> Data type of my ddeclared variable is number`);

// // Question number 4
// var vName = "ubaid";
// var pTitle = "T-Shirt(s)";
// var nProduct =5;
// document.write(`<br> <b>${vName}</b> ordered <b>${nProduct, pTitle}</b> on XYZ clothing Store`);

// // Chapter #4
// // Question number 1


// // Chapter #4
// // Question number 1
// document.write(`<br> <br> Result:`);
// var a = 10;
// document.write(`<br> <br> The value of a is ${a}`);
// document.write("<br> <br> .............................");
// a = ++a;
// document.write(`<br> <br> The value of ++a is ${a}`);

// document.write(`<br> <br> Now the value of a is : ${a}`);

// a = a++;
// document.write(`<br> <br> The value of a++ is ${a}`);
// a = ++a;
// document.write(`<br> <br> Now the value of a is : ${a}`);

// a = --a;
// document.write(`<br> <br> The value of --a is ${a}`);

// document.write(`<br> <br> Now the value of a is : ${a}`);


// document.write(`<br> <br> The value of a-- is ${a}`);
// a = --a;
// document.write(`<br> <br> Now the value of a is : ${a}`);


// // Question number 2

// document.write("<br> <br> step#1 --a = 1");
// document.write("<br> <br> step#2 --a - --b = 1");
// document.write("<br> <br> step#3 --a - --b + ++b = 2");
// document.write("<br> <br> step#4 --a - --b + ++b + b = 3");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<br> result of an  expression is = "+result);


// // Question number 3

// var userName = prompt("please Enter your name");
// alert("Greeting "+userName);

// // Question number 4 and 5

// var tableNumber = prompt("Enter a Table number that you want to know a table");
// var i;
// for(i=0; i<=10; i++){
//     if(tableNumber)
//     {
//     document.write(`<br> <br> ${tableNumber} x ${i} = ${tableNumber*i}`);
//     }
//     else{
//     document.write(`<br> <br> 5 x ${i} = ${5*i}`);

//     }
// }

// Question number 6

// var arrSubName = [];
// arrSubName[0] = prompt("Enter subject 1 name"); 
// arrSubName[1] = prompt("Enter subject 2 name"); 
// arrSubName[2] = prompt("Enter subject 3 name");
// for(var i = 0; i < arrSubName.length; i++)
// {
//     document.write("\n \n \t "+arrSubName[i]);
// } 
// var arrSubMarks=[];
//     arrSubMarks[0] = Number( prompt("Enter subject 1 Marks"));
//     arrSubMarks[1] = Number( prompt("Enter subject 2 Marks"));
//     arrSubMarks[2] = Number( prompt("Enter subject 3 Marks"));
//     var sub1Percentage = arrSubMarks[0] * 100 / 100;
//     var sub2Percentage = arrSubMarks[1] * 100 / 100;
//     var sub3Percentage = arrSubMarks[2] * 100 / 100;
    
//     for(var i1 = 0; i1 < arrSubMarks.length; i1++)
//     {
//         document.write("\n \n \t "+arrSubMarks[i1]);
//     } 
//     var obtnMarks = arrSubMarks[0] + arrSubMarks[1] + arrSubMarks[2];
//     var percentage = obtnMarks * 100 / 300;
//     document.write( obtnMarks ,"     "+ percentage+"%");

// var sub1 = prompt("Enter subject 1 name");
// var sub2 = prompt("Enter subject 2 name");
// var sub3 = prompt("Enter subject 3 name");
// var totalMarks = 100;
// var obtainedMarks = 0;
// var percentage=0;
// var sub1Marks = Number( prompt("Enter subject 1 Marks"));
// var sub2Marks = Number( prompt("Enter subject 2 Marks"));
// var sub3Marks = Number( prompt("Enter subject 3 Marks"));

// obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
// var percentage1 = sub1Marks * 100 / 100;
// var percentage2 = sub2Marks * 100 / 100;
// var percentage3 = sub3Marks * 100 / 100;

// percentage = obtainedMarks * 100 / 300;

// var table = document.getElementById("table");

// table.appendChild(`
// <tr>
// <th> Subject </th>
// <th> Total Marks </th>
// <th> Obtained Marks </th>
// <th> Percentage </th>
// </tr>
// <tr>
// <td>${sub1}</td>
// <td>100</td>
// <td>${sub1Marks}</td>
// <td>${percentage1}</td>
// </tr>
// <tr>
// <td>${sub2}</td>
// <td>100</td>
// <td>${sub2Marks}</td>
// <td>${percentage2}</td>
// </tr>
// <tr>
// <td>${sub3}</td>
// <td>100</td>
// <td>${sub3Marks}</td>
// <td>${percentage3}</td>
// </tr>
// `)

// chapter 5 

// Question number 1
// part a 
var n1 = 3;
var n2 = 5;
var sum = n1+n2;
document.write("sum of 3 and 5 is = "+sum);

// Question number 2
// part b  
// subtraction
var sub = n1-n2;
document.write( "<br> Subtraction of 3 and 5 is =" + sub);


// Question number 2
// part c 
// Multiplication
var mul = n1*n2;
document.write( "<br> Multiplication of 3 and 5 is =" + mul);

// Question number 2
// part d 
// Division
var div = n1/n2;
document.write( "<br> Division of 3 and 5 is =" + div);

// Question number 2
// part e  
// Modulus
var mod = n1%n2;
document.write( "<br> Modulus of 3 and 5 is =" + mod);

// Question number 3

var ab;
document.write(" <br>\"Value after variable declaration is:"+ab+"\"");

ab = 5;
document.write(" <br>\"“Initial value:"+ab+"\"");

ab++;
document.write(" <br>\"Value after increment is:"+ab+"\"");

ab = 7+ab;
document.write(" <br>\"Value after addition is:"+ab+"\"");
ab--;
document.write(" <br>\"Value after decrement is:"+ab+"\"");

ab =  Math.floor(3/ab);
document.write(" <br>\"The remainder is:"+ab+"\"");

// Question number 4

var perTicket = 600;
perTicket = perTicket *5;

document.write("<br> Total cost to buy 5 Tickets to a Moive is :"+perTicket+"PKR");

var i;
for(i=0; i<=10; i++){
 
    document.write(`<br> <br> 5 x ${i} = ${5*i}`);
}



var c_Temperature = 25;
var f_Temperature ;

f_Temperature = (c_Temperature * 9 / 5)+32;
document.write("<br> <br>\"" +c_Temperature +"C is"+f_Temperature+"oF\"");
f_Temperature = 70;
c_Temperature = (f_Temperature - 32) *5/9;
document.write("<br> <br>\"" +f_Temperature +"F is"+c_Temperature+"oC\"");

// Question number 5

var itm1 = 300;
document.write("<br> price of item 1 is: "+itm1);
var itm1Q = 3;
document.write("<br> Quantity of item 1 is: "+itm1Q);
var itm2 = 500;
document.write("<br> price of item 2 is: "+itm2);
var itm2Q = 7;
document.write("<br> Quantity of item 2 is: "+itm2Q);
var sCost= 100;
document.write("<br> Shipping Cost is: "+sCost);
itm1 = itm1 * itm1Q;
itm2 = itm2 * itm2Q;
var total = itm1 + itm2 +sCost;
document.write("<br> Total Cost is: "+total);
