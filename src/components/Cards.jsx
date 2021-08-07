import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';


class ProjectCards extends React.Component {
  render() {
    return (
      <div className="border h-96">
        <div>
          <img src={this.props.image} alt={this.props.alt} />
          <p>{this.props.projectDescription}</p>
        </div>
        <h2>{this.props.projectTitle}</h2>
        <ul className="w-11/12 m-auto">
          <li className="text-center">
            <p>{this.props.projectLanguages}</p>
          </li>
          <li className="text-center">
            <a href={this.props.viewLiveSite} className="w-full"><FontAwesomeIcon icon={faDesktop} /> View The Live Site!</a>
          </li>
          <li className="text-center">
            <a href={this.props.viewGitHubFrontEnd}><FontAwesomeIcon icon={faGithub} /> View The Front-End Code!</a>
          </li>
          <li className="text-center">
            {this.props.viewGitHubBackend ? <a href={this.props.viewGitHubBackend}><FontAwesomeIcon icon={faGithub} /> View The Backend Code!</a> : <a href={this.props.viewGitHubBackend} className="hidden"><FontAwesomeIcon icon={faGithub} /></a>}
          </li> 
        </ul>
        
      </div>
    )
  }
};

export default ProjectCards;