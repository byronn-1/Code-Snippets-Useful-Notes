/* 
Selection Sort:
    We assume that the first value in the array is the lowest value then we check for a value lower than it in the next index's
*/

function selectionSort() {
    
    for (let i = 0; i < arr.length; i++){
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;    
        }
    }

    return arr;
}