

function chunkSolutionOne(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

function chunkSolutionTwo(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array(index, index + slice));
        index += size;
    }
    return chunked;
}

/* Remember: array.slice(A, B)
Take a copy of everything inside array from A
Up to but NOT INCLUDING B
*/