const marks = [78, 92, 35, 88, 40, 67];

//  filter() marks ≥ 40
let passed = marks.filter(mark => mark >= 40);
console.log("Passed:", passed);

//  map() add 5 grace marks
let graceMarks = marks.map(mark => mark + 5);
console.log("After Grace:", graceMarks);

// reduce() find highest mark
let highest = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log("Highest Mark:", highest);

//  find() first mark below 40
let firstFail = marks.find(mark => mark < 40);
console.log("First Fail:", firstFail);

// findIndex() of mark 92
let indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", indexOf92);
