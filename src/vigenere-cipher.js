class VigenereCipheringMachine {

    constructor(isDirect) {
        this.isDirect = isDirect != undefined ? isDirect : true;
    }

    encrypt(string, key) {
        if (!string || !key) {
            throw new Error();
        }

        let result = this.encode(string, key);

        if (this.isDirect == false) {
            return result.split('').reverse().join('');
        }

        return result;
    }

    decrypt(string, key) {
        if (!string || !key) {
            throw new Error();
        }

        let result = this.decode(string, key);

        if (this.isDirect == false) {
            return result.split('').reverse().join('');
        }

        return result;
    }

    shiftStr(shift) {
        let result = [];
        for (let i = 'a'.charCodeAt(0) + shift; i <= 'z'.charCodeAt(0) + shift; ++i) {
            let char = String.fromCharCode(97 + (i - 97) % 26);
            result.push(char);
        }

        return result;
    }

    encodeChar(messageChar, keyChar) {
        let shiftArray = this.shiftStr(keyChar - 97);
        return shiftArray[messageChar - 97];
    }

    decodeChar(encodedMessageChar, keyChar) {
        let shiftArray = this.shiftStr(keyChar - 97);
        let encodedSymbol = String.fromCharCode(encodedMessageChar);
        let shiftedIndex = shiftArray.indexOf(encodedSymbol);
        return this.shiftStr(0)[shiftedIndex];
    }

    encode(message, key) {
        message = message.toLowerCase();
        key = key.toLowerCase();
        let encodedMessage = [];
        let keyIndex = 0;
        for (let i = 0; i < message.length; ++i) {
            if (/[^a-zA-Z]/g.test(message[i]) == false) {
                encodedMessage.push(this.encodeChar(message.charCodeAt(i), key.charCodeAt(keyIndex % key.length)));
                keyIndex++;
            } else {
                encodedMessage.push(message[i]);
            }
        }

        return encodedMessage.join('').toUpperCase();
    }

    decode(message, key) {
        message = message.toLowerCase();

        key = key.toLowerCase();
        let decodedMessage = [];
        let keyIndex = 0;
        for (let i = 0; i < message.length; ++i) {
            if (/[^a-zA-Z]/g.test(message[i]) == false) {
                decodedMessage.push(this.decodeChar(message.charCodeAt(i), key.charCodeAt(keyIndex % key.length)));
                keyIndex++;
            } else {
                decodedMessage.push(message[i]);
            }
        }

        return decodedMessage.join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;