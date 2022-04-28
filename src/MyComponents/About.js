import React from 'react'

const About = () => {
  let myStyle = {
    minHeight: "72vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>This is About Component...</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aspernatur dolores voluptatum libero sequi distinctio, facilis doloribus earum aliquam cupiditate autem, impedit odit quam, harum ex similique quos optio beatae voluptatibus ut. A, dolores?</p>
    </div>
  )
}

export default About
