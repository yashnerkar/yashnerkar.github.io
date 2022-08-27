import React, { useEffect } from 'react'
import './css/home.css'
import MediaQuery from 'react-responsive'
import Global from './Globalstyles';
const Home = ({ setCurrActive }) => {
  useEffect(() => {
    setCurrActive('home');
  }, [setCurrActive]);

  return (
    <div style={{
      minHeight: '100vh',
      borderTop: '1px solid #1e2d3d',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'

    }}>
      <Global image="images/bg2.png"></Global>
      <div className="container text-center  position-relative">
        <p className="intro-line">Hi, I am</p>
        <p className=" btn-shine">Yash Nerkar</p>
        <div className='gitmain'>
          <div className="git">{'>'}</div>
          <div className="git"><span>Full-Stack-Developer</span></div>
        </div>


        <div className="container mt-3">
          <p className="comment">//Check out my github profile</p>
          <p><span className="const">const </span><span className="github">githubLink</span> <span className="text-light"> = </span><a href="https://github.com/yashnerkar"><span className="github-link ">"https://github.com/yashnerkar"</span></a></p>
        </div>
      </div>
    </div>
  )
}

export default Home