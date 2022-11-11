/* 
Bubble Sort:
    Find the largest element in a list and drag it over to the left hand side
*/

function bubbleSort() {
    
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < (arr.length - i - 1); j++){
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}