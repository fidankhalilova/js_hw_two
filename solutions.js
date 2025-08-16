// 1. Sətirdə Sözlərin Sayını Tapmaq
// javascript// Verilmiş sətirdə neçə söz olduğunu tapan funksiya yazın

// function countWords(str) {
//     var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             count++;
//         }
//     }
//     return count + 1;
// }

// // // Test
// console.log(countWords("Salam dünya necəsən")); // 3



// 2. Faktorial Hesablamaqjavascript// Verilmiş ədədin faktorialını hesablayan funksiya yazın

// function factorial(n) {
//     var count = 1;
//     for (let i = 1; i <= n; i++) {
//         count *= i;
//     }
//     return count;
// }
// console.log(factorial(5)); // 120



// 3.
// 3.2 Anagram Yoxlamaq
// javascript// İki sətirin anagram olub-olmadığını yoxlayan funksiya yazın

// function areAnagrams(str1, str2) {
//     var strOne = str1.split('').sort().join('');
//     var strTwo = str2.split('').sort().join('');
//     var flag = true;
//     if (strOne === strTwo) {
//         flag = true;
//     }
//     else {
//         flag = false;
//     }
//     return flag;
// }

// // // Test
// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false



// 4. Massivdə Dublikatları Silmək
// javascript// Massivdən bütün dublikatları silən funksiya yazın (Set istifadə etmədən)
// function removeDuplicates(arr) {
//     set1 = new Set(arr);
//     return set1;
// }

// // // Test
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]