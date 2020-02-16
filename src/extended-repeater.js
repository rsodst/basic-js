module.exports = function repeater(str, options) {

    let parsedOptions = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|'
    };

    let configurers = {
        repeatTimes: (value) => {
            if (value && parseInt(value) != NaN) {
                parsedOptions.repeatTimes = value;
            }
        },
        separator: (symbol) => {
            if (symbol && typeof symbol == 'string') {
                parsedOptions.separator = symbol;
            }
        },
        addition: (str) => {
            parsedOptions.addition = `${str}`;
        },
        additionRepeatTimes: (value) => {
            if (value && parseInt(value) != NaN) {
                parsedOptions.additionRepeatTimes = value;
            }
        },
        additionSeparator: (symbol) => {
            if (symbol && typeof symbol == 'string') {
                parsedOptions.additionSeparator = symbol;
            }
        }
    };

    for (let option in options) {
        if (configurers[option]) {
            configurers[option](options[option]);
        }
    }

    let result = [];

    for (let i = 0; i < parsedOptions.repeatTimes; ++i) {
        result.push(`${str}`);

        for (let j = 0; j < parsedOptions.additionRepeatTimes; ++j) {
            result.push(parsedOptions.addition);
            if (j != parsedOptions.additionRepeatTimes - 1) {
                result.push(parsedOptions.additionSeparator);
            }
        }

        if (i != parsedOptions.repeatTimes - 1) {
            result.push(parsedOptions.separator);
        }
    }

    return result.join('');
};