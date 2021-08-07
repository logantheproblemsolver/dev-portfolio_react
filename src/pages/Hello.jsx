import React from 'react';
import ProfilePicture from '../assets/images/profilePicture.png'

const Hello = () => {
  return (
    <div className="h-screen w-screen 1.5xl:flex">
      <img src={ProfilePicture} alt="this is me, Logan Ellis" className="w-72 1.5xl:w-96 1.5xl:h-96 mt-24 mx-auto" />
      <div className="w-full 1.5xl:w-3/5">
        <p className="w-72 sm:w-96 lg:w-2/3 mt-8 leading-8 mx-auto text-3xl">Hello!</p>
        <p className="w-72 sm:w-96 lg:w-2/3 mt-8 leading-8 mx-auto">
          My name is Logan Ellis. I am a full-stack developer as well as an avid dreamer of traveling (fun fact: the picture was taken in Venice).
        </p>

        <p className="w-72 sm:w-96 lg:w-2/3 mt-8 leading-8 mx-auto">
          I graduated from the Thinkful Coding Bootcamp April 2020. While in Thinkful I have become proficient in HTML5, CSS3, Javascript ES6, jQuery, Reactjs, Nodejs, Express, and PostgreSQL. I wanted to get into coding because I love the challenge it gives me. Not only do I love the challenge of it, but also I love knowing that there are people out there that I can truly help with writing code. Right now, I am really looking forward to continue learning, and become a proficient developer! Currently, I am starting to help in a Covid-19 project, and also learning to build mobile apps using React Native.
        </p>

        <p className="w-72 sm:w-96 lg:w-2/3 mt-8 leading-8 mx-auto">
          I think that Thinkful has not only helped me learn how to code, but also gave me the tools to learn how to broaden my horizons and learn code that isn't on their curriculum. I am a really outgoing person, who fits well into any environment I am put in. I always aim to achieve and strive. I am looking for a job that will constantly challenge me, and allows me to learn as much as I can while also working with other great developers.
        </p>
      </div>
    </div>
  )
}

export default Hello;