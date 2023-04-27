import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
  return <ul className='nav-links'>
    <li>
        <NavLink to='/' exact>All Users</NavLink>
    </li>
    <li>
        <NavLink to='/u1/blogs' exact>All Blogs</NavLink>
    </li>
    <li>
        <NavLink to='/blogs/new' exact>Add Blog</NavLink>
    </li>  
    <li>
        <NavLink to='/auth' exact>Authenticate</NavLink>
    </li>  
  </ul>
}

export default NavLinks