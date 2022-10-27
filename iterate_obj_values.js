const characterObject = { A: 1, l: 1, r: 1, i: 3, g: 2, h: 1, t: 3, M: 1, a: 1, e: 1, H: 1, o: 2, w: 1, s: 1, G: 1, n: 1 }

function iterateObjValues(charMap) {
    let max = 0;
    let maxChar = '';

    for (let char in charMap) {
        if (charMap[char] > max) {
            maxChar = char
        }
    }

    return maxChar;
}

