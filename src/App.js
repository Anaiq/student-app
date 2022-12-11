import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList></StudentList>
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
