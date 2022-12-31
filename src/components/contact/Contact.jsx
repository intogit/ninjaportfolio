import './Contact.css';
import { FiGithub,  FiInstagram, FiLinkedin} from 'react-icons/fi';
import {SiCodeforces, SiLeetcode, SiGeeksforgeeks} from 'react-icons/si';
import {FaHackerrank} from 'react-icons/fa';

import {email,linkedin, github, instagram, leetcode, codeforces, geeksforgeeks, hackerrank} from "../data";

const Contact = () => {
    const handleEmailRequest = () => {
        location.href = "mailto:"+email;
    }
    
    return (
        <>
            <div className='contact_us_container'>
                <div className='my-4 contact_us_first_line'>04. What's Next?</div>
                <div className='my-2 contact_us_heading'> Get In Touch</div>
                <div className='contact_us_description'>Actively looking for any new opportunities, my inbox is always open. Whether you have a question or have an offer, I'll be happy to work with you!</div>
                <div className='my-5 contact_us_button '>
                    <button className='px-4 py-3 button' onClick={handleEmailRequest}> Say Hello </button>
                </div>
            </div>
                <div className='my-3 social_media_links d-flex justify-content-evenly'>
                    <div><a href={github} target="_blank"> <FiGithub className='icons' color='var(--slate)' size='30px'></FiGithub> </a></div>
                    <div><a href={linkedin} target="_blank"> <FiLinkedin className='icons' color='var(--slate)' size="30px"></FiLinkedin></a></div>
                    <div><a href={instagram} target="_blank"> <FiInstagram className='icons' color='var(--slate)' size='30px'></FiInstagram> </a></div>
                
                    <a href={codeforces} target="_blank"> <SiCodeforces className='icons' color='var(--slate)' size='30px'></SiCodeforces> </a>
                    <a href={leetcode} target="_blank"> <SiLeetcode className='icons' color='var(--slate)' size="30px"></SiLeetcode></a>
                    <a href={geeksforgeeks} target="_blank"> <SiGeeksforgeeks className='icons' color='var(--slate)' size='30px'></SiGeeksforgeeks> </a>
                    <a href={hackerrank} target="_blank"> <FaHackerrank className='icons' color='var(--slate)' size='30px'></FaHackerrank> </a>
                </div> 
                <br></br>
                <br></br>
        </>
    )
}

export default Contact;