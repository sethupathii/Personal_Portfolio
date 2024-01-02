import React from 'react'
import style from './About.module.css'
import { getImageUrl } from '../../utils'

import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <section className={style.container} id='about'>
            <Helmet>
                {/* <meta name="description" content="About-Page" /> */}
                <meta property="og:site_name" content="Sethu Portfolio About page" />
                <meta property="og:title" content="SethuPathi" />
                <meta property="og:description" content="Personal Portfolio about Sethupathi" />
                <meta property="og:image" content="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:url" content=" https://main--bucolic-crisp-4bfe2d.netlify.app/" />
            </Helmet>
            <h2 className={style.title}>About</h2>
            <div className={style.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt=" sitting with lap" className={style.aboutImage} />
                <ul className={style.aboutItems}>
                    <li className={style.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="curser" />
                        <div className={style.aboutItemText}>
                            <h3>frontend developer</h3>
                            <p>I'm a frontend developer and building responsive
                                and optimized sites.</p>
                        </div>
                    </li>
                    <li className={style.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
                        <div className={style.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs.
                            </p>
                        </div>
                    </li>
                    <li className={style.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="developer" />
                        <div className={style.aboutItemText}>
                            <h3>MERN Stack Developer</h3>
                            <p>
                                I'm a mern stack developer and building both frontend and backend responsive projects.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About