import React from 'react';
import ProjectCards from '../components/Cards';
import SpaceExploration from '../assets/images/SpaceExploration.PNG';
import CommunityArtist from '../assets/images/CommunityArtist.PNG';
import JobsRUs from '../assets/images/JobsRUs.PNG';

const Projects = () => {
  return (
    <div>
      <ProjectCards 
        image={SpaceExploration}
        projectTitle="Space Exploration"
        projectDescription="Description"
        projectLanguages="This application is a front-end application and was built using HTML5, CSS3, JavaScript ES6, jQuery, and RESTful APIs."
        viewLiveSite="https://logantheproblemsolver.github.io/SpaceExploration/"
        viewGitHubFrontEnd="https://github.com/logantheproblemsolver/SpaceExploration"
      />
      <ProjectCards 
        image={CommunityArtist}
        projectTitle="Community Artists"
        projectDescription="Description"
        projectLanguages="This application is a full-stack application and was built using HTML5, CSS3, JavaScript ES6, React, Nodejs, Express, Postgresql, Jest, Mochai, Chai, and Supertest."
        viewLiveSite="https://community-artist-app.vercel.app/"
        viewGitHubFrontEnd="https://github.com/logantheproblemsolver/Community-Artists"
        viewGitHubBackend="https://github.com/logantheproblemsolver/Community-Artists-API"
      />
      <ProjectCards 
        image={JobsRUs}
        projectTitle="Jobs R' Us"
        projectDescription="Description"
        projectLanguages="This application is a full-stack application and was built using HTML5, CSS3, JavaScript ES6, React, Nodejs, Express, Postgresql, Jest, Mochai, Chai, and Supertest."
        viewLiveSite="https://jobs-r-us.vercel.app/"
        viewGitHubFrontEnd="https://github.com/logantheproblemsolver/Jobs-R-Us-App"
        viewGitHubBackend="https://github.com/logantheproblemsolver/Jobs-R-Us-API"
      />
    </div>
  )
}

export default Projects;

/* <img src={this.props.image} alt={this.props.alt} />
<p>{this.props.projectDescription}</p>
<p>{this.props.projectTitle}</p>
<p>{this.props.projectLanguages}</p>
<p>{this.props.viewLiveSite}</p>
<a href={this.props.viewGitHubFrontEnd}><FontAwesomeIcon icon={faGithub} /></a>
{this.props.viewGitHubBackend ? <a href={this.props.viewGitHubBackend}><FontAwesomeIcon icon={faGithub} /></a> : <a href={this.props.viewGitHubBackend} className="hidden"><FontAwesomeIcon icon={faGithub} /></a>} */