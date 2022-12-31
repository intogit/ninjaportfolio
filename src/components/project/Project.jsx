import {projects, github} from '../data';
import './Project.css';
import ProjectDetail from './ProjectDetail'


const Project = () => {

    const handleGithubRedirect  = () => {
        window.open(github);
    }

    return ( 
        <>
            <div className='my-5'>
                <p className='project_heading '><span>03. </span>Some Things I've Built</p>
                <hr className='divider'></hr>

                <div className='container'>
                    {projects.map((project, i) => (
                        <div>
                            <ProjectDetail project = {project}></ProjectDetail>
                        </div>
                    ))}        
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <button className='button px-4 py-3' onClick={handleGithubRedirect}>View More</button>
                </div>
                <br></br>
                <br></br>
            </div>

            


        </>
    )
}

export default Project;