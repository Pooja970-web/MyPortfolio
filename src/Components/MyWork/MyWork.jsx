import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-card">

            {/* Project Image */}
            <img src={work.w_img} alt={work.w_name} />

            {/* Project Name */}
            <h3>{work.w_name}</h3>

            {/* Project Description (Bullet Points) */}
            <ul>
              {work.w_desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <p className="tech">
              <strong>Tech:</strong> {work.tech}
            </p>

            {/* GitHub Link */}
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
