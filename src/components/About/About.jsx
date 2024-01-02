import React from 'react'
import style from './About.module.css'
import { getImageUrl } from '../../utils'

import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <section className={style.container} id='about'>
            <Helmet>
                <title>About Page</title>
                <meta name="description" content="LogIn-page" />
                {/* Set the og:image specific to the About page */}
                <meta property="og:image" content={getImageUrl('about/aboutOGImage.png')} />
                {/* Other meta tags */}
                <meta property="og:type" content="website" />
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