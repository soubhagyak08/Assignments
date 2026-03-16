//Write a program to perform the following tasks:
//1. Count the total number of words in the sentence.
//2. Print the sentence words in reverse order.
//3. Convert the first character of each word to uppercase and print original sentence
 
let sentence = "This is TypeScript program";
sentence = sentence.trim();
let words = sentence.split(" ");
let character= words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let reveresed = words.reverse();
let reverseorder = reveresed.join("");
let convert = character.join("");
console.log("Count the total number of words in the sentenc:", words.length);
console.log(reverseorder);
console.log(convert);

//Write a program to print * in triangle pattern 

let rows = 5; 

for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

//Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
//Find total number of occurrences
//Print count and Indexes of the word
let wordparagrah = "java is programing language and java is simple"
let words1 = wordparagrah.split(" ");
let count = words1.filter(word => word === "java").length;
console.log("Total occurrences of 'java':", count);

