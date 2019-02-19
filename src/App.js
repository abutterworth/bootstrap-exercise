/*

Build the markup and styling for this page

MS in Data Science UCSD
https://www.edx.org/masters/online-master-data-science-uc-san-diego

*/


// External Libraries
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// App Level Imports
import './App.scss';

// Asset Imports
import edxLogo from './assets/edx-logo.png';
import universityLogo from './assets/ucsdx-logo.png';
import universityCampus from './assets/hero-bg-campus.jpg';
import {
  faDollarSign,
  faBook,
  faDesktop,
  faClock,
} from '@fortawesome/free-solid-svg-icons';



class App extends Component {
  render() {
    return (
      <div className="program-detail-page">
        <AppHeader />

        <div className="hero">
          <div className="hero-bg">
            <div className="hero-bg-pattern"/>
            <div className="hero-bg-campus" style={{backgroundImage: `url(${universityCampus})`,
            }}/>
          </div>

          <div>
            <h1>Master's Degree in Data Science</h1>
            <p>from The University of California, San Diego</p>
            <p>Top ranked</p>
            <img src={universityLogo} />
          </div>
        </div>

        

        <nav>
          <a href="#overview">Overview</a>
          <a href="#details">Details</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#get-started">Get Started</a>
          <a href="#faq">FAQs</a>
        </nav>

        <a href="#get-started">Tell Me More</a>


        <ul>
          <li>
            <FontAwesomeIcon icon={faDollarSign} />
            <span>$15,000</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <span>10 courses</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faDesktop} />
            <span>Fully online</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} />
            <span>1-3 years</span>
          </li>
        </ul>



        <h2>Master's Overview</h2>
        <p>UCSD will offer an online Master of Data Science, subject to approval by The University of California, San Diego, the UC office of the President, and WSCUC.</p>
        <p>UCSD’s Master of Data Science will give you the skills required to become a successful data scientist. Through a rigorous curriculum developed by the world’s topmost experts in the field, the program covers both the foundations of data sciences, along with applied methods useful in practice. Students will learn how to collect, prepare, store, analyze, and visualize data, all at large scales. A capstone course will tie all the material together through a large project that leverages unique strengths at UCSD, including the interdisciplinary Halicioglu Data Science Institute, the San Diego Super Computer Center, the Scripps Institution for Oceanography, and world-renowned research groups in health informatics, computer vision, and computer-generated music.</p>


        <ul>
          <li>
            <span>#5</span>
            <p>
              <span>Best public university</span>
              <span>U.S. News and World Report</span>
            </p>
          </li>
          <li>
            <span>#9</span>
            <p>
              <span>Most graduates hired by silicon valley employers</span>
              <span>HiringSolved</span>
            </p>
          </li>
          <li>
            <span>#10</span>
            <p>
              <span>Nationally in best global universities</span>
              <span>U.S. News and World Report</span>
            </p>
          </li>
        </ul>


        <h2>Details</h2>


        <h3>Tuition</h3>
        <ul>
          <li>
            Tuition (40 credits at $375 each)
            $15,000
          </li>
          <li>
            Additional fees per term
            TBD
          </li>
        </ul>
        <p>*Student fees billed by term. Total cost varies depending on how long it takes to complete the degree program.</p>
        <p>*Financial aid will be available, up to $5,000 based on merit and financial need.</p>


        <h3>Important dates & deadlines</h3>
        <p>UCSD WILL OFFER AN ONLINE MASTER OF DATA SCIENCE, SUBJECT TO APPROVAL BY THE UNIVERSITY OF CALIFORNIA, SAN DIEGO, THE UC OFFICE OF THE PRESIDENT, AND WSCUC.</p>
        <ul>
          <li>
            Coming soon
            TBD at TBD
          </li>
        </ul>


        <h3>Prerequisite coursework</h3>
        <p>At least one college-level course or equivalent knowledge in:</p>
        <ul>
          <li>Computer programming in any high-level programming language (Java, C, Pascal, Fortran, C++, Python, PHP, etc.)</li>
          <li>Multivariate calculus</li>
          <li>Basic linear algebra</li>
        </ul>


        <h3>Application requirements</h3>
        <p>A full application includes the following:</p>
        <ul>
          <li>Bachelor’s degree (or equivalent) in a relevant field</li>
          <li>UCSD Data Science MicroMasters program recommended but not required (note: the credit from the MicroMasters program transfers into the Master’s program)</li>
          <li>Resume</li>
          <li>Personal statement</li>
          <li>Three letters of recommendation</li>
          <li>TOEFL required for international applicants only</li>
          <li>Applicants are not required to submit GRE scores</li>
        </ul>




        <h2>Curriculum</h2>
        <p>The online Master's degree in Data Science requires 10 courses with each course being 4 credit hours.</p>



        <h2 id="get-started">Get Started</h2>
        <div className="form-bg" />
        <form>
          <h3>Learn More About the Master’s Degree in Data Science</h3>

          <label>Email</label>
          <input type="text" />

          <label>First Name</label>
          <input type="text" />

          <label>Last Name</label>
          <input type="text" />

          <label>Country</label>
          <select>
            <option>Select a country</option>
            <option>Country 1</option>
            <option>Country 2</option>
          </select>

          <label>Highest Level of Education</label>
          <select class="select">
            <option>Select education level</option>
            <option>High School</option>
            <option>Associate's or 2-Year Degree</option>
            <option>Bachelor's Degree</option>
            <option>Master's or Professional Degree</option>
            <option>Doctoral or Equivalent</option>
          </select>

          <label>Phone Number (optional)</label>
          <input type="text" />

          <p>By submitting this information, I agree that edX will share the above information with The University of California, San Diego, and I consent to edX, The University of California, San Diego, or an authorized service provider contacting me about the Master’s Degree in Data Science.</p>

          <button type="submit">I Want To Learn More</button>
        </form>


        <h2>Frequently Asked Questions</h2>

        {[
          {
            question: "Is the GMAT/GRE Required?",
            answer: "No.",
          },
          {
            question: "Will I have access to University networking or career services?",
            answer: "Yes.",
          },
          {
            question: "Is financial aid available?",
            answer: "Yes, up to $5,000 based on merit and financial need.",
          },
          {
            question: "Does the University offer scholarships?",
            answer: "No.",
          },
          {
            question: "What degree is earned at the end of the program?",
            answer: "Master of Data Science",
          },
          {
            question: "Is the TOEFL required for international students?",
            answer: "Yes.",
          },
          {
            question: "How long will it take to earn this degree?",
            answer: "The degree will take between 1 and 3 years to finish.",
          },
          {
            question: "How much time will I likely spend on a course?",
            answer: "This will vary for individuals, but we estimate between 8-12 hours a week per course.",
          },
          {
            question: "How does the MicroMasters program fit in with the Master's degree program?",
            answer: "The associated MicroMasters program is part of the established Master's degree curriculum. If you complete, pass, and have a verified certificate in all of the courses in the MicroMasters program you will earn the MicroMasters program certificate. If you then apply to the Master's degree program and are accepted, your MicroMasters program certificate can count as credit towards your degree and the tuition to complete the remainder of the degree program will be reduced accordingly.",
          },
        ].map(({ question, answer }) => (
          <div>
            <h4>{question}</h4>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;


function AppHeader() {
  return (
    <div 
      className="position-relative p-3 shadow"
      style={{
        zIndex: 2000
      }}
    >
      <img className="d-block m-auto" src={edxLogo} />
    </div>
  );
}