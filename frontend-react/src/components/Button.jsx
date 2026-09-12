import React from 'react'

const Button = (props) => {
  return (
    <>
        <a className={`btn ${props.class}`} href="a">{props.text}</a>
    </>
  )
}

export default Button