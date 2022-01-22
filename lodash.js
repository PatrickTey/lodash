const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let upperClampedValue = Math.min(number, upper);
        if (number < lowerClampedValue) {
            return Math.max(number, lowerClampedValue);
        }
        else if (number > upperClampedValue) {
            return Math.min(number, upperClampedValue)
        }
        else if (upperClampedValue == lowerClampedValue) {
            return upperClampedValue;
        }
    },
    inRange(number, start, end) {
        if (typeof (end) == 'undefined') {
            end = start;
            start = 0;
        }
        else if (start > end) {
            let temp1 = end;
            let temp2 = start;
            start = temp1;
            end = temp2;
        }
        let isInRange = true;
        if (number >= start && number < end) {
            return isInRange;
        }
        else {
            return !isInRange;
        }
    },
    words(str) {
        let arr = str.split(' ');
        return arr;
    },
    pad(string, number) {
        if (string.length >= number) {
            return string;
        }
        else if (string.length < number) {
            let diff = number - string.length;
            let padFront = Math.floor(diff / 2);
            let padEnd = diff - padFront;
            let padStr = ' ';
            let padded = padStr.repeat(padFront) + `${string}` + padStr.repeat(padEnd);
            return padded;
        }
    },
    has(obj, key) {
        let notHasValue = false;
        if (obj[key] === undefined) {
            return notHasValue;
        }
        else {
            return !notHasValue;
        }
    },
    invert(obj) {
        let invertedObject = {};
        let originalValue;
        for (let key in obj) {
            originalValue = obj[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject
    },
    findKey(obj, func) {
        for (let key in obj) {
            let value = obj[key];
            let predictedReturn = func(value);
            if (predictedReturn == true) {
                return key;
            }
        }

        return undefined;
    },
    drop(arr, n) {
        if (typeof (n) == 'undefined') {
            n = 1;
        }
        let val = arr.slice(n, arr.length);
        return val;
    },
    dropWhile(arr, func) {
        const callBack = (element, index) => {
            return !func(element, index, arr)
        };
        let dropNumber = arr.findIndex(callBack);
        let droppedArr = this.drop(arr, dropNumber)
        return droppedArr;
    },
    chunk(arr, size) {
        if (typeof (size) == 'undefined') {
            size = 1;
        }
        let arrChuncks = [];
        for (let i = 0; i < arr.length; i += size) {
            let arrChunk = arr.slice(i, i + size);
            arrChuncks.push(arrChunk);
        }
        return arrChuncks;
    }
};

// Do not write or modify code below this line.
module.exports = _;