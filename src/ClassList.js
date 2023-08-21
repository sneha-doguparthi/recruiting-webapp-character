import { useState } from "react";
import "./ClassList.css";
import { CLASS_LIST } from './consts.js';

export function ClassList({ doesCharacterMeetRequirements }) {
    const [classRequirements, setClassRequirements] = useState({})
    const [className, setClassName] = useState("")
    const classeTitle = "Classes"
    const minimumRequirementsTitle = "Minimum Requirements"
    const onClassClick = (className) => {
        setClassName(className)
        setClassRequirements(CLASS_LIST[className])
    }
    return (
        <><div>
            <h2>{classeTitle}</h2>
            {Object.keys(CLASS_LIST).map((classElement) => (
                <div key={classElement} className={doesCharacterMeetRequirements(classElement) ? 'meets-requirements' : 'does-not-meet-requirements'} onClick={() => onClassClick(classElement)}>
                    {classElement}
                </div>
            ))}
        </div>
            {Object.keys(classRequirements).length > 0 && (
                <div>
                    <h2>{className} {minimumRequirementsTitle}</h2>
                    {Object.keys(classRequirements).map((attribute) => (
                        <span key={attribute}>
                            {attribute}: {classRequirements[attribute]} &nbsp;|&nbsp;
                        </span>
                    ))}
                </div>)}
        </>
    );
}