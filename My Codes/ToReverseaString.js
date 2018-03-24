//
function reverseString(str) {
    var strSplit = str.split("");
    var strRev = strSplit.reverse();
    str = strRev.join("");
    return str;
}
reverseString("hello");
