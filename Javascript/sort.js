/* Sort is good for sorting arrays */

let str = 'say,! soMe thing';
function alphabetizeString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

const result = alphabetizeString(str);

console.log(result);