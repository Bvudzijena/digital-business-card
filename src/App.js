import React from "react"
import './App.css';

export default function App() {

    const Navbar() = (
      <div>

      </div>
    )
  return (
    <div className="App">
      <Navbar />
      <h1>Darlington Bvudzijena</h1>
      <h2>Front End Developer</h2>
      <button>Email</button>
      <button>LinkedIn</button>
      <div>
        <h3>About</h3>
        <pre>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
          I try to keep up with security and best practices, and am always looking for new things to learn.
        </pre>
      </div>
      <div>
        <h3>Interests</h3>
        <pre>Food expert.
           Music scholar. 
           Reader. 
           Internet fanatic. 
           Bacon buff. 
           Entrepreneur. 
           Travel geek. 
           Pop culture ninja. 
           Coffee fanatic.
          </pre>
      </div>
      </div>
  );
}

