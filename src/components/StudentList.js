import React from "react";
import Student from "./Student";
import "./StudentList.css";
import PropTypes from 'prop-types';

const StudentList = (props) => {
  // JSX syntax to use variables for className
  const headingClass = "student-list__heading";
  // data structure to iterate over to create array of JSX elements

  // iterating over data structure to create array of JSX elements
  const studentComponents = props.students.map((student,index) => {
    return (
      <li key={index}>
        <Student 
          id={student.id}
          student={student.student} 
          name={student.name}
          email={student.email} 
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
          ></Student>
      </li>
    );
  });
  
  // JSX element used to store an array of student components with props
  // const studentComponents =
  // [
  //   <li><Student student="A" name="Ada" email="ada@dev.org"></Student></li>,
  //   <li><Student student="B" name="Beta" email="beta@dev.org"></Student></li>,
  //   <li><Student student="C" name="Caz" email="caz@dev.org"></Student></li>,
  //   <li><Student student="D" name="Derrick" email="drick@dev.org"></Student></li>

  // ];

  return (
      <section>
        <h2 className={headingClass}>Student List</h2>
        <ul className="student-list">
          {studentComponents}
        </ul>
      </section>
  );
};

// OR syntax to assign JSX object in a variable:
// const StudentList = () => {
//   const StudentListHeader = <h2>Student List</h2>;
//   return StudentListHeader
// };

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    student: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresentData: PropTypes.bool.isRequired
  })),
  onUpdateStudent: PropTypes.func.isRequired
};

export default StudentList;
