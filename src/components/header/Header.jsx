import './Header.css';
import { resume_url } from '../data';

const Header = () => {

    const handleDownlaodResume = (event) => {
        event.preventDefault();
        window.open(resume_url, '_blank');
    }

    return (
        <>
            <div className='header my-5'>
                <div className="header_row">
                        <div className='px-2 mx-2 right_top_menu_link' ><span>01. </span>About me</div>
                        <div className='px-2 mx-2 right_top_menu_link' ><span>02. </span>Work Experience</div>
                        <div className='px-2 mx-2 right_top_menu_link' ><span>03. </span>Projects</div>    
                        <div className='px-2 mx-2 right_top_menu_link' ><span>04. </span>Contact </div>
                        <div className='px-3 py-2 mx-2 right_top_resume' onClick={handleDownlaodResume}>Resume</div>
                </div>
            </div>
        </>
    )
}
export default Header;