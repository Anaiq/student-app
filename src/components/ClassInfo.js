import React from 'react';
import './ClassInfo.css'

const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Info</h2>
        <ul>
          <li> Name: Team Semicolons</li>
          <li>Number of members: {props.memberCount}</li>
        </ul>
    </section>
  )
}

export default ClassInfo;