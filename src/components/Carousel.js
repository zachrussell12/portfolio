import React from 'react';
import { motion } from 'framer-motion';
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs';


import videos from '../data/videoPack';

import '../css/Carousel.css';

const focusTitles = ['Schedule Re-Shuffle', 'Scheduling Algorithm', 'Delay Schedule', 'Nightly Check-In', 'Natural Language Processing'];

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isMobile: props.mobile,
            currentItem: 0,
            fade: false,
            eightyBreak: props.eightyBreak,
            ninetyBreak: props.ninetyBreak,
            ninetyHeightBreak: props.ninetyHeightBreak,
            thousandBreak: props.thousandBreak,
        };
    }

    increase = () =>{
        this.setState({
            currentItem: this.state.currentItem === videos.length-1 ? 0 : this.state.currentItem + 1,
        });
    }

    decrease = () =>{
        this.setState({
            currentItem: this.state.currentItem !== 0 ? this.state.currentItem - 1 : videos.length-1,
        })
    }

    render(){

        const items = videos.map((data, i)=>{
            return(
                <div style={{maxHeight: "inherit", maxWidth: !this.state.isMobile ? "30vw" : "45vw", display: "flex", flexDirection: "column", flex: "1", alignItems: "center"}}>
                    <motion.video 
                        style={{objectFit: "inherit",}} poster={require('../images/mindfulSqaure.png')}
                        id='video' 
                        className={this.state.fade ? !this.state.isMobile ? 'fade' : "mobileFade" : !this.state.isMobile ? 'featureVideo' : 'featureMobile'}
                        onAnimationEnd={()=>{this.setState({fade: false})}}
                        onMouseOver={e => e.target.play()} 
                        onMouseOut={e=>{e.target.pause();}} 
                        src={videos[i]}
                        autoPlay={false}
                        onClick={e=>{if(this.state.isMobile){e.currentTarget.play();}}}
                     />
                     <p className={this.state.fade ? 'pFade' : null} style={{textAlign: "center", fontFamily: 'Roboto', fontWeight: 300, fontSize: !this.state.isMobile ? "1vw" : "6.5vw",}}>{focusTitles[i]}</p>
                </div>
            );
        })

        return(
            <div>
                {this.state.isMobile && <p style={{textAlign: 'center', color: '#606060', marginBottom: this.state.isMobile ? '13vh' :  this.state.ninetyHeightBreak ? '-5%' : this.state.eightyBreak ? '-5%' : 0, fontStyle: "italic", fontSize: '3.5vw'}}>*Click the logo to play the video.*</p>}
                {!this.state.isMobile && <p style={{textAlign: 'center', color: '#606060', marginBottom: this.state.ninetyHeightBreak ? '-5%' : this.state.eightyBreak ? '-5%' : 0, fontStyle: "italic", fontSize: '0.75vw'}}>*Hover over the logo to play the video.*</p>}
                <div id='test' className={!this.state.isMobile ? "carousel-container" : "carousel-container-mobile"} style={{height: this.state.eightyBreak ? '25vh' : undefined,}}>
                    <motion.button  style={{marginRight: 25, backgroundColor: '#363434'}} whileHover={{scale: 1.05, transition: {duration: 0.3}}} className={!this.state.isMobile ? "carousel-buttons" : "carousel-button-mobile"} onClick={()=>{this.decrease(); this.setState({fade: true})}}><BsArrowBarLeft className={!this.state.isMobile ? "carousel-button-icon" : "carousel-button-icon-mobile"}/></motion.button>
                    {items[this.state.currentItem]}
                    <motion.button style={{marginLeft: 25, backgroundColor: '#363434'}} whileHover={{scale: 1.05, transition: {duration: 0.3}}} className={!this.state.isMobile ? "carousel-buttons" : "carousel-button-mobile"} onClick={()=>{this.increase(); this.setState({fade: true})}}><BsArrowBarRight className={!this.state.isMobile ? "carousel-button-icon" : "carousel-button-icon-mobile"}/></motion.button>
                </div>
            </div>
        );
    }

}

export default Carousel;