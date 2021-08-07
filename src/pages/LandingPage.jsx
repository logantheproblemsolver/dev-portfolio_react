import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="bg-black text-center w-full h-1/4">
        <p className="text-yellow-25 pt-10 text-3xl mb-2">Logan Ellis</p>
        <p className="text-white mb-10">Full Stack Developer</p>
        <Link className="bg-yellow-25 w-1/2 h-12 block mx-auto" to="/projects">
          <p className="my-auto">See My Work</p>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;