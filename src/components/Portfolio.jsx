import Header from "./header/Header.jsx";
import HeaderContent from "./header/HeaderContent.jsx";
import AboutMe from "./about/About.jsx";
import Work from "./work/Work.jsx";
import Project from "./project/Project.jsx";
import Contact from "./contact/Contact.jsx";

import './Portfolio.css';



const Portfolio = () => {
    return (
        <>
            <div className="container px-4">
                    <Header></Header>
                    <HeaderContent></HeaderContent>
                    <AboutMe></AboutMe>
                    <Work></Work>
                    <Project></Project>
                    <Contact></Contact>
            </div>
            
        </>
    )
}
export default Portfolio;