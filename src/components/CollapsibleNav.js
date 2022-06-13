import React from 'react';
import { motion } from 'framer-motion';

import '../css/CollapsibleNav.css';

class CollapsibleNav extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showNav: props.navBar,
        };
    }

    render(){
        return(
            <motion.div animate={{y: [-150, 50], transition: {duration: 0.75}}} id="collapsibleContainer">
                <motion.a animate={{opacity: [0, 1], transition: {duration: 0.2}}} style={{paddingTop: 10}}>
                <motion.p>About</motion.p>
                </motion.a>
                <motion.a href="#education" animate={{opacity: [0, 1], transition: {duration: 0.2, delay: 0.1}}}>
                    <motion.p>Education</motion.p>
                </motion.a>
                <motion.a href="#certifications" animate={{opacity: [0, 1], transition: {duration: 0.2, delay: 0.2}}}>
                    <motion.p>Certifications</motion.p>
                </motion.a>
                <motion.a animate={{opacity: [0, 1], transition: {duration: 0.2, delay: 0.3}}} style={{paddingBottom: 10}}>
                    <motion.p>Projects</motion.p>
                </motion.a>
            </motion.div>
        );
    }
}

export default CollapsibleNav;