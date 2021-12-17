import React from 'react'
import { Link } from 'react-scroll'

export const Footer = () => {
    return (
        <footer>
            <Link className="navLink go-top"
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            duration={500}>
                <i className="alignIcon fas fa-sort-up"></i>
            </Link>
            <div>
                <a target='_blank' href='https://github.com/greg13013'><i className="fab fa-github"></i></a>
            </div>
        </footer>
    )
}
