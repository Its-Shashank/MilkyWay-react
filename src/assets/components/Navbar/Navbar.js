import React from 'react'
import HamburgerMenu from './Hamburger'
import { Link } from 'react-router-dom'
import '../../scss/togglebar.scss'

export default function Navbar() {
    return (
        <div>
            <nav>
                <HamburgerMenu />
                <div>
                    <Link to='/' id='logo-header'>
                        <h1>MilkyWay</h1>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
