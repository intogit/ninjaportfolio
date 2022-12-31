import './About.css'
import  React from 'react';
import Education from './Education';
import {profilePhoto, aboutMe, education, programmingLanguages, webDevSkills, databaseSkills, Tools} from '../data';


const About =() =>{


    return (
        <>
        <div className='conatiner my-4'>
            <p className='about_me_heading '><span>01. </span>About me </p>
            <hr className='divider'></hr>
        </div>
        
            <div className="row about_me">
                    <div className='about_me_content_container'>
                        <div className='about_me_description'>{aboutMe}</div>
                        <br></br>
                        <div className='educationtitle'>Education:</div>
                        <div className='education_intitute'>
                            {education.map((institute, i) => (
                                <div>
                                    <Education institute = {institute}></Education>
                                
                                    {/* <div className=' education_details'>
                                        
                                        <div><span>{i+1}.&emsp; </span>{institute.degree} in {institute.branch} from {institute.name} ({institute.gradYear}).</div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                        <br></br>
                        <div className='technical__skill_title'>Key Technical Skills:</div>
                        <div className='technical_skill_details'><span>Programming Language:&emsp;</span>{programmingLanguages}</div>
                        <div className='technical_skill_details'><span>Web Development Technologies:&emsp;</span>{webDevSkills}</div>
                        <div className='technical_skill_details'><span>Database:&emsp;</span>{databaseSkills}</div>
                        <div className='technical_skill_details'><span>Tools:&emsp;</span>{Tools}</div>    
                        

                    </div>
                    <div className='profile_photo_container'>
                        <div className='p-5 profile_photo_wrapper'>
                            <img src={profilePhoto} className=" img-fluid mx-auto d-block profile_photo" alt="Abhishek Yadav"></img>
                        </div>
                    </div>

            </div>
        </>
    )
}
export default About;