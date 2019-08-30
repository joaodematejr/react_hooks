import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function addCourseActions(title){
  return { type: 'ADD_COURSES', title }
}

export default function CourseList() {

  const qty = 2;

  const courses = useSelector(
    state => state.data.slice(0, qty),
    [qty]
  ) ;

  const dispatch = useDispatch();

  function addCourse(){
    dispatch(addCourseActions('GraphQL'))
  }

  return(
    <>
      <ul>
        {courses.map(courses => <li key={courses}>{courses}</li>)}
      </ul>
      <button type="button" onClick={addCourse} >
          Add cursos
      </button>
    </>
  )
}