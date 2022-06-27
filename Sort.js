// https://bobbyhadz.com/blog/javascript-check-if-letter-in-string-is-uppercase-or-lowercase
// ---------------------------------
// JavaScript Array: Exercise-6

// Solution
// Write a JavaScript program which accept a number as input 
// and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8

const num=1234857620132891;
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));


// ---------------------------------
// JavaScript Array: Exercise-7
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// Solution
// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// var max=arr1[0];
// for (i=0; i<arr1.length; i++)
//     {
//             if (max<arr1[i]) max=arr1[i];
//     }

// for (var i=0;i<arr1.length;i++)
//     {
//             for (var j=0;j<arr1.length;j++)
//             {
//                     if (arr1[j]!="x")
//                     {
//                             if (min>arr1[j]) 
//                             {
//                                     min=arr1[j];
//                                     pos=j;
//                             }
//                     }
//             }
//             arr2[i]=min;
//             arr1[pos]="x";
//             min=max;
//     }
// console.log(arr2);