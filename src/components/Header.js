import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                <li className="nav-item btn btn-danger mx-1">Home</li>
                <li className="nav-item btn btn-danger mx-1">About me</li>
                <li className="nav-item btn btn-danger mx-1">Star wars</li>
                <li className="nav-item btn btn-danger mx-1">Contact</li>
            </ul>
        </nav>
        <h1 className="text-center py-4">Luke Skywalker</h1>
    </header>
  )
}
