// Array of students
const stdName = [
    {
        name: "Namra",
        subjects: [
            { subject: "Math", marks: 85 },
            { subject: "Science", marks: 88 },
            { subject: "English", marks: 78 },
        ],
    },
    {
        name: "Misbah",
        subjects: [
            { subject: "Math", marks: 95 },
            { subject: "Science", marks: 90 },
            { subject: "English", marks: 85 },
        ],
    },
];

// Displays student details with subjects and marks

// The forEach method is used to iterate over each student in the stdName array.
// For each iteration:
// The student parameter represents the current student object being processed.
// Inside the arrow function (student) => {...}, the block of code will run for every student in the array.

stdName.forEach((student) => {
    console.log(`Student Name: ${student.name}`);
    console.log("Subjects:");

//     forEach is used to iterate through this subjects array.
// For each iteration:
// The subject parameter represents the current subject object being processed.
// Inside the arrow function (subject) => {...}, the block of code will run for each subject in the array
// .
    student.subjects.forEach((subject) => {
        console.log(`  ${subject.subject}: ${subject.marks} marks`);
    });
    console.log("----------");
});