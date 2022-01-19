function palindorm (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 -i ]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log (palindorm('ana'))