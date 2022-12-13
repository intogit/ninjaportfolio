import Header from "./header/Header.jsx";
import HeaderContent from "./header/HeaderContent.jsx";
import AboutMe from "./about/About.jsx";
import Work from "./work/Work.jsx";
import Project from "./project/Project.jsx";

import './Portfolio.css';



const Portfolio = () => {
    return (
        <>
            <Header></Header>
            <div className="m-5">
                <div className="m-5">
                    <HeaderContent></HeaderContent>
                    <AboutMe></AboutMe>
                    <Work></Work>
                    <Project></Project>
                </div>
            </div>
            
        </>
    )
}
export default Portfolio;