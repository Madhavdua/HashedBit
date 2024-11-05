// 1. Write code to display from 1 to 100 but just even numbers.
// for(let i=2; i<=100; i+=2)console.log(i);

// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

// function calculate(op,a,b){
//     switch(op){
//         case 'add':
//             return a+b;
//         case 'sub':
//             return a-b;
//         case 'mul':
//             return a*b;
//         case 'div':
//             return a/b;
//         default:
//             return "Invalid operation";
//     }
// }
// console.log(calculate('mul',6,3));

/*3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.
*/

// function taxCalc(salary) {
//     if (500000 >= salary)return 0; 
//     else if (1000000 >= salary)return salary*.1; 
//     else if (1500000 >= salary)return salary*.2; 
//     return salary*.3; 
// }
// console.log(taxCalc(2500000));

// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

// function sumOfProd(n1,n2) {
//     let ans=0;
//     while(n1>0 && n2>0){
//         ans+=(n1%10)*(n2%10);
//         n1=Math.floor(n1/10);
//         n2=Math.floor(n2/10);
//     }
//     return ans;
// }

// console.log(sumOfProd(34,6));

