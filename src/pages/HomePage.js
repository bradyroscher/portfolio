import React from 'react'
import Picture from '../images/Pic.jpeg'
import Technologies from '../images/Technologies.png'
import GitHub from '../images/GitHub.png'
import LinkedIn from '../images/LinkedIn.png'
import Robahtzee from '../images/single-player-ss.png'
import Retriver from '../images/homepage-BP.png'
import Inkwell from '../images/artist-page.png'
import RarePokedex from '../images/rare-pokedex.png'

const HomePage = (props) => {
  return (
    <div
      className="main-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        marginTop: '5vh',
        marginBottom: '5vh'
      }}
    >
      <div
        className="header-div"
        style={{
          maxWidth: '60%',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15vh'
        }}
      >
        <img
          style={{
            maxWidth: '100%',
            height: '50%',
            borderRadius: '500px',
            marginRight: '30px'
          }}
          src={Picture}
          alt="Me"
        />
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            className="name"
            style={{
              width: '100%',
              fontSize: '45px',
              color: '#00ffff',
              textAlign: 'center'
            }}
          >
            Brady Roscher
          </div>
          <div
            style={{
              width: '100%',
              fontSize: '20px',
              textAlign: 'left',
              margin: '20px'
            }}
          >
            Driven software engineer who approaches problems with a fresh and
            creative approach. I thrive on fast-paced teams that strive to leave
            their mark on impactful projects.
          </div>
          <div
            className="links"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <a href="https://github.com/bradyroscher">
              <img src={GitHub} alt="GitHub logo" style={{ width: '60px' }} />
            </a>
            <a
              style={{ marginTop: '3px' }}
              href="https://www.linkedin.com/in/brady-roscher-291521212/"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn Logo"
                style={{ width: '35px' }}
              />
            </a>
            <div style={{ paddingLeft: '20px' }}>
              Contact: bradyroscher@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div
        className="name"
        style={{ textAlign: 'center', fontSize: '45px', color: '#00ffff' }}
      >
        Technologies
      </div>
      <img
        src={Technologies}
        alt="Technologies"
        style={{ width: '70vw', margin: '35px', borderRadius: '10px' }}
      />
      <div
        className="technologies"
        style={{
          width: '50%',
          textAlign: 'center',
          fontSize: '20px'
        }}
      >
        JavaScript, React.js, Redux, PostgreSQL, Sequelize, MongoDB, Mongoose,
        Express, Node.js, Python3, Flask, HTML5, CSS3
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          className="name"
          style={{
            fontSize: '45px',
            color: '#00ffff',
            marginTop: '75px',
            marginBottom: '50px',
            textAlign: 'center'
          }}
        >
          Projects
        </div>

        <div style={{ width: '75vw' }}>
          <div className="project">
            <img
              src={Inkwell}
              alt="Inkwell"
              style={{
                // width: '50%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />
            <div
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25px'
              }}
            >
              <div style={{ fontSize: '30px' }}>Inkwell</div>
              <div>
                I built a Full-Stack app using the PERN stack and React-Redux.
                It is a place where tattoo artists can show off their work, and
                users can discover artists in their area. I’m super proud of all
                the hard work I put into this one and that I was able to show
                off all I learned!
              </div>
              <div style={{ display: 'flex' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://mysterious-basin-66061.herokuapp.com/"
                  className="project-link"
                >
                  Deployed Project
                </a>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/bradyroscher/inkwell"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              src={Robahtzee}
              alt="Robahtzee"
              style={{
                width: '50%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />
            <div
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25px'
              }}
            >
              <div style={{ fontSize: '30px' }}>Robahtzee</div>
              <div>
                Developed a Yahtzee game using JavaScript, HTML, and CSS. Had a
                ton of fun building out the logic for this game in vanilla
                JavaScript. The game works flawlessly!
              </div>
              <div style={{ display: 'flex' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="http://robahtzee.surge.sh/"
                  className="project-link"
                >
                  Deployed Project
                </a>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/bradyroscher/Yahtzee"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              src={Retriver}
              alt="Retriever"
              style={{
                width: '50%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />
            <div
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25px'
              }}
            >
              <div style={{ fontSize: '30px' }}>Retriever</div>
              <div>
                On a team of 4, I was in charge of the Front-end for this
                Full-Stack application. Utilized SQL, Sequelize, and
                function-based React components to build an app for finding and
                posting rescue animals with a focus on exotic pets.
              </div>
              <div style={{ display: 'flex' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://retriever-app.herokuapp.com/"
                  className="project-link"
                >
                  Deployed Project
                </a>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/bradyroscher/retrieverApp"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              src="https://i.imgur.com/lTVtn5C.png"
              alt="The Hoot"
              style={{
                width: '50%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />
            <div
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25px'
              }}
            >
              <div style={{ fontSize: '30px' }}>The Hoot</div>
              <div>
                Created a Full-Stack application that is a music sharing and
                discussion board using class-based components in React for the
                front end, and mongoDB and mongoose in the back end.
              </div>
              <div style={{ display: 'flex' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://obscure-inlet-81672.herokuapp.com/"
                  className="project-link"
                >
                  Deployed Project
                </a>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/bradyroscher/the-hoot"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              src={RarePokedex}
              alt="Rare Pokedex"
              style={{
                width: '50%',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />
            <div
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25px'
              }}
            >
              <div style={{ fontSize: '30px' }}>Rare Pokedex</div>
              <div>
                Full-Stack application I built with a partner in just a day.
                Rare Pokedex serves a database for selling Pokemon Cards. This
                project uses a Flask back-end writin in Python. Turned out
                really well for being built in one day!
              </div>
              <div style={{ display: 'flex' }}>
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/baileyjean/rare-pokedex"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
