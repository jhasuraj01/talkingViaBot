let caesarCipher = (str, key = 0) => {
    let encryptedText = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // A -> 65 & a -> 97 & Z -> 90 & z -> 122
        let charCode = char.charCodeAt(0);
        let newCharCode;
        if (65 <= charCode && charCode <= 90) {
            // encrypting capital letter
            if (65 <= charCode+key && charCode+key <= 90) {
                newCharCode = charCode + key;
            }
            else if (90 < charCode+key) {
                newCharCode = 65 + (charCode + key - 91)%26;
            }
            else if (charCode+key < 65) {
                newCharCode = 90 - (64 - charCode - key)%26;
            }
        }
        else if (97 <= charCode && charCode <= 122) {
            // encrypting small letter
            if (97 <= charCode+key && charCode+key <= 122) {
                newCharCode = charCode + key;
            }
            else if (122 < charCode+key) {
                newCharCode = 97 + (charCode + key - 123)%26;
            }
            else if (charCode+key < 97) {
                newCharCode = 122 - (96 - charCode - key)%26;
            }
        } else {
            // keep other symbols same
            newCharCode = charCode;
        }
        encryptedText += String.fromCharCode(newCharCode);
    };
    return encryptedText;
};
let encrypt = (str, key) => caesarCipher(str, key);
let decrypt = (str, key) => caesarCipher(str, -key);