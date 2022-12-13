import './Header.css';
import {name} from '../data';


const Header = () => {

    const logo = {name}.name[0];
    const handleDownlaodResume = (event) => {
        event.preventDefault();
        console.log("clicked for downloading resume");
    }

    return (
        <>
            <div className='header m-5'>
                <div className="row ">
                    <div>
                        <div className='px-2 left_top_logo'>{logo}</div>
                        <div className='px-2 mx-2 right_top_resume' onClick={handleDownlaodResume}>Resume</div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>04. </span>Contact </div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>03. </span>Projects</div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>02. </span>Work Experience</div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>01. </span>About me</div>    
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;