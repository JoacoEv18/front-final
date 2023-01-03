import { Link } from "react-router-dom";
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/api'>Api</Link>
            <Link to='/Formulario'>Formulario</Link>
        </nav>
    )
}