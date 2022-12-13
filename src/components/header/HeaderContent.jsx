import {oneLineSummary, shortSummary, name} from '../data';
import './HeaderContent.css'

const HeaderContent = () =>{
    return (
        <>
            <div className="py-5 header_content">
                    <div className='header_content'>
                        <div className='header_first_line'>Hi, my name is</div>
                        <div className='display-1 header_name'>{name}.</div>
                        <div className='display-2 header_oneline'>{oneLineSummary}</div>
                        <div className='header_shortSummary'>{shortSummary}.</div>
                    </div>
            </div>
        </>
    )
}
export default HeaderContent;