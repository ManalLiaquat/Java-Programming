
function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("mom");

/* / ... /g It's a global regex. So it'll operate on multiple matches in the string.
[ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
\W_ This matches the inverse of "word characters" and underscores. Any non-word character. */