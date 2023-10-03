const myNums = [1, 2, 'three', 4, 5];

/**
 * Sum array of numbers.
 * @param {Array} numsArray
 * @return {Number} sum of nums in array
 */
const sumArray = function(numsArray) {
    let sum = 0;

    for(const num of numsArray) {
        try{
            if(typeof num === 'number') {
                sum = sum + num;
            } else {
                const dataType = typeof num;
                const errorString = `Error encountered with value: ${dataType} - ${num}`;
                throw new Error(errorString);
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    return sum;
};

const result = sumArray(myNums);
console.log('result:', result);
