"use strict";

var _CustomFunctions = require("./CustomFunctions.js");
var _ClasstoBeImported = require("./ClasstoBeImported.js");
class Student {
  constructor(RollNo, Fname, Lname, marks) {
    this.RollNo = RollNo;
    this.Fname = Fname;
    this.Lname = Lname;
    this.totalMarks = 0;
    this.marks = marks;
  }
  TotalMarks() {
    let Temp = 0;
    this.marks.forEach(Mark => {
      Temp += Mark.value;
    });
    this.totalMarks = Temp;
  }
  set setMarks(marks) {
    this.marks = marks;
  }
}
const PercentOfResult = arrayOfStudents => {
  const mps = arrayOfStudents.length;
  return arrayOfStudents.map(student => {
    student.TotalMarks();
    return student.totalMarks / mps;
  });
};
const studentWithDistinction = arrayOfStudents => {
  return arrayOfStudents.filter(student => {
    student.TotalMarks();
    return student.totalMarks >= 200;
  });
};
const studentDetails = (students, RollNo) => {
  const student = students.find(student => {
    student.TotalMarks();
    return student.RollNo === RollNo;
  });
  (0, _CustomFunctions.display)(`${student.RollNo}  |   ${student.Fname} ${student.Lname}  |  ${student.totalMarks}`);
};
const student1 = new Student("50", "Miles", "Morales");
const MarksOfStudent1Subject1 = new _ClasstoBeImported.Marks("Physics", 35);
const MarksOfStudent1Subject2 = new _ClasstoBeImported.Marks("Physics", 45);
const MarksOfStudent1Subject3 = new _ClasstoBeImported.Marks("History", 50);
student1.marks = [MarksOfStudent1Subject2, MarksOfStudent1Subject1, MarksOfStudent1Subject3];
const student2 = new Student("2", "Pavitr", "Prabhakar");
const MarksOfStudent2Subject1 = new _ClasstoBeImported.Marks("Maths", 98);
const MarksOfStudent2Subject2 = new _ClasstoBeImported.Marks("Physics", 95);
const MarksOfStudent2Subject3 = new _ClasstoBeImported.Marks("History", 92);
student2.marks = [MarksOfStudent2Subject2, MarksOfStudent2Subject1, MarksOfStudent2Subject3];
const student3 = new Student("17", "Miguel", "O'Hara");
const MarksOfStudent3Subject1 = new _ClasstoBeImported.Marks("Maths", 60);
const MarksOfStudent3Subject2 = new _ClasstoBeImported.Marks("Physics", 75);
const MarksOfStudent3Subject3 = new _ClasstoBeImported.Marks("History", 15);
student3.marks = [MarksOfStudent3Subject2, MarksOfStudent3Subject1, MarksOfStudent3Subject3];
const TotalStudents = [student1, student2, student3];
const PercentOfAllStudents = PercentOfResult(TotalStudents);
(0, _CustomFunctions.display)(PercentOfAllStudents);
const StudentsWithDistinction = studentWithDistinction(TotalStudents).length;
(0, _CustomFunctions.display)(`Students with distinction ${StudentsWithDistinction}`);
studentDetails(TotalStudents, "50");