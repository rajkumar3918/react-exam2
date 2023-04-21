import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setPersonalData } from "../redux/slice/detaproviderSlice";
import { useNavigate } from "react-router";


const PersonalDetails = ()=>{
    const dispatch = useDispatch();
    const formRef = useRef();
    const [personaldata, setData] = useState({});
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        const form = formRef.current
        setData({
            firstName : form.firstname.value,
            lastName : form.lastname.value,
            gender: form.gender.value,
            email: form.email.value,
            phone : form.phone.value
        });
        
    }
    console.log(personaldata);

    
    
    useEffect(()=>{
        if(personaldata)
        {
            dispatch(setPersonalData(personaldata));
            
        }
    },[personaldata])

    return(
        <div>
            <form ref={formRef} onSubmit={submitHandler}>
            <input name="firstname" placeholder="First Name" type="text" required/>
            <input name="lastname" placeholder="Last Name" type="text" required/>
            <input name="gender" placeholder="Gender" type="text" required/>
            <input name="email" placeholder="Email" type="email" required/>
            <input name="phone" placeholder="Phone Number" type="text" required/>
            <button type="submit">Submit</button>
            <button onClick={()=>navigate("/education")}>Next</button>
            </form>
        </div>
    )
}

export default PersonalDetails;