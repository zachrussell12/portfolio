import React from 'react';

//Libraries
import {motion, useAnimation} from 'framer-motion'
import {projInfo} from '../data/projectinformation.js';
import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {useMediaQuery} from 'react-responsive';

//Icons
import {BiMailSend} from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

//CSS Files
import '../css/App.css';

//Images
import headshot from '../images/headshot.JPG';
import landingIMG from '../images/bg.jpg';
import skillsBox from '../images/skillsBox.png';
import ucf from '../images/ucf.png';

//Components
import CertCard from './CertCard';
import ProjectCard from './ProjectCard';
import CollapsibleNav from './CollapsibleNav.js';
import { Link } from 'react-router-dom';

function Home(){

    const controlA = useAnimation();
    const controlE = useAnimation();
    const controlC = useAnimation();
    const controlP = useAnimation();
    const [refA, inViewA] = useInView();
    const [refE, inViewE] = useInView();
    const [refC, inViewC] = useInView();
    const [refP, inViewP] = useInView();

    const [navBar, toggleNavBar] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    })

    useEffect(()=>{
        inViewA ? controlA.start("visible") : controlA.start("hidden");
        inViewE ? controlE.start("visible") : controlE.start("hidden");
        inViewC ? controlC.start("visible") : controlC.start("hidden");
        inViewP ? controlP.start("visible") : controlP.start("hidden");
    }, [controlA, controlE, controlC, controlP, inViewA, inViewE, inViewC, inViewP, isMobile]);

    const navVar = {visible: {color: '#FFB600'}, hidden: {color: '#FFFFFF'}}

    return(
        <div>
            <header className={!isMobile ? "App-header" : "Mobile-header"}>
            {!isMobile && 
                <div className="image-cropper">
                <img src={headshot} id="headIMG" alt="Headshot of Zachary Russell"/>
                </div>
            }
            {!isMobile && 
                <div id="contact-info">
                <p>
                    Zachary David Russell
                </p> 
                <motion.a href="mailto:zachrussell12@gmail.com" id="email-text" whileHover={{y: [25, 0], transition: {duration: 0.5}}}>
                    <motion.p whileHover={{x: 10}}>
                    <BiMailSend id="mailIcon"/>zachrussell12@gmail.com
                    </motion.p>
                </motion.a>
                </div>
            }
            {!isMobile && 
                <motion.nav className="navigation">
                <motion.a href="#about" animate={{opacity: [0, 1]}}>
                    <motion.p whileHover={{color: ['hsl(4, 0, 100)', 'hsl(43, 100, 50)'], transition: {duration: 0.4} }} animate={controlA} variants={navVar}>About</motion.p>
                </motion.a>
                <motion.a href="#education" animate={{opacity: [0, 1], transition: {delay: 0.2}}}>
                    <motion.p whileHover={{color: ['hsl(4, 0, 100)', 'hsl(43, 100, 50)'], transition: {duration: 0.4}  }} animate={controlE} variants={navVar}>Education</motion.p>
                </motion.a>
                <motion.a href="#certifications" animate={{opacity: [0, 1], transition: {delay: 0.4}}}>
                    <motion.p  whileHover={{color: ['hsl(4, 0, 100)', 'hsl(43, 100, 50)'], transition: {duration: 0.4}  }} animate={controlC} variants={navVar}>Certifications</motion.p>
                </motion.a>
                <motion.a href="#projects" animate={{opacity: [0, 1], transition: {delay: 0.6}}}>
                    <motion.p  whileHover={{color: ['hsl(4, 0, 100)', 'hsl(43, 100, 50)'], transition: {duration: 0.4}  }} animate={controlP} variants={navVar}>Projects</motion.p>
                </motion.a>
                <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} onClick={()=>{document.location.href = "https://www.linkedin.com/in/zachary-russell-4979011b0/"}}>
                    <motion.p  whileHover={{color: ['hsl(4, 0, 100)', 'hsl(43, 100, 50)'], transition: {duration: 0.4}  }}><BsLinkedin/></motion.p>
                </motion.a>
                </motion.nav>
            }
            {isMobile &&
                <div id="burgMenu">
                    <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} onClick={()=>{document.location.href = "https://www.linkedin.com/in/zachary-russell-4979011b0/"}}>
                        <motion.p><BsLinkedin id="linkedInIcon"/></motion.p>
                    </motion.a>
                    <GiHamburgerMenu id="burgButton" onClick={()=>{toggleNavBar(!navBar)}}/>
                </div>
            }
        </header>
        <div className={!isMobile ? "App-Main" : "Mobile-Main"}>
            <body>
            {isMobile && navBar &&
                <CollapsibleNav navBar={navBar}/>
            }
            {!isMobile && <div id="landing">
                <motion.img src={landingIMG} id="landingIMG" alt="Zach Russell looking up at Knightro" animate={{x: [ -450,-500], opacity: [0, 1], transition: {duration: 1}}}/>
                <motion.div id="landingQuote">
                <motion.p animate={{x: [-50, 0], opacity: [0, 1], transition: {duration: 1, delay: 0.2}}}>
                    “It's fine to celebrate success but it is more important to heed the lessons of failure.”
                </motion.p>
                <motion.p style={{color: '#FFB600',}} animate={{x: [-50, 0], opacity: [0, 1], transition: {delay: 0.4, duration: 1}}}>
                    - Bill Gates
                </motion.p>
                </motion.div>
            </div>}
            {isMobile && 
                <div id="mobileLanding">
                <motion.div animate={{opacity: [0, 1], transition: {duration: 0.4}}} className="image-cropper-mobile">
                    <motion.img src={headshot} id="headIMGMobile" alt="Headshot of Zachary Russell"/>
                </motion.div>
                <motion.h5 animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.2}}}>Zachary David Russell</motion.h5>
                <motion.h3 id="mobileLandingsubheader" animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.4}}}>IT Specialist & Developer</motion.h3>
                <motion.a href="mailto:zachrussell12@gmail.com" id={!isMobile ? "email-text" : "email-text-mobile"}>
                    <motion.p animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.6}}}>
                    <BiMailSend id="mailIcon"/>zachrussell12@gmail.com
                    </motion.p>
                </motion.a>
                </div>
            }
            <motion.div animate={isMobile ? {opacity: [0, 1], y: [15, 0]}: null} id={!isMobile ? "about" : "aboutMobile"} style={{backgroundColor: isMobile ? "white" : null}}>
                <div id={!isMobile ? "about-left" : "container-mobile"}>
                    <h5 ref={refA}  id={isMobile ? "mobile-h5" : null}>Get to know a little about my <span style={{color: '#FFB600'}}>journey.</span></h5>
                    <p>This React.js website I created serves as a place for me to showcase my accomplishments and future hopes, and I'm sure you want to know a little about me as well.</p>
                    <p>When I started my Bachelors of Science in Information Technology 4 years ago, I had no idea what I wanted to do with my future. IT seemed like the perfect way for me to peer into all aspects of the industry and see what I enjoyed the most. In doing so,
                    I fell in love with Software Development as a whole. I took a particular interest in Web Development and similar fields because I enjoyed seeing the fruits of my labor. That love for software development has brought me to where I am today.
                    </p>
                    <p>
                    In 2020, my education became completely online, which a lot of students struggled with, but I thrived in it. Being taught completely online allowed me to develop a mastery at teaching myself any skill I needed. The pandemic actually enabled me
                    to become extremely skilled at learning effectively. With this skill I took it and ran, learning skills that weren't being offered to me at the collegiate level. I've been able to diversify myself by just trying multiple different projects, languages, and new skills.
                    </p>
                    <p>
                    That leads me to today. A determined and adaptable developer that is willing to take on any challenge thrown at me, no matter the skill set needed. <span style={{fontWeight: 400}}>If I don't know it, <span style={{color: '#FFB600'}}>I'll learn it.</span></span>
                    </p>
                </div>
                {!isMobile && <div id="about-right">
                    <img src={skillsBox} id='skillsBox' alt='Box of skills zach russell has used.'/>
                </div>}
            </motion.div>
            <div id={!isMobile ? "education" : "educationMobile"}  style={{backgroundColor: isMobile ? '#202124' : null}}>
                {!isMobile && <div id="about-right">
                    <img src={ucf} id='ucfLogo' alt='UCF Pegasus Logo'/>
                </div>}
                <div id={!isMobile ? "about-left" : "container-mobile"}>
                    <h5 ref={refE} id={isMobile ? "mobile-h5" : null} style={{color: isMobile ? "white" : null}}>Educational <span style={{color: '#FFB600'}}>experience.</span></h5>
                    <div className="degreeContainer" style={{paddingTop: 5, backgroundColor: '#FFB600'}}>
                    <h3 className='subHeader'>
                        Bachelor of Science in Information Technology
                    </h3>
                    <p style={{paddingLeft: 15,}}>
                        GPA: 3.7
                    </p>
                    <p style={{paddingLeft: 15,}}>
                        Top 15% of College of Engineering and Computer Science class
                    </p>
                    </div>
                    <div className="degreeContainer" style={{marginTop: 15, color: isMobile ? "white" : null}}>
                    <h3 className='subHeader'>
                        Master of Science in Cyber Security and Privacy
                    </h3>
                    <p style={{paddingLeft: 15,}}>
                        In Progress as of Fall 2022.
                    </p>
                    </div>
                    <div>
                    <h3 className="subHeader" style={{color: isMobile ? "white" : null}}>Related Coursework</h3>
                    <ui className={!isMobile ? "twoColumnList" : "singleColumnList"}>
                        <li>
                        Computer Science I
                        </li>
                        <li>
                        Security in Computing
                        </li>
                        <li>
                        Object Oriented Programming
                        </li>
                        <li>
                        Managing IT Integration
                        </li>
                        <li>
                        Enterprise Computing
                        </li>
                        <li>
                        Database Concepts
                        </li>
                        <li>
                        Internet Applications
                        </li>
                        <li>
                        Foundations of Discrete Math
                        </li>
                        <li>
                        System Administration and Maintenance
                        </li>
                        <li>
                        Foundations of Human & Computer Interaction
                        </li>
                    </ui>
                    </div>
                </div>
            </div>
            <div id={!isMobile ? "certifications" : "certificationsMobile"} >
                <div className={!isMobile ? "fullWidth" : "fullWidthMobile"}>
                    <h5 ref={refC} id={isMobile ? "mobile-h5" : null}>Certifications</h5>
                    <div className={!isMobile ? "fullWidthBody" : "fullWidthBodyMobile"}>
                    <CertCard cert={'Responsive Web Design Developer Certification'} img={'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png'} certLink={'https://www.freecodecamp.org/certification/zachrussell/responsive-web-design'} mobile={isMobile}/>
                    <CertCard cert={'TestOut IT Fundamentals Pro Certification'} img={'0'} certLink={'https://verification.testout.com/verifycert/6-1C6-74E9V'} mobile={isMobile}/>
                        <motion.button id={!isMobile ? "skillAssessContainer" : "skillAssessMobile"} whileHover={{scale: 1.05, transition: {duration: 0.3, ease: 'easeInOut'}}} onClick={()=>{document.location.href="https://www.linkedin.com/in/zachary-russell-4979011b0/#skills";}}>
                        <h3 className="subHeader" style={{color: 'white'}}>LinkedIn Skill <span style={{color: '#FFB600'}}>Assessments</span></h3>
                        <ui id="skillList">
                            <li>
                            IT Operations
                            </li>
                            <li>
                            Front-End Development
                            </li>
                            <li>
                            JavaScript
                            </li>
                            <li>
                            HTML
                            </li>
                            <li>
                            CSS
                            </li>
                            <li>
                            Adobe Premiere Pro
                            </li>
                        </ui>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div id={!isMobile ? "projects" : "projectsMobile"} >
                <div className={!isMobile ? "fullWidth" : "fullWidthMobile"} style={{backgroundColor: '#202124'}}>
                    <h5 ref={refP} id={isMobile ? "mobile-h5" : null} style={{color: 'white'}}>Projects</h5>
                    <div className={!isMobile ? "fullWidthBody" : "fullWidthBodyMobile"}>
                    <Link to="/mindful" style={{color: 'inherit'}}><ProjectCard project={"Mindful Mobile App"} img={0} info={projInfo[0].info} mobile={isMobile}/></Link>
                    <Link to="/discord" style={{color: 'inherit'}}><ProjectCard project={"Project Management Bot"} img={1} info={projInfo[1].info} mobile={isMobile}/></Link>
                    </div>
                </div>
            </div>
            </body>
        </div>
        </div>
    );
}

export default Home;