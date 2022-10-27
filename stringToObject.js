/* Remember in this instance we will produce an object that shows that the most frequent value is '' */

const string = "Alright Mate Hows it Going!";
const chars = {};

function stringToObject(str, obj) {
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
    return chars;
}

console.log(stringToObject(string, chars)); 

/* 
REMEMBER: the regex for not a number || lowercase character || uppercase character is:
        /[^\w]/g
        replace with nothing: str.replace(/[^\w]/g, '')
        SEE: charMapBuilder.js
*/

