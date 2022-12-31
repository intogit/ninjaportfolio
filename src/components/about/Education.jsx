import React from "react";
import './Education.css';

const Education = (props) => {
    console.log(props);
    return (
        <>  
            <div className="edu_institute">
                <div className="institute_degree_n_branch">{props.institute.degree}</div>
                <div className="institute_degree_n_branch">{props.institute.branch}</div>
                <div>{props.institute.name}</div>
                <div>{props.institute.gradYear}</div>
            </div>
        </>

    )
}

export default Education;