const courses = ["javascript", "react", "node", "mongodb", "express"];

// filter() courses with name length > 5
let longCourses = courses.filter(course => course.length > 5);
console.log("Length > 5:", longCourses);

// map() to convert course names to uppercase
let upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase:", upperCourses);

// find() the course "react"
let foundCourse = courses.find(course => course === "react");
console.log("Found course:", foundCourse);

// findIndex() of "node"
let indexOfNode = courses.findIndex(course => course === "node");
console.log("Index of node:", indexOfNode);
