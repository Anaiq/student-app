import React from "react";
import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {
  // useState
  // const [isPresent, setIsPresent] = useState(false); **this is now is App
  // function to call to change the state
  // const togglePresence = () => { . **this is now in App component
  //   setIsPresent(!isPresent);
  //   }
  // css variable used as the classname via ternary operator in order to apply the 
  // css to the state that change
  const onAttendanceButtonClick = () => {
    const updatedStudent = {
      id: props.id,
      student: props.student,
      name: props.name,
      email: props.email,
      isPresentData: !props.isPresent
    };
    console.log(props.isPresent);
    props.onUpdate(updatedStudent);
  };
  const nameColor = props.isPresent ? 'red' : 'green';
  return (
    <div>
        <ul>
          {/* using the css variable as a class name in the JSX */}
        <li>Student: {props.student}</li>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onAttendanceButtonClick}>Toggle if {props.name} is present.</button>
    </div>  
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  student: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresentData: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
  }

export default Student;