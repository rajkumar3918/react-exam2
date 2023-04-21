import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setExperienceData } from "../redux/slice/detaproviderSlice";


const ExperienceDetails = ()=>{
    const formRef = useRef();
    const dispatch = useDispatch();
    const [ExpData, setData] = useState({});
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault();
        const form = formRef.current;
        setData({
            company: form.company.value,
            years: form.years.value,
            technology: form.technology.value
        });
        
    }

    useEffect(()=>{
        dispatch(setExperienceData(ExpData));
    },[ExpData])
    return(
        <div>
            <form ref={formRef} onSubmit={submitHandler}>
            <input name="company" placeholder="Company" type="text" required />
            <input name="years" placeholder="Years" type="text" required />
            <input name="technology" placeholder="Technology" type="text" required />
            <button type="submit">submit</button>
            <button onClick={()=>navigate("/preview")}>Next</button>

            </form>
        </div>
    )
}

export default ExperienceDetails;
