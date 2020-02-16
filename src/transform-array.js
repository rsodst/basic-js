module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error();

    let commands = {
        '--discard-next': (arr, index, result) => {
            return (index * 1) + 2;
        },
        '--discard-prev': (arr, index, result) => {
            result.pop();
            return index + 1;
        },
        '--double-next': () => {

            if (index + 1 < arr.length && Object.keys(commands).includes(arr[index + 1]) == false) {
                arr[index] = arr[index + 1];
                return index;
            } else {
                return index + 1;
            }
        },
        '--double-prev': () => {
            if (index - 1 > 0 && Object.keys(commands).includes(arr[index - 1]) == false) {
                arr[index] = arr[index - 1];
                return index;
            } else {
                return index + 1;
            }
        }
    };

    let result = [];
    let index = 0;
    while (index < arr.length) {
        let cmd = commands[arr[index]];
        if (cmd) {
            index = cmd(arr, index, result);
        } else {
            result.push(arr[index]);
            ++index;
        }
    }

    return result;
};