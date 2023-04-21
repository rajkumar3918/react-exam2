import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import PersonalDetails from './pages/personalDetails';
import EducationDetails from './pages/educationDetails';
import ExperienceDetails from './pages/experienceDetails';
import Preview from './pages/preview';

function App() {
  return (
    <div className="App">
      <div className='progress'>

      </div>
      <Routes>
        <Route index element={<PersonalDetails/>}/>
        <Route path='/education' element={<EducationDetails/>}/>
        <Route path='/experience' element={<ExperienceDetails/>}/>
        <Route path='/preview' element={<Preview/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
