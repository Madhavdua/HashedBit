const vowels = ["a", "e", "i", "o", "u"];

/* Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/
// const states = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal",
//   ];

//   const noVowel = states.filter((state) => {
//     const firstLetter = state.charAt(0).toLowerCase();
//     return !vowels.includes(firstLetter);
//   });

//   console.log(noVowel);

// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
// function revStr(str) {
//     let arr=str.split(" ");
//     arr.reverse();
//     return arr.join(" ");
// }
// console.log(revStr("I love my India"));

// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
// let str = 'INDIA';
// let arr=str.split('');
// arr.splice(3,0,'O','N','E','S');
// str=arr.join('');
// console.log(str);

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
// function count(str){
//     let c=0,v=0;
//     let arr=str.split('');
//     arr.forEach(char => {
//         vowels.includes(char)?v++:c++;
//     });
//     return [c,v];
// }
// console.log(count("mhurwdseasxdfvdfgd"));

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
// function correctfn(string, wrong, correct){
//     return string.replace(wrong,correct);
// }
// console.log(correctfn("i am a learnar","learnar","learner"));

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// let inputArr = [1,2,3,9,10,7,5,4,3];
// console.log(inputArr.filter((num,i)=>{return num>5}));

// Q7)
// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
//     ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
//     Use array.map and array.reduce.
// let newArr=students.map((num)=>{
//     num.average=num.scores.reduce((sum,num)=>{
//         return sum+=num;

//     },0)/num.scores.length;
//     delete num.scores;
//     return num;
// })
// console.log(newArr);

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

// function func(num){
//     if(num<10)return num;
//     let sum=0;
//     while(num>0){
//         sum+=num%10;
//         num=Math.floor(num/10);
//     }
//     return func(sum);
// }
// console.log(func(4561));

// Q9) Write a function to count the number of words in a paragraph.
// let paragraph= "any para";
// let arr=paragraph.split(" ");
// console.log(arr.length);//-> number of words in the para

// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
// let str="Hello";
// console.log(str.split('').reverse().join(''));

// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

// let arr = [
//   {
//     student1: {
//       subject1: 44,
//       subject2: 56,
//       subject3: 87,
//       subject4: 97,
//       subject5: 37,
//     },
//   },
//   {
//     student2: {
//       subject1: 44,
//       subject2: 56,
//       subject3: 87,
//       subject4: 97,
//       subject5: 37,
//     },
//   },
//   {
//     student3: {
//       subject1: 44,
//       subject2: 56,
//       subject3: 87,
//       subject4: 97,
//       subject5: 37,
//     },
//   },
// ];
// let newArr=arr.map((obj)=>{
//     let curr=Object.keys(obj)[0];
//     let scoreObj=Object.values(obj)[0];
//     let scoreArr=Object.values(scoreObj);
//     let avg=scoreArr.reduce((acc,curr)=>{return acc+curr},0)/scoreArr.length;
//     return { [curr]:{
//         "average":Math.floor(avg)
//     }}
    
// })
// console.log(newArr);

