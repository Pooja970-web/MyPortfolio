import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// use the same profile image file placed in src/assets (profile1_img.jpeg)
import profile_img from '../../assets/profile1_img.jpeg'

const About = () => {
  return (
    <div id='about' className="about">

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
           <p>I am a Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces.</p>
 <p>I work with HTML, CSS, JavaScript, and React to convert designs into real-world applications.</p>
 <p>
I enjoy integrating APIs, handling dynamic data, and continuously improving my skills by building practical projects.
Currently, I am looking for opportunities where I can contribute and grow as a frontend developer.
</p>

         
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>

            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>Actively building projects</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>Hands-on experience</h1>
          <p >with React & JavaScript</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>Learning</h1>
          <p> through real-world practice projects</p>
        </div>
      </div>

    </div>
  )
}

export default About
