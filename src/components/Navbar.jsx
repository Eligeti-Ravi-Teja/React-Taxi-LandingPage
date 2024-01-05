import React from 'react'
// import "../../public/Media"
const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./Media/logo.png" alt="" />
        </div>
        <ol>
            <li>Offers</li>
            <li>Settings</li>
            <li>signup</li>
            <li>help</li>
        </ol>
        <button>Login</button>
    </nav>
  )
}

export default Navbar
