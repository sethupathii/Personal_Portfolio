import React from 'react'
import Styles from './Contact.module.css'

import { getImageUrl } from '../../utils'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <footer id='contact' className={Styles.container} >
            <div className={Styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={Styles.links}>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="ContactEmail" />
                    <a href="mailto:sethuyadav13@gmail.com">sethuyadav13@gmail.com</a>
                </li>
                <li className={Styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="ContactLinkedin" />
                    <a href="https://www.linkedin.com/in/sethupathi-m-b65832266">sethupathi-m-linkedin__</a>
                </li>

                <li className={Styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="ContactEmail" />
                    <a href="https://www.github.com/sethupathii">http://github/sethupathi</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact