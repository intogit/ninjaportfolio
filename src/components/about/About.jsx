import './About.css'
import  React from 'react';
import Education from './Education';
import {profilePhoto, aboutMe1, aboutMe2, education, programmingLanguages, webDevSkills, databaseSkills, Tools} from '../data';


const About =() =>{


    return (
        <>
        <div className='conatiner my-4'>
            <p className='about_me_heading '><span>01. </span>About me </p>
            <hr className='divider'></hr>
        </div>
        
            <div className="row about_me">
                    <div className='about_me_content_container'>
                        <div className='about_me_description'>{aboutMe1}</div>
                        <div className='about_me_description'>{aboutMe2}</div>
                        <br></br>
                        <div className='educationtitle'>Education:</div>
                        <div className='education_intitute py-2'>
                            {education.map((institute, i) => (
                                <div>
                                    <Education institute = {institute}></Education>
                                </div>
                            ))}
                        </div>
                        
                        <div className='technical__skill_title py-2'>Key Technical Skills:</div>
                        <ul>
                        <li className='technical_skill_details'><span>Programming Language:&emsp;</span>{programmingLanguages}</li>
                        <li className='technical_skill_details'><span>Web Development Technologies:&emsp;</span>{webDevSkills}</li>
                        <li className='technical_skill_details'><span>Database:&emsp;</span>{databaseSkills}</li>
                        <li className='technical_skill_details'><span>Tools:&emsp;</span>{Tools}</li>    
                        </ul>

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