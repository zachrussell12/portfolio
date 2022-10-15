import React from 'react';

//Libraries
import {motion} from 'framer-motion'
import {projInfo} from '../data/projectinformation.js';
import {useState } from 'react';
import {useMediaQuery} from 'react-responsive';
import {TypeAnimation }  from 'react-type-animation';
import axios from 'axios';

//Icons
import {BiMailSend} from 'react-icons/bi';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {GiCancel} from 'react-icons/gi';

//CSS Files
import '../css/App.css';

//Images
import headshot from '../images/headshot.png';
import hills from '../images/hills.png';

//Components
import ProjectCard from './ProjectCard';
import MindfulPop from './MindfulPop.js';
import DiscordPop from './DiscordPop.js';

function Home(){

    //const [headerText, setHeaderText] = useState('front end developer');

    //Skills Animation Vars
    const [firstType, setFirstType] = useState(false);
    const [secondType, setSecondType] = useState(false);
    const [thirdType, setThirdType] = useState(false);
    const [fourthType, setFourthType] = useState(false);

    //Certification Animation Vars
    const [codeFirstType, setCodeFirstType] = useState(false);
    const [codeSecondType, setCodeSecondType] = useState(false);
    const [codeThirdType, setCodeThirdType] = useState(false);
    const [codeFourthType, setCodeFourthType] = useState(false);
    const [codeFifthType, setCodeFifthType] = useState(false);

    //Data Variables from API
    const [skills, setSkills] = useState([]);
    const [coding, setCoding] = useState([]);
    const [certs, setCerts] = useState([]);
    const [assessments, setAssessments] = useState([]);

    //Project Pop Up Vars
    const [mindfulModal, triggerMindfulModal] = useState(false);
    const [discordModal, triggerDiscordModal] = useState(false);
  
    var isMobile = useMediaQuery({
      query: '(max-width: 500px)',
    });
  
    var eightyBreak = useMediaQuery({
      query: '(max-width: 810px)',
    });
  
    var ninetyBreak=useMediaQuery({
      query: '(min-width: 900px)',
    });

    var ninetyHeightBreak=useMediaQuery({
        query: '(max-height: 900px)',
      });
  
    var thousandBreak=useMediaQuery({
      query: '(min-width: 1080px)',
    });

    const callEndpoint = () =>{
        if(firstType){
            setFirstType(false);
            setSecondType(false);
            setThirdType(false);
            setFourthType(false);
            setSkills([]);
            setCoding([]);
        }
        else{
            setFirstType(!firstType);
        }
    }

    const callCertEndpoint = () => {
        if(codeFirstType){
            setCodeFirstType(false);
            setCodeSecondType(false);
            setCodeThirdType(false);
            setCodeFourthType(false);
            setCodeFifthType(false);
            setCerts([]);
            setAssessments([]);
        }
        else{
            setCodeFirstType(!codeFirstType);
        }
    }

    const triggerMindful = () => {
        console.log('trigger modal');
        triggerMindfulModal(!mindfulModal);
        document.body.style.overflow = !mindfulModal ? "hidden" : "visible";
    }

    const triggerDiscord = () => {
        triggerDiscordModal(!discordModal);
        document.body.style.overflow = !discordModal ? "hidden" : "visible";
    }

    return(
        <html style={{backgroundColor: '#242323', margin: 0, padding: 0, overflow: 'hidden', position: 'relative'}}>

            {
            <header className={!isMobile ? "App-header" : "Mobile-header"}>
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                    {!isMobile && 
                        <nav id="contact-info" style={{backgroundColor: window.scrollY === 0 ? 'transparent' : '#242323', paddingRight: thousandBreak ? '2%' : '5%', height: ninetyHeightBreak ? '7vh' : eightyBreak ? '6vh' : '5vh'}}>
                            <p style={{paddingInlineEnd: 25}}>
                                Zachary David Russell
                            </p> 
                            <motion.a href="mailto:zachrussell12@gmail.com" id="email-text" animate={{opacity: [0, 1], transition: {delay: 0.6}}} whileHover={{y: [0, -5], transition: {duration: 0.5}}} style={{color: window.scrollY === 0 ? '#FFFFFF' : '#ff5164', marginTop: ninetyHeightBreak ? -5 : eightyBreak ? -2 : 5, paddingInlineEnd: 25}}>
                                <motion.p>
                                    <BiMailSend id="mailIcon" size={thousandBreak ? 25 : 20}/>
                                </motion.p>
                            </motion.a>
                            <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} style={{color: window.scrollY === 0 ? '#FFFFFF' : '#ff5164', marginTop: ninetyHeightBreak ? -1 : eightyBreak ? 0 : 5, cursor: 'pointer', paddingInlineEnd: 25}} onClick={()=>{document.location.href = "https://www.linkedin.com/in/zachary-russell-4979011b0/"}}>
                                <motion.p  whileHover={{y: [0, -5], transition: {duration: 0.4}  }} style={{color: window.scrollY === 0 ? '#FFFFFF' : '#ff5164',}}><BsLinkedin/></motion.p>
                            </motion.a>
                            <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} style={{color: window.scrollY === 0 ? '#FFFFFF' : '#ff5164', marginTop: ninetyHeightBreak ? -1 : eightyBreak ? 0 : 5, cursor: 'pointer'}} onClick={()=>{document.location.href = "https://github.com/zachrussell12"}}>
                                <motion.p  whileHover={{y: [0, -5], transition: {duration: 0.4}  }} style={{color: window.scrollY === 0 ? '#FFFFFF' : '#ff5164',}}><BsGithub/></motion.p>
                            </motion.a>
                        </nav>
                    }

                    {isMobile &&
                        <nav id="burgMenu">
                            <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} style={{paddingRight: 15}} onClick={()=>{document.location.href = "https://www.linkedin.com/in/zachary-russell-4979011b0/"}}>
                                <motion.p><BsLinkedin id="linkedInIcon"/></motion.p>
                            </motion.a>
                            <motion.a animate={{opacity: [0, 1], transition: {delay: 0.6}}} style={{paddingRight: 15}} onClick={()=>{document.location.href = "https://github.com/zachrussell12"}}>
                                <motion.p><BsGithub id="linkedInIcon"/></motion.p>
                            </motion.a>
                        </nav>
                    }
            </header>
        }
            <div className={!isMobile ? "App-Main" : "Mobile-Main"}>
                <body style={{position: 'relative'}}>
                {!isMobile && 
                    
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row', width: '100%', background: 'linear-gradient(135deg, #ffa467 15%, #ff5164 85%)', boxSizing: 'border-box', justifyContent: 'flex-start', alignItems: 'center', paddingInlineStart: '5%', paddingBlock: 50}}>
                        <p style={{ fontSize: '6.5vh', color: '#FFFFFF', fontFamily: 'monospace', position: 'relative', left: '2%'}}>{'>'}&nbsp;</p>
                        <span style={{position:'relative', left: '2%'}}>
                            &nbsp;
                            <TypeAnimation
                                sequence={[
                                'front end developer', 
                                2000, 
                                'graduate student', 
                                2000,
                                'your next developer', 
                                2000,
                                () => {
                                console.log('Done typing!');
                                }
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={0}
                            style={{ fontSize: ninetyBreak ? '6.5vh' : eightyBreak ? '5vh' : '6.5vh', color: '#FFFFFF', fontFamily: 'monospace', paddingBlock: 50,}}/>
                        </span>
                        <p className='dash-blink' style={{ fontSize: '6.5vh', color: '#FFFFFF', fontFamily: 'monospace', position: 'relative', left: '2%'}}>_</p>
                        <img src={headshot} style={{position: 'absolute', zIndex: 0, width: '5%', left: '1.5%'}} alt="Zachary Russell standing in front of the UCF Library"/>
                        <img style={{position: 'absolute', zIndex: 0, width: '100%', height: undefined, aspectRatio: 1, top: eightyBreak ? '-5%' :  ninetyHeightBreak ? '-16.5%' : '-23.5%', left: 0}} src={hills} alt="Curvy shape meant to look like a curvy transition into the body of the website."/>
                    </div>
                
                }
                {isMobile && 
                    <div id="mobileLanding">
                        <motion.img src={headshot} id="headIMGMobile" alt="Headshot of Zachary Russell"/>
                        <motion.h5 animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.2}}}>Zachary David Russell</motion.h5>
                        <motion.h3 id="mobileLandingsubheader" animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.4}}}>IT Specialist & Developer</motion.h3>
                        <motion.a href="mailto:zachrussell12@gmail.com" id={!isMobile ? "email-text" : "email-text-mobile"}>
                            <motion.p animate={{opacity: [0, 1], transition: {duration: 0.4, delay: 0.6}}}>
                                <BiMailSend id="mailIcon"/>zachrussell12@gmail.com
                            </motion.p>
                        </motion.a>
                    </div>
                }

                {/* ABOUT SECTION */}

                <motion.div animate={{opacity: [0, 1], y: [15, 0]}} id={!isMobile ? "about" : "aboutMobile"} style={{backgroundColor: isMobile ? "#242323" : null, flexWrap: 'wrap', alignItems: 'center', height: 'fit-content'}}>
                    <div id={!isMobile ? "about-left" : "container-mobile"} style={{minWidth: eightyBreak ? '60%' : undefined, textAlign: 'justify'}}>
                        <h5 id={isMobile ? "mobile-h5" : null}>Get to know a little about my <span style={{color: '#ff5164'}}>journey.</span></h5>
                        
                        <p style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.5em' : '0.8em'}}>
                            This React.js website I created serves as a place for me to showcase my accomplishments, projects, experience, skills.
                        </p>
                        
                        <p style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.5em' : '0.8em'}}>
                            When I started my Bachelors of Science in Information Technology 4 years ago, I had no idea what I wanted to do with my future. IT seemed like the perfect way for me to peer into all aspects of the industry and see what I enjoyed the most. In doing so,
                            I fell in love with Software Development as a whole. I took a particular interest into the sector of web development because I enjoyed seeing the fruits of my labor.
                        </p>
                        
                        <p style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.5em' : '0.8em'}}>
                            In 2020 my education became completely online. Being taught completely online allowed me to develop a mastery at teaching myself any skill I needed. The pandemic actually enabled me
                            to become extremely skilled at learning effectively. With this skill I took it and ran, learning skills that weren't being offered to me at the collegiate level. I've been able to diversify myself for the sole reason that I wanted to be better.
                        </p>
                        
                        <p style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.5em' : '0.8em'}}>
                            That leaves me at today. A determined and adaptable developer that is willing to take on any challenge thrown at me, no matter the skill set needed. 
                        </p>
                        <p style={{fontWeight: 400, fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.5em' : '0.8em'}}>
                            If I don't know it, <span style={{color: '#ff5164'}}>I'll learn it.</span>
                        </p>
                    </div>
                    <div id={!isMobile ? "api-console" : "api-console-mobile"} style={{width: isMobile ? '85vw' : eightyBreak ? '80vw' : undefined, padding: 0, height: isMobile ? '70vh' : undefined}}>
                        <motion.div style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: '#ff5164', paddingBlock: 10, paddingInline: 25, alignItems: 'center', justifyContent: 'space-between'}}>
                            <p style={{fontFamily: 'monospace', fontSize: '1.5em', color: '#FFFFFF',}}>Skills API Call</p>
                            <motion.button onClick={callEndpoint} whileHover={{border: ['3px solid #ff5164', '3px solid #FFFFFF'], backgroundColor: ['#232424', '#FF5164'], transition: {duration: 0.4}}} className="api-call-button" style={{width: ninetyHeightBreak ? '20%' : eightyBreak ? '15%' : '10%'}}>
                                <p className="api-button-text">Call API</p>
                            </motion.button>
                        </motion.div>
                        <ul className="api-code-lines">
                            <li style={{height: isMobile ? '15%' : ninetyHeightBreak ? '15%' : '8.5%'}}>
                                {'>'}
                                <span style={{paddingLeft: 15,}}>
                                    {firstType && <TypeAnimation
                                        sequence={[
                                        'Axios Get request to serverless AWS Lamda endpoint...', 
                                        2000, 
                                        'Axios Get request to serverless AWS Lamda endpoint', 
                                        500,
                                        'Axios Get request to serverless AWS Lamda endpoint...', 
                                        2000,
                                        ()=>{axios.get('https://fj9qgaqsh3.execute-api.us-east-1.amazonaws.com/dev/skills', {}).then(resp => {setSkills(resp.data.generalSkills);}).then(()=>setSecondType(true));}
                                        ]}
                                        wrapper="span"
                                        cursor={false}
                                        repeat={0}
                                        style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace',}}
                                    />}
                            </span>
                            </li>
                            <li style={{height: isMobile ? '25%' : ninetyHeightBreak ? '15%' : '8.5%'}}>
                                {secondType && 
                                <span>
                                {'>'}
                                    <TypeAnimation
                                            sequence={[
                                            `let skills = [${skills.join(', ')}]`, 
                                            2000, 
                                            ()=>{setThirdType(true);}
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            repeat={0}
                                            style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', textIndent: 15}}
                                    />
                                </span>
                                }
                            </li>
                            <li style={{height: isMobile ? '15%' : ninetyHeightBreak ? '15%' : '8.5%'}}>
                                {thirdType && 
                                <span>
                                {'>'}
                                    <TypeAnimation
                                            sequence={[
                                            `Axios Get request to serverless AWS Lamda endpoint...`, 
                                            2000,
                                            `Axios Get request to serverless AWS Lamda endpoint`, 
                                            500, 
                                            `Axios Get request to serverless AWS Lamda endpoint...`, 
                                            2000, 
                                            ()=>{axios.get('https://fj9qgaqsh3.execute-api.us-east-1.amazonaws.com/dev/skills/coding', {}).then(resp => {setCoding(resp.data.languages);}).then(()=> setFourthType(true));}
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            repeat={0}
                                            style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', paddingLeft: 15}}
                                    />
                                </span>
                                }
                            </li>
                            <li style={{height: isMobile ? '20%' : ninetyHeightBreak ? '15%' : '8.5%'}}>
                            {fourthType && 
                                <span>
                                {'>'}
                                    <TypeAnimation
                                            sequence={[
                                            `let experience = [${coding.join(', ')}]`, 
                                            2000, 
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            repeat={0}
                                            style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', paddingLeft: 15}}
                                    />
                                </span>
                                }
                            </li>

                        </ul>
                    </div>
                </motion.div>

                {/* EDUCATION SECTION */}

                <motion.div id={!isMobile ? "education" : "educationMobile"} style={{backgroundColor: isMobile ? '#242323' : null, paddingBottom: isMobile ? 25 : undefined}}>
                        <motion.div id={!isMobile ? "about-left" : "container-mobile"}>
                            <h5 id={isMobile ? "mobile-h5" : null} style={{color: '#FFFFFF'}}>Educational <span style={{color: '#ff5164'}}>experience.</span></h5>
                            <div id={!isMobile ? "education-child-container" : "education-child-container-mobile"} style={{}}>
                                <div className={!isMobile ? "degreeContainer" : "degreeContainerMobile"} style={{paddingTop: 5, backgroundColor: '#ff5164', minWidth: eightyBreak ? '70%' : '50%'}}>
                                    <h3 className='subHeader' style={{fontSize: isMobile ? '1em' : eightyBreak ? '0.5em' : '0.8em'}}>
                                        Bachelor of Science in Information Technology
                                    </h3>
                                    <p style={{paddingLeft: 15, fontSize: isMobile ? '0.8em' : eightyBreak ? '0.5em' : '0.8em'}}>
                                        <span style={{fontFamily: 'Roboto', fontWeight: 500}}>GPA:</span> 3.7
                                    </p>
                                    <p style={{paddingLeft: 15, fontSize: isMobile ? '0.8em' : eightyBreak ? '0.5em' : '0.8em'}}>
                                        Top <span style={{fontFamily: 'Roboto', fontWeight: 500}}>15%</span> of College of Engineering and Computer Science class
                                    </p>
                                </div>
                                <div className={!isMobile ? "degreeContainer" : "degreeContainerMobile"} style={{color: "#FFFFFF", minWidth: eightyBreak ? '70%' : '50%'}}>
                                    <h3 className='subHeader' style={{fontSize: isMobile ? '1em' : eightyBreak ? '0.5em' : '0.8em'}}>
                                        Master of Science in Cyber Security and Privacy
                                    </h3>
                                    <p style={{paddingLeft: 15,}}>
                                        In Progress as of Fall 2022.
                                        <p style={{paddingLeft: 15, fontSize: isMobile ? '0.8em' : eightyBreak ? '0.5em' : '0.8em'}}>Currently enrolled in: Advanced Software Systems Security & Foundations of Computer Security and Privacy</p>
                                    </p>
                                </div>
                            </div>
                            <div style={{borderRadius: 25, border: '3px solid #ff5164', marginTop: 25, padding: '0px 15px 15px 15px', width: isMobile ? '80%' : '100%', alignSelf: 'center'}}>
                                <h3 className="subHeader" style={{color: "#FFFFFF"}}>Related Coursework</h3>
                                <ui className={!isMobile ? !eightyBreak ? "twoColumnList" : "singleColumnList" : "singleColumnList"} style={{maxHeight: eightyBreak ? undefined : '13vh', width: '100%'}}>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Computer Science I
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Security in Computing
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Object Oriented Programming
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Managing IT Integration
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Enterprise Computing
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Database Concepts
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Internet Applications
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Foundations of Discrete Math
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    System Administration and Maintenance
                                    </li>
                                    <li style={{fontSize: isMobile ? '1em' : ninetyHeightBreak ? '0.59em' : eightyBreak ? '0.5em' : '1em'}}>
                                    Foundations of Human & Computer Interaction
                                    </li>
                                </ui>
                            </div>
                        </motion.div>
                </motion.div>

                {/* CERTIFICATIONS SECTION */}

                <div id={!isMobile ? "certifications" : "certificationsMobile"} style={{height: isMobile ? '100vh' : '60vh', marginBottom: isMobile ? 25 : ninetyBreak ? '0' : '-20%'}}>
                    <div className={!isMobile ? "fullWidth" : "fullWidthMobile"}>
                        <h5 id={isMobile ? "mobile-h5" : null}>Certifications</h5>
                        <div className={!isMobile ? "fullWidthBody" : "fullWidthBodyMobile"} style={{width: ninetyHeightBreak ? '20%' : eightyBreak ? '40%' : '60%'}}>
                        <div id={!isMobile ? "api-console" : "api-console-mobile"} style={{minWidth: isMobile ? '85vw' : eightyBreak ? '60vw' : ninetyBreak ? '40vw' : undefined, height: isMobile ? '75vh' : undefined , padding: 0, backgroundColor: '#242323', border: 'none'}}>
                                <motion.div style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: '#363434', paddingBlock: 10, paddingInline: 25, alignItems: 'center', justifyContent: 'space-between'}}>
                                    <p style={{fontFamily: 'monospace', fontSize: '1.5em', color: '#FFFFFF',}}>Skills API Call</p>
                                    <motion.button onClick={callCertEndpoint} whileHover={{border: ['3px solid #363434', '3px solid #FFFFFF'], backgroundColor: ['#FF5164', '#363434'], transition: {duration: 0.4}}} className="api-call-button" style={{width: isMobile ? '30%' :  ninetyHeightBreak ? '20%' : eightyBreak ? '15%' : '10%', border: '3px solid #363434', backgroundColor: '#FF5164'}}>
                                        <p className="api-button-text">Call API</p>
                                    </motion.button>
                                </motion.div>
                                <ul className="api-code-lines" style={{marginRight: 15}}>
                                    <li style={{height: isMobile ? '8.5%' : ninetyHeightBreak ? '8.5%' : '8.5%', fontSize: ninetyHeightBreak ? '0.8em' : eightyBreak ? '0.8em' : undefined}}>
                                        {'>'}
                                        <span style={{paddingLeft: 15,}}>
                                            {codeFirstType && <TypeAnimation
                                                sequence={[
                                                'Axios Get request to serverless AWS Lamda endpoint...', 
                                                2000, 
                                                'Axios Get request to serverless AWS Lamda endpoint', 
                                                500,
                                                'Axios Get request to serverless AWS Lamda endpoint...', 
                                                2000,
                                                ()=>{axios.get('https://fj9qgaqsh3.execute-api.us-east-1.amazonaws.com/dev/skills/certifications', {}).then(resp => {setCerts(resp.data.certs);}).then(()=>setCodeSecondType(true));}
                                                ]}
                                                wrapper="span"
                                                cursor={false}
                                                repeat={0}
                                                style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace',}}
                                            />}
                                    </span>
                                    </li>
                                    <li style={{height: isMobile ? '5%' : ninetyHeightBreak ? '8.5%' : '8.5%', fontSize: ninetyHeightBreak ? '0.8em' : eightyBreak ? '0.8em' : undefined}}>
                                        {codeSecondType && 
                                        <span>
                                        {'>'}
                                            <TypeAnimation
                                            sequence={[
                                                `let certs = [{`, 
                                                500, 
                                                ()=>{setCodeThirdType(true);}
                                                ]}
                                                wrapper="span"
                                                cursor={false}
                                                repeat={0}
                                                style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', paddingLeft: 15}}
                                            />
                                        </span>
                                        }
                                    </li>
                                    <li style={{minHeight: isMobile ? '35%' : ninetyHeightBreak ? '30%' : '30%', fontSize: ninetyHeightBreak ? '0.8em' : eightyBreak ? '0.8em' : undefined}}>
                                        {codeThirdType && 
                                        <span>
                                            {
                                                certs.map((data, i)=>{
                                                    return(
                                                        <a href={`${data.link}`} target="_blank" rel="noreferrer" style={{paddingLeft: i === 0 ? 45 : 23}}>
                                                            <TypeAnimation
                                                            sequence={[
                                                                i === certs.length-1 ? `certName: ${data.title}`  : `certName: ${data.title},`, 
                                                                2000, 
                                                                ()=>{ i === certs.length-1 ? setCodeFourthType(true) : console.log('');}
                                                                ]}
                                                                wrapper="a"
                                                                cursor={false}
                                                                repeat={0}
                                                                style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace',}}
                                                            />
                                                            <p></p>
                                                        </a>
                                                    );
                                                })
                                            }
                                        </span>
                                        }
                                    </li>
                                    <li style={{height: isMobile ? '8.5' : ninetyHeightBreak ? '8.5%' : '8.5%', fontSize: ninetyHeightBreak ? '0.8em' : eightyBreak ? '0.8em' : undefined}}>
                                        {codeFourthType && 
                                        <span>
                                            <TypeAnimation
                                                    sequence={[
                                                    `}];`, 
                                                    500,
                                                    ()=>{axios.get('https://fj9qgaqsh3.execute-api.us-east-1.amazonaws.com/dev/skills/linkedinAssessments', {}).then(resp => {setAssessments(resp.data.assessments);}).then(()=>setCodeFifthType(true));}
                                                    ]}
                                                    wrapper="span"
                                                    cursor={false}
                                                    repeat={0}
                                                    style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', paddingLeft: 30}}
                                            />
                                        </span>
                                        }
                                    </li>
                                    <li style={{height: isMobile ? '8.5' : ninetyHeightBreak ? '15%' : '8.5%', fontSize: ninetyHeightBreak ? '0.8em' : eightyBreak ? '0.8em' : undefined}}>
                                    {codeFifthType && 
                                        <span>
                                        {'>'}
                                        <a href="https://www.linkedin.com/in/zachary-russell-4979011b0/#skills" style={{cursor: 'pointer'}} target="_blank" rel="noreferrer">
                                            <TypeAnimation
                                                    sequence={[
                                                    `let experience = [${assessments.join(', ')}]`, 
                                                    2000, 
                                                    ]}
                                                    wrapper="span"
                                                    cursor={false}
                                                    repeat={0}
                                                    style={{ fontSize: '1em', color: '#FFFFFF', fontFamily: 'monospace', paddingLeft: 15}}
                                            />
                                        </a>
                                        </span>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECTS MOBILE */}

                <div id={!isMobile ? "projects" : "projectsMobile"} style={{marginTop: '-12%', minHeight: '20vh'}}>
                        <div className={!isMobile ? "fullWidth" : "fullWidthMobile"} style={{backgroundColor: '#242323', background: 'transparent'}}>
                            <h5 id={isMobile ? "mobile-h5" : null} >Technical <span style={{color: '#ff5164'}}>Projects</span></h5>
                            <div className={!isMobile ? "fullWidthBody" : "fullWidthBodyMobile"}>
                                <ProjectCard trigger={triggerMindful} project={"Mindful Mobile App"} img={0} info={projInfo[0].info} mobile={isMobile} eightyBreak={eightyBreak} ninetyBreak={ninetyBreak} ninetyHeightBreak={ninetyHeightBreak} thousandBreak={thousandBreak}/>
                                <ProjectCard trigger={triggerDiscord} project={"Project Management Bot"} img={1} info={projInfo[1].info} mobile={isMobile} eightyBreak={eightyBreak} ninetyBreak={ninetyBreak} ninetyHeightBreak={ninetyHeightBreak} thousandBreak={thousandBreak}/>
                            </div>
                        </div>
                </div>
                    {mindfulModal && 
                        <div className="popup-parent" style={{bottom: isMobile ? window.screen.height*0.85 : thousandBreak ? '1%' : undefined}}>
                            <div className="popup-blur" onClick={()=>{triggerMindful();}}/>
                            <div className={!isMobile ? "popup-main" : "popup-main-mobile"} style={{height: isMobile ? '80vh' : eightyBreak ? '60vh' : undefined, minWidth: eightyBreak ? '85vw' : undefined}}>
                                <div style={{flex: 1, flexDirection: 'row', width: '100%', height: isMobile ? '7%' :  '5%', position:'absolute', backgroundColor: '#242323',}}><GiCancel onClick={triggerMindful} size={ninetyHeightBreak ? 20 : eightyBreak ? 15 : 30} style={{color: '#FFFFFF', top: 10, left: 15, position:'relative', cursor: 'pointer'}}/></div>
                                <div className={!isMobile ? "popup-text-container" : "popup-text-container-mobile"}>
                                <MindfulPop mobile={isMobile} eightyBreak={eightyBreak} ninetyBreak={ninetyBreak} ninetyHeightBreak={ninetyHeightBreak} thousandBreak={thousandBreak}/>
                                </div>
                            </div>
                        </div>
                    }
                    {discordModal && 
                        <div className="popup-parent" style={{bottom: isMobile ? 0 : thousandBreak ? '1%' : undefined}}>
                            <div className="popup-blur" onClick={()=>{triggerDiscord();}}/>
                            <div className={!isMobile ? "popup-main" : "popup-main-mobile"} style={{height: isMobile ? '80vh' : eightyBreak ? '60vh' : undefined, minWidth: eightyBreak ? '85vw' : undefined}}>
                                <div style={{flex: 1, flexDirection: 'row', width: '100%', height: isMobile ? '7%' : '5%', position:'absolute', backgroundColor: '#242323',}}><GiCancel onClick={triggerDiscord} size={ninetyHeightBreak ? 20 : eightyBreak ? 15 : 30} style={{color: '#FFFFFF', top: 10, left: 15, position:'relative', cursor: "pointer"}}/></div>
                                <div className={!isMobile ? "popup-text-container" : "popup-text-container-mobile"}>
                                    <DiscordPop mobile={isMobile} eightyBreak={eightyBreak} ninetyBreak={ninetyBreak} ninetyHeightBreak={ninetyHeightBreak} thousandBreak={thousandBreak}/>
                                </div>
                            </div>
                        </div>
                    }
                </body>
            </div>
        </html>
    );
}

export default Home;