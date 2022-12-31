import './Work.css';
import { companies } from '../data';
import Company_detail from './Company_detail'

const Work =() => {
    return (
        <>
            <div className='my-3'>
                <p className='work_heading '><span>02. </span>Work Experience</p>
                <hr className='divider'></hr>
            </div>
            <div>
                {companies.map(((company, i) => (
                    <div>
                        <Company_detail company = {company}></Company_detail>
                    </div>
                ) ))}
            </div>
            
        </>
    )
}
export default Work;