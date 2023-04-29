//1.	Create an array called ages that contains the 
//following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);
//1a.	Programmatically subtract the value of the first 
//element in the array from the value in the last element 
//of the array 
    //•	Do not use numbers to reference the last element, find
    //it programmatically, 
//•	ages[7] – ages[0] is not allowed!
console.log(ages[0] + ages[ages.length-1]);
//1b.	Add a new age to your array and repeat the step above 
    //to ensure it is dynamic. (works for arrays of different lengths).
ages.push(21)
console.log(ages);
console.log(ages[0] + ages[ages.length-1]);
//1c.	Use a loop to iterate through the array and calculate
    //the average age. 
function average(ages){
    var sum = 0;
    for (var i = 0; i < ages.length; i++){sum += ages[i];} 
    return sum / ages.length;} console.log(average(ages));

//2.	Create an array called names that contains the following 
    //values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 
console.log(names);

//2a.	Use a loop to iterate through the array and calculate the
    //average number of letters per name. 
    let letters = [3, 5, 3, 5, 4, 3]
     function averages(letters){
         var sum = 0;
         for (var i = 0; i < letters.length; i++){sum += letters[i];} 
    return sum / letters.length;} console.log(averages(letters));
//2b.	Use a loop to iterate through the array again and 
    //concatenate all the names together, separated by spaces. 

console.log(names.join(' '));

//3.	How do you access the last element of any array?
console.log("use array.length-1 will give access to the last element of any array");
//4.	How do you access the first element of any array?
console.log("use array[0] to access the first element of any array");
//5.	Create a new array called nameLengths. Write a loop to 
    //iterate over the previously created names array and add the 
    //length of each name to the nameLengths array.
        //For example:
        //let names = ["Kelly", "Sam", "Kate"];//starting with this array
        //let nameLengths = [5, 3, 4];//create this new array
let nameLengths = [letters] + "," + [5, 3, 4];
let namesNew = [names] + "," + ["Kelly", "Sam", "Kate"];
console.log(namesNew); console.log(nameLengths);


//6.	Write a loop to iterate over the nameLengths array and 
    //calculate the sum of all the elements in the array. 

function sumNames(nameLengths){
    var sum = 0;
    for (var i = 0; i < nameLengths.length; i++){sum + nameLengths[i];} 
return sum + nameLengths.length;} console.log(sumNames(nameLengths));

//7.	Write a function that takes two parameters, word and n, 
    //as arguments and returns the word concatenated to itself n 
    //number of times. (i.e. if I pass in ‘Hello’ and 3, I would 
    //expect the function to return ‘HelloHelloHello’).
function newFunc(word, n){let newFunc = "";
for (let i = 0; i < n; i++){newFunc += word;}
return newFunc;}
console.log(newFunc("Hello", 3));



//8.	Write a function that takes two parameters, firstName and 
    //lastName, and returns a full name.  The full name should be 
    //the first and the last name separated by a space.
function fullName(firstName, lastName){
console.log(firstName + " " + lastName);
}
fullName('Jackson', 'Wallace');

//9.	Write a function that takes an array of numbers and returns 
    //true if the sum of all the numbers in the array is greater than 100.
function funcArray(arr){
    var sum = 0; for (var i = 0; i < arr.length; i++){sum += arr[i];}
    return sum > 100;}
    var arr1 = [10, 5, 12, 61]; console.log(funcArray(arr1));
    var arr2 = [70, 5, 12, 41]; console.log(funcArray(arr2));
   

//10.	Write a function that takes an array of numbers and returns 
    //the average of all the elements in the array.
    function avg1(array1) {
        let sum = 0;
        for (let i = 0; i < array1.length; i++) {
          sum += array1[i];} return sum / array1.length;}
    var array1 = [1, 3, 9, 99, 45, 89]; console.log(avg1(array1));


//11.	Write a function that takes two arrays of numbers and returns 
    //true if the average of the elements in the first array is greater 
    //than the average of the elements in the second array.
    function cmpAvg(arr1, arr2) {
        var sum1 = 0, sum2 = 0;
        for (var i = 0; i < arr1.length; i++) {sum1 += arr1[i];}
        for (var j = 0; j < arr2.length; j++) {sum2 += arr2[j];}
        var avg1 = sum1 / arr1.length;
        var avg2 = sum2 / arr2.length;
        return avg1 > avg2;} 
        console.log(cmpAvg([1, 3, 4], [1, 4, 2]));
       

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
    //and a number moneyInPocket, and returns true if it is hot outside and 
    //if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50) {return true;} 
    else 
    {return false;}}
    console.log(willBuyDrink(true, 12.00)); 
console.log(willBuyDrink(false, 12.00)); 

//13.	Create a function of your own that solves a problem.   
    //In comments, write what the function does and why you created it.
 console.log("This 'function' calculates the area of a box by multiplying the width, height, and length together.");
 console.log("I created this function because I am still learning JavaScript experience and stll have so much to learn.");
 function calcBoxArea(length, width, height) {
    return length * width * height;
    }
    console.log(calcBoxArea(23, 40, 25)); 