const charMap = require('./charMapBuilder');

const stringA = 'Astronomer';
const stringB = 'moon sTarer';


function anagrams(stringA, stringB) {
    const aCharMap = charMap.charMapBuilder(stringA);
    const bCharMap = charMap.charMapBuilder(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

let result = anagrams(stringA, stringB);

console.log(result);