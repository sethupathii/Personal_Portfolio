import React from 'react'
import hero from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={hero.container}>
      <div className={hero.content}>
        <h1 className={hero.title}>Hi ,I am Sethupathi</h1>
        <p className={hero.description}>
          I'm a full-stack developer.I'm a fresher and do not have a work experience. Reach out if you'd like to learn more!
        </p>
        <a href='mailto:sethuyadav13@gmail.com' className={hero.contactBtn}>Contact </a>
      </div>
      <img src={getImageUrl("hero/aaa_1702406514760.webp")} alt="heroImage" className={hero.heroImg} />
      <div className={hero.topBlur}/>
      <div className={hero.bottomBlur}/>
    </section>
  )
}

export default Hero