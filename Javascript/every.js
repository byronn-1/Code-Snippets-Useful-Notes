/* every() is used to do a boolean check on every element in an array */

// is every value in the array greater than five
function greaterThanFive(arr) {
    return arr.every((element) => {
        return element > 5;
    });
}

// palindrome check => does abcba === abcba.reverse()
function palindrome(str) {
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}