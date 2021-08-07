import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div className="">
      <h1 className="mx-auto w-3/4 text-3xl my-16">Contact Me!</h1>
      <ul className="mx-auto w-3/4">
        <li className="mb-10">
          <FontAwesomeIcon icon={faEnvelope} /> mrloganellis@gmail.com
        </li>
        <li className="mb-10">
          <FontAwesomeIcon icon={faGithub} /> logantheproblemsolver
        </li>
        <li className="mb-10">
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} /> Logan Ellis
          </a>
        </li>
      </ul>
      <div className="bg-mobileResumeBackground sm:bg-regularResumeBackground bg-cover h-56 ">
      </div>
    </div>
  )
}

export default Contact;