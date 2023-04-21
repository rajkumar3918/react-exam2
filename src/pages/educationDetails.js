import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setEducationData } from "../redux/slice/detaproviderSlice";
import { useNavigate } from "react-router";


const EducationDetails = ()=>{
    const formRef = useRef();
    const dispatch = useDispatch();
    const [EduData, setData] = useState({});
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault();
        const form = formRef.current;
        setData({
            graduation: form.graduation.value,
            inter: form.inter.value,
            ten: form.tenth.value
        });
        
    }

    useEffect(()=>{
        dispatch(setEducationData(EduData));
    },[EduData])
    return(
        <div>
            <form ref={formRef} onSubmit={submitHandler}>
            <input name="graduation" placeholder="Graduation" type="text" required />
            <input name="inter" placeholder="Intermediate" type="text" required />
            <input name="tenth" placeholder="10'th" type="text" required />
            <button type="submit">submit</button>
            <button onClick={()=>navigate("/experience")}>Next</button>

            </form>
        </div>
    )
}

export default EducationDetails;
