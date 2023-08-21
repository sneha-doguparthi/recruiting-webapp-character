import "./ClassList.css";
import { CLASS_LIST } from './consts.js';


export function ClassList({ doesCharacterMeetRequirements }) {
    const classeTitle = "Classes"
    return (
        <div>
            <h2>{classeTitle}</h2>
            {Object.keys(CLASS_LIST).map((ele) => (
                <div key={ele} className={doesCharacterMeetRequirements(ele) ? 'available' : 'unavailable'}>
                    {ele}
                </div>
            ))}
        </div>
    );
}