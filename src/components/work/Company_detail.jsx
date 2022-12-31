import './Company_detail.css';


const Company_detail =(props)=>{
    return (
        <>
            <div className="container company_details py-2 px-2">
                <div className='company_heading'>{props.company.role} <span>@ {props.company.name}</span></div>
                <div className='company_from_to'>{props.company.from_to}</div>
                <div className='my-3'>
                    <ul>
                        <li className='job_desc'>{props.company.job_desc_1}</li>
                        <li className='job_desc'>{props.company.job_desc_2}</li>
                        <li className='job_desc'>{props.company.job_desc_3}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Company_detail;