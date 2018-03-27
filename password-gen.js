
function changeVocals(str) {
    var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var vocal = 'aiueoAIUEO'


    var strSplit = str.split('')
    var arr = [];
    var tampung = ''

    for (let i = 0; i < strSplit.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
            if (strSplit[i] === vocal[j]) {
                tampung = abc.indexOf(strSplit[i]) + 1
                strSplit[i] = abc[tampung]
            }
        }
        arr.push(strSplit[i])
    }

    return arr
}

function reverseWord(str) {

    var reverse = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }

    return reverse;
}

function setLowerUpperCase(str) {

    var result = '';

    for (let i = 0; i < str.length; i++) {
        uppercase = str[i].toUpperCase();
        lowercase = str[i].toLowerCase();

        if (str[i] === uppercase) {
            result += lowercase;
        } 
        if (str[i] === lowercase) {
            result += uppercase;
        } else {
            result += str[i];
        }
    }

    return result
}

function removeSpaces(str) {
    
    var result  = str.replace(/\s+/, "")

    return result
}

function passwordGenerator(name) {
    
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        var changeVocal = changeVocals(name);
        var reverseStr = reverseWord(changeVocal);
        var lowerUpper = setLowerUpperCase(reverseStr);
        var eraseSpace = removeSpaces(lowerUpper);
        return eraseSpace;
    }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
