import './Header.css';


const Header = () => {

    const handleDownlaodResume = (event) => {
        event.preventDefault();
        console.log("clicked for downloading resume");
    }

    return (
        <>
            <div className='header my-5'>
                <div className="header_row">
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>01. </span>About me</div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>02. </span>Work Experience</div>
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>03. </span>Projects</div>    
                        <div className='px-2 mx-2 right_top_menu_link' onClick={handleDownlaodResume}><span>04. </span>Contact </div>
                        <div className='px-3 py-2 mx-2 right_top_resume' onClick={handleDownlaodResume}>Resume</div>
                </div>
            </div>
        </>
    )
}
export default Header;