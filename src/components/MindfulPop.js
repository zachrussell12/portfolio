import React from 'react';

import "../css/MindfulFocus.css";

//Components
import Carousel from '../components/Carousel';

class MindfulPop extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            isMobile: props.mobile,
            eightyBreak: props.eightyBreak,
            ninetyBreak: props.ninetyBreak,
            ninetyHeightBreak: props.ninetyHeightBreak,
            thousandBreak: props.thousandBreak,
        };
    }

    render(){

        return(
            <div style={{overflowY: 'scroll', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <section id="overview" style={{paddingTop: this.state.isMobile ? "5vh" : 50}} className={!this.state.isMobile ? "sectionContainer" : "mobileContainer"}>
                    <h5 className={this.state.isMobile ? "mobileH5" : "sectionHeader"}>
                        Overview
                    </h5>
                    <div id="overview-container">
                        <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                            {!this.state.isMobile && <img style={{width: "50%", float: "right", marginLeft: "1.5%", borderRadius: "5%", overflow: 'hidden'}} alt="phone on a background with notepad" src={require('../images/overview.png')}/>}
                            Mindful is the next step in the lifestyle mobile app category. An app that learns about you as you use it and adjust itself to cater to you.
                            What is it adjusting you might ask? Mindful uses a special algorithm and stress-threshold system to schedule your day for you in a way that eliminates overwhelment.
                            {this.state.isMobile && <img style={{width: "100%", marginBlock: "5%", borderRadius: "5%", overflow: 'hidden'}} alt="phone on a background with notepad" src={require('../images/overview.png')}/>}
                            Our world today is full of different stressors and hardships that distract us from living the healthy lifestyle we all want to live. Many people think they don't have
                            the time, or don't want to put the energy into structuring their day to make time for things they enjoy. Some people also embrace what many call "grind culture" and think that
                            constantly working means that you are successful and winning at life surpassing everyone else, however time has shown that slow growth is just as good, if not better than constantly working.                            </p>
                        <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>What is the main functionality?</h3>
                        <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                            Mindfuls main functionality is to eliminate unwanted stress, promote healthy growth, bring structure to the user's day-to-day, and eliminate burnout. Burnout is a common
                            thing that happens in many young adults and/or students. Ending every day exhausted and overwhelmed can lead to you eventually breaking down completely and possibly giving up on
                            important things like a job, school, or relationships. Mindful wants to use it's algorithm to create a schedule every day for you that lets you be efficient and productive, but also 
                            leaves time for taking breaks, doing fun activities, and completing daily wellness needs.
                        </p>
                        <p style={{fontWeight: 500, color: "#FF5164", fontSize: !this.state.isMobile ? "1.25vw" : "4.25vw", textAlign: 'left'}}>
                            Mindful is the next evolution to the daily schedule.
                        </p>
                    </div>
                </section>
                <section id="usecase" className={!this.state.isMobile ? "sectionContainer" : "mobileContainer"}>
                        <h5 className={this.state.isMobile ? "mobileH5" : "sectionHeader"}>
                            Use Case
                        </h5>
                        <div id="overview-container">
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>Who is the target audience?</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                {!this.state.isMobile && <img style={{width: "50%", float: "right", marginLeft: "1.5%", borderRadius: "5%", overflow: 'hidden'}} alt="Dinosaur at a computer" src={require('../images/useDino.png')}/>}
                                Mindful's target audience are young adults and/or students, approximately the age of 17-28. This is the audience that is most susceptible to false stereotypes and the audience that is
                                the most lost in their life. Most young adults finishing high school have little knowledge of the world around them and how to navigate it. They lack proper time management and item prioritizing.
                                This is where Mindful can be most useful. At an audience that is looking for guidance in a busy and stressful time of their lives where they need help finding balance. Instead of falling
                                victim to hyperbolic stereotypes and "grind culture" they can learn healthy scheduling behaviour to make sure they do not burn themselves out.
                            </p>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>What features make it useful to the target audience?</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                                Mindful has a range of different features that make it a unique and useful scheduling application. The scheudling algorithm is a huge part of Mindful. The algorithm, written by myself and backed by research,
                                schedules a user's day in a modified wind-down structure. As research that I have done has showed this the most beneficial way to schedule your day, so Mindful does its best to make sure
                                everything is scheduled in this manner. If a user doesn't like their schedule, the algorithm can re-shuffle it over, and over, and over. 
                                {this.state.isMobile && <img style={{width: "100%", marginBlock: "5%", borderRadius: "5%", overflow: 'hidden'}} alt="Dinosaur at a computer" src={require('../images/useDino.png')}/>}
                            </p>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                                Another key part that would make this useful to Mindful's target audience is the stress-threshold system. This system creates an estimate fit for how many stressful activities you can handle in a day.
                                Every night you report your completions to the app, from those nightly check-ins Mindful is able to calculate how efficient you are based upon how many stressful activites you scheduled that day.
                                With every nightly check-in the app shifts and adjusts to your growth. This stress-threshold system is used to alert the user when they may be scheduling too much than they can handle. Studies have shown
                                that repeatedly exposing yourself to stress even overstimulation can adversly affect brain function.
                            </p>
                        </div>
                    </section>
                    <section id="breakdown" className={!this.state.isMobile ? "sectionContainer" : "mobileContainer"}>
                        <h5 className={this.state.isMobile ? "mobileH5" : "sectionHeader"}>
                            Technical Breakdown
                        </h5>
                        <div id="overview-container" style={{paddingBottom: "20%"}}>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>How was Mindful created?</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                {!this.state.isMobile && <img style={{width: "35%", float: "right", marginLeft: "1.5%", borderRadius: "5%", overflow: 'hidden'}} alt="Tools on a background" src={require('../images/tech.png')}/>}
                                Mindful was created using React Native. It was built in conjunction with the Expo Go platform in order for it to be easily testable on IOS devices.
                                This also makes it very easy to simultaneously code for and test of both IOS and Android simultaneously. Mindful has been under production for almost a year now
                                and is nearing the public beta stage. 
                            </p>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                Careful consideration was taken for all of Mindful's features in order to make it the best app it could possibly be. That includes extensive research into psychological
                                and medical studies conducted around the world. Each feature of Mindful was crafted with these studies in mind and shaped the app as a whole in order to give the best experience.
                                {this.state.isMobile && <img style={{width: "100%", marginBlock: "5%", borderRadius: "5%", overflow: 'hidden'}} alt="Tools on a background" src={require('../images/tech.png')}/>}
                            </p>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                Specifically, the UI of Mindful was crafted
                                with a few points in mind. The main point being that Mindful, although is made to relieve overwhelment and stress, could ultimately be a source of stress. When you open the app, the first thing
                                you see is everything you have to do that day, which has the potential to overwhelm somone at first glance; so the UI was designed to be as simple and sleek as possible to avoid clutter and subconcious 
                                overwhelment from the UI.
                            </p>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>Let's look at a few features.</h3>
                            <Carousel mobile={this.state.isMobile} eightyBreak={this.state.eightyBreak} ninetyBreak={this.state.ninetyBreak} ninetyHeightBreak={this.state.ninetyHeightBreak} thousandBreak={this.state.thousandBreak}/>
                        </div>
                    </section>
            </div>
        );
    }

}

export default MindfulPop;