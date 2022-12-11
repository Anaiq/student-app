import React from 'react';
import './StudentList.css';

const StudentList = () => {
  // JSX syntax to use variables for className
  const headingClass = 'student-list__heading';
  return( 
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className='student-list'>
          <li>Student A</li>
          <li>Student B</li>
          <li>Student C</li>
          <li>Student D</li>
      </ul>
    </section>
    
  );
};
// OR syntax to assign JSX object in a variable:
// const StudentList = () => {
//   const StudentListHeader = <h2>Student List</h2>;
//   return StudentListHeader
// }

export default StudentList;