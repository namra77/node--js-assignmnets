// Sample data
const students = [
  { id: 1, name: 'Namra', courseId: 101 },
  { id: 2, name: 'Misbah', courseId: 102 },
  { id: 3, name: 'Sabah', courseId: 101 },
];

const courses = [
  { id: 101, name: 'Math' },
  { id: 102, name: 'Science' },
];

const attendanceRecords = [
  { id: 1, studentId: 1, courseId: 101, attendance: true },
  { id: 2, studentId: 2, courseId: 102, attendance: false },
  { id: 3, studentId: 3, courseId: 101, attendance: true },
];

// Function to get attendance for a specific course
const getAttendance = (courseId) => {
  return new Promise((resolve) => {
      const attendanceList = attendanceRecords
          .filter(record => record.courseId === courseId)
          .map(record => {
              const student = students.find(s => s.id === record.studentId);
              return { name: student.name, attendance: record.attendance };
          });
      resolve(attendanceList);
  });
};

// Async function to print attendance
const printAttendance = async (courseId) => {
  try {
      const attendance = await getAttendance(courseId);
      const course = courses.find(c => c.id === courseId);
      console.log(`Attendance for ${course.name}:`);
      attendance.forEach(student => {
          console.log(`${student.name}: ${student.attendance ? 'Present' : 'Absent'}`);
      });
  } catch (error) {
      console.error('Error fetching attendance:', error);
  }
};

// Call the function with a specific course ID
printAttendance(101);