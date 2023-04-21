import {createSlice} from "@reduxjs/toolkit";


const dataProviderSlice = createSlice({
    name: "Details",
    initialState: {
        personalData: {},
        educationData: {},
        experienceData: {},

        error: null,
        status: "pending"
    },

    reducers:{
        setPersonalData: (state,action)=>{
            const data =  action.payload;
            state.personalData = data;
        },
        setEducationData : (state, action)=>{
            const data =  action.payload;
            state.educationData = data;
        },
        setExperienceData : (state, action)=>{
            const data =  action.payload;
            state.experienceData = data;
        },
       

    }

});

export const {setPersonalData, setEducationData, setExperienceData} = dataProviderSlice.actions;
export default dataProviderSlice;