import React from 'react';
import {motion} from 'framer-motion';
import {SiGithub} from 'react-icons/si';

import '../css/DiscordFocus.css';

class DiscordPop extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            isMobile: props.mobile,
            eightyBreak: props.eightyBreak,
            ninetyBreak: props.ninetyBreak,
            ninetyHeightBreak: props.ninetyHeightBreak,
            thousandBreak: props.thousandBreak
        };
    }

    render(){
        return(
            <div style={{overflowY: 'scroll', width: '100%', paddingInline: 5}}>
                    <section id="overview" style={{paddingTop: this.state.isMobile ? "5vh" : 50,}} className={!this.state.isMobile ? "sectionContainer" : "mobileContainer"}>
                        <h5 className={this.state.isMobile ? "mobileH5" : "sectionHeader"}>
                            Overview
                        </h5>
                        <div id="overview-container">
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                {!this.state.isMobile && <img style={{width: "25%", float: "right", marginLeft: "1.5%", borderRadius: "5%", overflow: 'hidden'}} alt="phone on a background with notepad" src={require('../images/projInfo.png')}/>}
                                This bot was a project born out of other passions projects I took up. Before this project management bot I had created a number of other bots for my friends and I in our own Discord server. These bots were simple ones
                                like assigning roles to different users, and another bot that used those roles to find people for you to play with.
                                {this.state.isMobile && <img style={{width: "100%", marginBlock: "5%", borderRadius: "5%", overflow: 'hidden', alignSelf: 'center'}} alt="phone on a background with notepad" src={require('../images/projInfo.png')}/>}
                                After having a lot of fun creating these bots for my friends, I wanted to make something that would be a a little more useful. Discord is marketed for the gaming communitty
                                but I see it as a platform with more potential than Slack and other collaboration applications. I wanted Discord to be useful in a professional environment.
                            </p>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>What is the main functionality?</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                                The Project Coordinator Bot's purpose was to fill what most companies would call a Discord administrator role. This is a person that oversees the interworking of a server and is responsible for 
                                setting up channels, informative pieces, and other things you'd need to welcome a community. The Project Coordinator Bot was created with the intention that a whole group of people from a company could
                                join the server, and the bot would organize them into their project team's as needed. From there, every team would have their own separate channels and a range of tools to use in order to get their project done
                                with maximum collaboration.
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
                                {!this.state.isMobile && <video style={{width: "35%", float: "right", marginLeft: "1.5%", borderRadius: "5%", overflow: 'hidden', objectFit: "cover",}} autoPlay="true" loop="true" src={require('../videos/createNewExample.mp4')}/>}
                                The target audience for the bot is mainly small companies, start-ups, or branches inside a company. This is the audience where the bot would be most beneficial. Any larger scale than this and it is better off giving
                                the users full control themselves for their needs, because as these teams get larget they'll need more customized functionality.
                            </p>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>What features make it useful to the target audience?</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                                One of the most useful features, and the main feature, is the bots ability to organize the server completely on its own. When making a new project, you can add important details like: the project name,
                                the project description, the project due date, the project manager, and team members. When that project is created, it takes the project manager and their team and gives them all their own role linked to the project
                                they're working on. This role allows them to view channels specific to their project only which include one text channel and one voice channel. Anyone else not in the project, cannot see what they're working on or access their voice channels.

                                {this.state.isMobile && <video style={{width: "100%", marginBlock: '5%', alignSelf: 'center', borderRadius: "5%", overflow: 'hidden', objectFit: "cover",}} autoPlay="false" loop="true" src={require('../videos/createNewExample.mp4')}/>}
                            </p>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"}>
                                The combination of this Project Coordinator Bot and the Discord platform make it the ultimate tool for collaborating. Discord allows voice, text, and video collaboration between users.
                                You can share files, links, almost anything you need. Paired with the Project Coordinator Bot to keep your discord server neat, it makes the ultimate tool for small teams.
                            </p>
                        </div>
                    </section>
                    <section id="breakdown" className={!this.state.isMobile ? "sectionContainer" : "mobileContainer"}>
                        <h5 className={this.state.isMobile ? "mobileH5" : "sectionHeader"} style={{textAlign: 'center'}}>
                            Technical Breakdown
                        </h5>
                        <div id="overview-container" style={{paddingBottom: "5%"}}>
                            <h3 className={this.state.isMobile ? "mobileH3" : "sectionSubHeader"} style={{color: '#FF5164'}}>Features of the Project Coordinator Bot</h3>
                            <p className={!this.state.isMobile ? "sectionP" : "mobileP"} style={{width: "100%"}}>
                                The Project Coordinator Bot was written using the Discord.js library. Discord.js makes it simple to interface and write code for the discord platform so that anyone can make a bot if they want to.
                                The bot runs inside a Docker container on my local machine, and all data related to the projects is stored in a MySQL database.
                            </p>
                            {!this.state.isMobile && <div className={!this.state.isMobile ? 'feature-container' : 'feature-container-mobile'} style={{width: this.state.ninetyHeightBreak ? '90%' : this.state.eightyBreak ? '90%' : undefined, height: this.state.eightyBreak ? '100vh' : undefined}}>
                                {/*Create New Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!createnew</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The !createnew command comprises the entire project creation process into a simple conversation. The bot actually uses multiple functions to collect each individual piece of information about the 
                                        project. By isolating each piece of information to its own function, it can allow the user to go one step back in the process and correct something if they need to. This also stops the bot from 
                                        erroring out if the user enters incorrect information. The bot can then simply recall the function to ask for the information again, or if the user wants to go back a step the bot simply calls the previous function to gather the user input again.
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        Once the bot collects all the user input, it compiles it all together and sends it off to the dedicated embed functions to be printed for the user's viewing. The embed file has multiple functions to create different 
                                        embeds for different situations. The bot sends the project information to the designated function where it creates the embed and returns it to the bot. The bot can then send the embed to the user to confirm the information.
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        Once the information is verified, the bot takes all the user input and sends it off to a specific function in the separate MySQL file to be inserted into the database. 
                                        Once the bot gets confirmation back from the database that the insertion was successful, it continues on to the role and channel creation. The bot first creates a role for the project from the
                                        project's name and gives the project manager and the team the role. This role is what will be used to give them access to their designated channels. 
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        Once all project team members have their role, the bot moves onto creating their channels. First the project's category is created, this is where all its designated channels will be stored. 
                                        The bot then creates a single voice channel and single text channel for the team. The category and both channels in it are only accessible by the project team, any administrators of the server, and the bot itself. The team members are given basic role permissions in these channels and can be given more extensive permissions by administrators if they deem it necessary.
                                    </p>
                                </div>
                                {/*Display Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!display</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The display command has different parameters that are run with it that determine what projects need to be displayed. If a user runs the <span style={{fontStyle: "italic"}}>!display all</span> command, the bot will 
                                        create a query to select all projects in the database with the same server ID that the user requested it from. From there, the bot will go down the list of projects and print each of them out 
                                        through a project embed for the user. If a user runs the <span style={{fontStyle: "italic"}}>!display in-development</span> version of the command, the bot will create a query to select all projects with the same server ID as 
                                        the user, but it will also only select projects with the state of in-development. That way all project that are sent to the embed functions and printed are only ones that are currently in development.
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        It is important that the server ID is passed to the MySQL functions from the bot. If this bot were on multiple different Discord servers it needs to distinguish all of them from each other. A user on one server should not
                                        have access to another servers projects. The ID is unique to every Discord server and allows proper security across multiple servers.
                                    </p>
                                </div>
                                {/*Update Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!update</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The update function allows the user to update specific information about a project the user selects. When the !update command is entered by a user, the bot prompts the user with the 
                                        current list of projects the server has in the database. The user then enters the project name they want to edit, following this the bot then prompts them to what field they would like to edit. 
                                        The user enters the updated information and the bot makes the changes to the project. Once done the bot confirms that the project was successfully updated.
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        This command also works when the team members need to be updated. Because the bot creates so many things that are project specific it has to adjust all of those things when the team members are changed.
                                        If a team member is removed from the project, they'll be stripped of their role and lose access to the project specific channels. Any new team members added will be given the project specific role and granted
                                        access to the project specific channels.
                                    </p>
                                </div>
                                {/*Delete Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!delete</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The delete command deletes all information related to a project! First the function checks to see if the project the user wants to delete even exists. If it doesn't, the bot doesn't 
                                        bother doing anything else and tells the user it does not exist in the database. If the project does exist, the bot first deletes it from the database. Once it is removed from the database, 
                                        the bot sequentially deletes each channel belonging to the project, thus removing anything in those channels. From there the bot will scour both the reminders JSON file and the project due dates JSON file. 
                                        Using the project's role ID, he'll remove any reminders from the JSON file and the due date from its JSON file. Once that is completed, the bot will completely delete the project role, leaving no trace of the project.
                                    </p>
                                </div>
                                {/*Note Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!note</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The note command allows project team members to create textual notes to attach to the project's information and be stored in the database with it. This system takes the date the note was written, 
                                        the user that wrote it, and the content of the note itself. The bot simply prompts the user for their note, once the user enters what they want, the bot attaches it to the project. The notes have multiple 
                                        possibilities like using them to store links to shared files that team members might need. 
                                    </p>
                                </div>
                                {/*Print Notes Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!printnotes</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        This command lets the project team see all notes attached to their current project. The bot uses the project's name to find it in the database and pull its information. From there the bot takes the notes 
                                        field from the project, sends it off to the embed file to be converted into embeds, and then sends them back to be printed in the project's text channel.
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        Anything in these notes will be viewable in the channel by the project team. That includes any links of other such things that team members wanted to share with others.
                                    </p>
                                </div>
                                {/*Progress Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!progress</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        When run in a project specific channel the bot will update that project's status. A project can have 4 different statuses: Created,
                                        In Planning, In Development, and Finished. It is a simple command that updates the database on how the project is progressing, however when an object reaches its <span style={{fontStyle: "italic"}}>Finished</span> stage, the bot generates
                                        an informative document for the project team. This simple PDF file encompasses all of the projects information as well as any notes that were written. Everything is built into a PDF by the bot and 
                                        sent in the project text channel for the team to keep. 
                                    </p>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        The bot <span style={{fontStyle: "italic"}}>will not</span> automatically delete a project once it has reached its finished stage. This is because the team may have information or other uses for these channels while they wrap up their work.
                                        This gives them time to access anything they need to before they are truly done, then the project can be deleted using the <span style={{fontStyle: "italic"}}>!delete</span> command.
                                    </p>
                                </div>
                                {/*Remind Command*/}
                                <div className={!this.state.isMobile ? 'feature-cell' : 'feature-cell-mobile'}>
                                    <h2 className={!this.state.isMobile ? 'feature-h2' : 'feature-h2-mobile'}>
                                        The <span style={{color: '#FF5164'}}>!remind</span> Command
                                    </h2>
                                    <p className={!this.state.isMobile ? 'feature-p' : 'feature-p-mobile'}>
                                        This command lets users have yet another place to remind themselves to do their work. Users can use the remind command to tell the bot to ping them on a certain day to do whatever they needed to remember. 
                                        Upon running this command, the bot will ask for the title of the reminder, then a small note to go with it, and finally the date the user wishes to be reminded on. For right now, the bot will only remind the user on the day after 10:30am. 
                                        Due to processing, hardware restrictions, and the bots proof of concept nature, the bot cannot constantly keep checking the time if a user wanted a specific time. 
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </section>
            </div>
        );
    }

}

export default DiscordPop;