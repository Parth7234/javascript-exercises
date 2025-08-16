const palindromes = function (str) {
    let newStr=str.replace(/[' ',.!]/g,'').toLowerCase()
    let revStr=newStr.split('').reverse().join('')
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]!=revStr[i])return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
