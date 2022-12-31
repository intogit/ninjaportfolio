import { FiGithub } from 'react-icons/fi';
import {Deploy} from 'grommet-icons'
import './ProjectDetail.css'

const ProjectDetail = (props) => {

    const handleUrlRedirect = () => {
        const xyz = props.project.url;
        window.open(xyz);
    }

    return(
        <>
            <div className='container project_details p-3'>
                    <div className="col">
                        <div className='project_name ' onClick={handleUrlRedirect}>{props.project.name}</div>
                        <div className='project_description py-3'>{props.project.description}</div>
                        <div className='project_tech'>{props.project.techUsed}</div>
                        <div className="d-flex justify-content-start py-3">
                            <a href={props.project.repo} target="_blank"> <FiGithub color='var(--green)' size='30px'></FiGithub> </a>
                            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            <a href={props.project.url} target="_blank">  <Deploy color='var(--green)' size='30px'></Deploy>  </a>
                        </div>
                    </div>
                    <div className="project_image" onClick={handleUrlRedirect}>
                        <img src={props.project.img} className=" img-fluid mx-auto d-block project_ss"></img>
                    </div>
            </div>
        </>
    )
}

export default ProjectDetail;