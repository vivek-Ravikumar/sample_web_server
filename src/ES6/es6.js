const marks = [50, 60, 80, 54];

//map method - perform an operation on all elements of an array and returns a new array
//map method will be consodered as a expression and will be execetued , it deoenst require any function call
//arrowFunctions
const incMarks = marks.map(mark => mark + 20);

console.log(incMarks);

//filter method - filter based on a condition and return a new array
const filteredMarks = marks.filter(mark => mark > 50);
console.log(filteredMarks);

//find method
const findnumber = marks.find(mark => mark === 50);
console.log("foundNumber", findnumber);

//reduce method - gets a array , iterates over the elements and produce the required output
//syntax -  array.reduce(callbk fn, accumulator(initial value))
const redTotal = marks.reduce((acc, mark) => acc + mark, 0);
console.log("total", redTotal);

//template Strings.  -  useful for multiline strings .

console.log(`total marks is ${marks.reduce}`);

const htmlElement = text => `
<div>
  <p>
    ${text}
 </p>
</div>`;

console.log(htmlElement("hi"));

//Destructuring

const [
  eng = 10,
  tamil = 10,
  Science = 10,
  History = 10,
  geography = 10
] = marks;

console.log(geography);

const sampleObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

const { one, two, three, ...other } = sampleObject;

console.log(other);

////spread operator ... ES7

console.log({ one: one, two: two, three: three });
console.log({ one, two, three }); ///enhanced object literals
//block scoped and function scoped variables

function samplefunction() {
  var myVariable = "inside function";
}

if (true) {
  var myVariable = "var inside block";
  let mySecondVariable = "i am a let";
}

console.log(myVariable);





