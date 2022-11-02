
/* REMEMBER: If you need to process every third or forth char you need to revert back to for loop */
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}