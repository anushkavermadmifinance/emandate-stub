import React from 'react'
import { Link } from 'react-router-dom'

function Button({ className, to, outcome }) {
  return (
    <Link className={className} to={to}>{outcome}</Link>
  )
}

export default Button