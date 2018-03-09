
function findLongestWord(str) {
    var wordsArray = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > maxLength) {
            maxLength = wordsArray[i].length;
        }
    }

    return maxLength;
}

findLongestWord("The quick brown fox jumps over the lazy dog");