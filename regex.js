const re1 = new RegExp("abc");
const re2 = /abc/;

// test 
console.log(re2.test("abcde"));

// set of characters using "[]"
const reSet1 = /[0123456789]/;
const reSet2 = /[0-9]/;

// using shortcuts
const reDigit = /\d/; //digits 0 to 9
const reNonDigit = /\D/; // A character that is not a digit

const reAlphaNumeric = /\w/; // any word character
const reNonAlphaNumberic = /\W/; // A nonAlphanumeric character

const reWhitespace = /\s/; // space, tab, newline, and similar
const reNonWhiteSpace = /\S/; // A nonwhtiespace character

const reDot = /./; // Any character expect for a newline

console.log(reDigit.test('in 1992'))
console.log(reNonDigit.test('j'))
console.log(reAlphaNumeric.test('in 1992'))
console.log(reWhitespace.test('in1992'))
console.log(reNonWhiteSpace.test(''))
console.log(reDot.test('jkjkj'))

//modifiers
const rePlus = /\d+/; // at least one match
const reStar = /\d*/; // can match zero timees
const reQuestion = /shoe?r/; // e is optional;

console.log(rePlus.test(''));
console.log(reStar.test(''));
console.log(reQuestion.test('shoer'));

// range
const reRange = /\d{2,5}/; // match a min:2, max:5, no space between {2,5}
const reRange2 = /\d{4,}/; // match a min:4, max:infinity, no space between {2,5}
console.log(reRange.test('12345'))
console.log(reRange.test('1'))
console.log(reRange2.test('14'))

// Grouping Subexpressions
let cartoonCrying = /boo+(hoo+)+/i; // i makes it case insensitive
console.log(cartoonCrying.test("Boohoohooo"));

// match and groups
//exec returns an object packed with match info

const match = /\d+/.exec("one two 140");
const matchSubexpr = /hu(vul+)/.exec("huvulll");
console.log(match);
console.log(matchSubexpr);

//match on String types
console.log("one two 100".match(/\d+/));