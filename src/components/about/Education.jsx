import React from "react";
import './Education.css';

const Education = (props) => {
    console.log(props);
    return (
        <>  
            <div className="edu_institute">
                <ul><li>
                <div className="institute_degree_n_branch">{props.institute.degree}</div>
                <div className="institute_degree_n_branch">{props.institute.branch}</div>
                <div>{props.institute.name} &nbsp; [{props.institute.gradYear}]</div>
                </li></ul>
            </div>
        </>

    )
}

export default Education;