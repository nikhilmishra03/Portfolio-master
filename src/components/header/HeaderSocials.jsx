import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/nikhil-mishra-12020b1bb/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/nikhilmishra03" target="_blank" rel='noreferrer'><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials