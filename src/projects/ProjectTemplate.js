import React, { useEffect } from "react";
import "./ProjectTemplate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectTemplate = ({ title, projLink, gitLink, description, photo, contributors }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      <div className="top-section">
        <div className="top-info">
          <h1 className="project-title">{title}</h1>
          <h4 className="contributors">Contributors: {contributors}</h4>
          <div className="links-container">
            <h5>
              <a href={projLink} target="_blank" rel="noopener noreferrer">
                Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </h5>
            <h5>•</h5>
            <h5>
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                Github Repo <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </h5>
          </div>
        </div>
        <img src={photo} alt="project screenshot" className="project-banner-photo" />
      </div>
      <div>
        <div className="description-body" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProjectTemplate;
