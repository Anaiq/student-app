import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      student: "A",
      name: "Ada",
      email: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      student: "B",
      name: "Beta",
      email: "beta@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      student: "C",
      name: "Caz",
      email: "caz@dev.org",
      isPresentData: false,
    },
    {
      id: 4,
      student: "D",
      name: "Derrick",
      email: "drick@dev.org",
      isPresentData: false,
    },
    ]);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList students={studentData} onUpdateStudent={updateStudentData} />
    </main>
  );
  // OR syntax with a embedded variable
  // const studentList = <StudentList></StudentList>;
  // const classInfo = <ClassInfo></ClassInfo>
  // return (
  //   <main>
  //       <h1>Attendance</h1>
  //       {classInfo}
  //       {studentList}
  //     </main>
  // );
}

export default App;
