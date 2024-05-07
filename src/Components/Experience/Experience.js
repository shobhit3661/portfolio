import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <div className="experienceCenter">
        <div className="experience">
          <h1>Work Experience</h1>

          <div className="job">
            <h2>Software Developer, Nagarro</h2>
            <p>
              <strong>Duration:</strong> Dec 2021 – Ongoing
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Involved in the design, analysis, estimation, and development of
                new features, code fixes, and performance enhancement.
              </li>
              <li>
                Wrote clean, maintainable, scalable, and well-tested code.
              </li>
              <li>
                Managed regular releases with new fixes and product
                improvements.
              </li>
              <li>
                Participating in scrum meetings as part of the iteration
                development process.
              </li>
              <li>
                Designed Ericsson Messaging product job details page front-end
                and backend of the page. That helped the customer to easily
                manage and change job details.
              </li>
            </ul>
          </div>

          <div className="job">
            <h2>Associate Programmer Analyst, Cognizant</h2>
            <p>
              <strong>Duration:</strong> JULY 2021 – NOV 2021
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul>
              <li>
                Developed optimized solutions for Code changes and also improved
                the scalability and performance of the code.
              </li>
              <li>
                Developed a spring-boot API for the project for generating
                reports of the insurance partner and admin.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
