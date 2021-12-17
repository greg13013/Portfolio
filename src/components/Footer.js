import React from 'react'
import { Link } from 'react-scroll'

export const Footer = ({data}) => {

    if (data) {
        var sociaux = data.social.map((social,index) => {
            return (
                <a target='_blank' href={social.url} key={index}>
                    <i className={social.className}></i>
                </a>
            )
        })
    }

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
               {sociaux}
            </div>
        </footer>
    )
}
