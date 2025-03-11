
import React, { Fragment } from 'react'
import classes from './Navbar.module.css'
import Navigation from './Navigation'

const Navbar = (props) => {
  return (
    <Fragment>
    <Navigation/>
    {props.children}
    </Fragment>
  )
}

export default Navbar
