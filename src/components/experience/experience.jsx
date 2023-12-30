import React from 'react'

import Style from './experience.module.css'
import Skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

const Experience = () => {
    return (
        <section id='experience' className={Style.container}>
            <h2 className={Style.title}>Skills</h2>
            <div className={Style.content}>
                <div className={Style.skills}>
                    {Skills.map((skill, index) => {
                        return <div key={index} className={Style.skill}>
                            <div className={Style.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
                <ul></ul>
            </div>
        </section>
    )
}

export default Experience