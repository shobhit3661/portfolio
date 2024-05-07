import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projectsCenter">
        <div className="projects">
          <h1>Projects</h1>

          <div className="project">
            <h3>Movie Recommendation System</h3>
            <ul>
              <li>
                It’s a mobile application which shows the uses of Collaborative
                filtering in order to get better recommendations for the user.
              </li>
              <li>
                The mobile application is created by using flutter framework
                with the Help of TMDB API and for Database and Authentication
                firebase is used.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
