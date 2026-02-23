import React from 'react'
import './Hero.css'
// Replace the SVG with your photo placed at src/assets/profile.jpg
import profile_img from "../../../assets/profile1_img.jpeg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>I'am Pooja Kushawaha,fronted developer based in India.</h1>
     <p>Frontend Developer focused on building modern, responsive, and performance-driven web applications using React.
</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
