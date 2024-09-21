import React from 'react';
import { useState } from 'react';
import "../styles/Page1.css";
import { useNavigate } from "react-router-dom";
const Page1 = ({route, method}) => {
  const [selectedMode, setSelectedMode] = useState('');

  // Function to handle radio button changes
  const handleSelectionChange = (event) => {
    setSelectedMode(event.target.value);
  };
  const navigate = useNavigate();
  const onClick = async(e) => { 
    navigate("/page2");
  }
  return (
    <div>
      <div className='getting-started'>
        <div className='steps'>1/3</div>
        <div className='gt-t1'>Getting Started</div>
        <div className='optionss'>
          <label className={`option-box ${selectedMode === 'freelancer' ? 'active' : ''}`}>
            <input
              type="radio"
              name="mode"
              value="freelancer"
              checked={selectedMode === 'freelancer'}
              onChange={handleSelectionChange}
            />
            I’m a Student, looking for work.
          </label>

          <label className={`option-box ${selectedMode === 'employer' ? 'active' : ''}`}>
            <input
              type="radio"
              name="mode"
              value="employer"
              checked={selectedMode === 'employer'}
              onChange={handleSelectionChange}
            />
            I’m an Educator, hiring for a project.
          </label>
        </div>

        {/* Conditional Button Text */}
        <div style={{ marginTop: '20px' }}>
          <button className='butt-012' onClick={onClick}>
            {selectedMode === 'freelancer' ? 'Apply as Freelancer' : 'Apply as Employer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;