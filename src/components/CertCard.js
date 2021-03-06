import React from "react";
import '../css/CertCard.css';
import {motion} from 'framer-motion';

import testOut from '../images/testOut.png';

class CertCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            certName: props.cert,
            img: props.img,
            href: props.certLink,
            isMobile: props.mobile,
        };
    }

    render(){
        return(
                <motion.button whileHover={{scale: 1.05, transition: {duration: 0.3, ease: 'easeInOut'}}} className={!this.state.isMobile ? "certContainer" : "certContainerMobile"} onClick={()=>{document.location.href= this.state.href;}}>
                    <motion.img src={this.state.img === '0' ? testOut : this.state.img} className="certImg" alt="certification logo"/>
                    <motion.div id="bottomContainer">
                        <p className={!this.state.isMobile ? "certName" : "certNameMobile"} id="name">{this.state.certName}</p>
                    </motion.div>
                </motion.button>
        );
    }

}

export default CertCard;