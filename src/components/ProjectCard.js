//Libraries
import React from 'react';
import { motion } from 'framer-motion';

//CSS
import '../css/ProjectCard.css';

//Images
import mindful from '../images/mindful.png';

class ProjectCard extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            proj: props.project,
            image: props.img,
            info: props.info,
            isMobile: props.mobile,
            eightyBreak: props.eightyBreak,
            ninetyBreak: props.ninetyBreak,
            ninetyHeightBreak: props.ninetyHeightBreak,
            thousandBreak: props.thousandBreak
        };
    }


    render(){
        return(
            <motion.div onClick={()=>{this.props.trigger();}} whileHover={{scale: 1.05, transition: {duration: 0.3, ease: 'easeInOut'}}} className={!this.state.isMobile ? "projContainer" : "projContainerMobile"} style={{height: this.state.isMobile ? undefined : this.state.ninetyHeightBreak ? '60vh' : this.state.eightyBreak ? '60vh' : '40vh', width: this.state.isMobile ? undefined : this.state.ninetyHeightBreak ? '30vw' : this.state.eightyBreak ? '45vw' : '15vw'}}>
                <img className='projImage' src={this.state.image === 0 ? mindful : this.state.image === 1 ? 'https://support.discord.com/hc/article_attachments/1500015317842/Rebrand_Blog__1_.png' : null} alt="project graphic"/>
                <div className={!this.state.mobile ? 'projInfo' : 'projInfoMobile'}>
                    <h3>
                        {this.state.proj}
                    </h3>
                    <p>
                        {this.state.info}
                    </p>
                </div>
            </motion.div>
        );
    }
}

export default ProjectCard;