import React from "react";
import { useSelector } from "react-redux";
import PersonalDetails from "./personalDetails";


const Preview = ()=>{
    const personalData = useSelector(state=>state.Details.personalData);
    const educationData = useSelector(state=>state.Details.educationData);
    const experienceData = useSelector(state=>state.Details.experienceData);

    console.log(personalData)

    return(
        <div className="form-container">
            <div className="personalDetails">
                <h1>Personal Details:</h1>
                        <div>
                            <p>Name: {personalData.firstName} {personalData.lastName}</p>
                            <p>Gender: {personalData.gender}</p>
                            <p>Phone: {personalData.phone}</p>
                        </div>
            </div>

            <div className="educationDetails">
                <h1>Educational:</h1>
                        <div>
                            <p>Graduation: {educationData.graduation}</p>
                            <p>Intermediate: {educationData.inter}</p>
                            <p>10'th: {educationData.ten}</p>
                        </div>
            </div>

            <div className="experienceDetails">
                <h1>experience:</h1>
                        <div>
                            <p>Company: {experienceData.company}</p>
                            <p>Years: {experienceData.years}</p>
                            <p>Technology: {experienceData.technology}</p>
                        </div>
            </div>

        </div>
    )
}

export default Preview