function charMapBuilder(str) {
    const charMap = {};

    for (let char of str.replace()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap;
}


module.exports = {charMapBuilder};