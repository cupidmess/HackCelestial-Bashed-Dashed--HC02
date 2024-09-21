import React from 'react'
import '../styles/Main_Page.css'
import { useState, useEffect } from 'react';
import bookmark from '../assets/bookmark.png'
import logo from "../assets/logo.png"
import search from "../assets/search.png"
// import coin from "../assets/coing.png"
import work from "../assets/work.png"
import talent from "../assets/talent.png"
import connect from "../assets/connect.png"
import msg from "../assets/msg.png"
// import notif from "../assets/notif.png"
import profile from "../assets/profile.png"
// import market from "../assets/market.jpeg"
// import card from "../assets/card.png"
import wallpaper from "../assets/wallpaper.png"
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Main_Page() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePostClick = async(e) => {
    navigate ("/post")
  } 
  const handleBid = async(e) => {
    navigate('/bid')
  }
  const handleLogout = async(e) => {
    navigate("/login")
  }
  useEffect(() => {
    // Perform the GET request using fetch
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/auth/jobposts/"); // Example API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the response JSON
        setData(data);  // Set the response data in state
        setLoading(false); // Mark loading as false after data is fetched
      } catch (error) {
        setError(error);  // Set error if request fails
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error: {error.message}</p>;

  return (
    <div> 
      <div className='body-mp'>
      <div className='nav-mp'>
        <img src = {logo} className='logo-mp'></img>
        <div className='searchbar-mp'>
         <img src ={search} className='search-mp'></img>
         <input type="text" placeholder="Search..." className='i-1-mp'></input>
        </div>
        <div className='find_work-mp'>
          <img src = {work} className='work-mp'></img> <div className='p1-mp'>Find Work</div>
        </div>
        <div className='find_talent-mp'>
          <img src ={talent} className='talent-mp'></img><div className='p1-mp'>My Mates</div>
        </div>
        <div className='connect-mp'>
          <img src ={connect} className='con-mp'></img> <div className='p1-mp'>Our Crowd</div>
        </div>
        <div className='message-mp'>
          <img src ={msg} className='msg-mp'></img> <div className='p3-mp'>Messages</div>
        </div>

        <div className='profile-mp'>
          <img src ={profile} className='prof-mp'></img> <div className='p4-mp'>Me</div>
        </div>
        <div className='logout-mp'>
          <button className='logout-mp-button' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className='main-mp'>
      <div className='left-mp'>
      <div className='box-1-mp'>
      <img src = {wallpaper} className='wp-mp'></img>
      <img src = {profile} className='pfp-mp'></img>
      <div className='title-mp'>
      <div className='bp-1-mp'>Shreya Bhoir</div>
      <div className='bp-2-mp'>Bharati Vidyapeeth College of Engineering | Second Year, CE</div>
      </div>
      <div className='box1-part2-mp'>
        
        <div className='bp-3-mp'>Faculty</div>
        <div className='bp-3-mp'>My Projects</div>
        <div className='bp-3-mp'>Research</div>
      </div>
      <div className='box1-part3-mp'>
        <img src ={bookmark}className='bookmark-mp'></img>Saved Items
      </div>
      </div>
      <div className='box-2-mp'>
      {/* <img src ={market} className='market-mp'></img> */}
      <div className='b-2-mp'>
        <div className='box2-p1-mp'>Workshops & Events</div>
        <div className='box2-p2-mp'>What's going on?</div>
      </div>
      </div>

      </div>
      <div className='right-mp'>
        <div className='r-box-1-mp'>
          <img src = {profile} className='profile1-mp'></img>
          <div className='post-mp'>
          <button className='i-2-mp' onClick={handlePostClick} >What's on your mind?</button>
          <div className='t-1-mp'><FaUpload style={{  marginRight: '1rem' }}/>Media</div>
          </div>
        </div>
        <div className='section-seperator-mp'>
          <hr className='hr-1-mp'></hr>
          <div className='history-mp'>
          <div className='curr-mp'><u>Best Matches</u></div>
          |
          <div className='past-mp'> Most Recent</div>
          </div>
        </div>
        
        {Object.values(data).map((item) => (
          <div className='r-box-2-mp' key = {item.id} onClick={handleBid}>
          <div className='rb-top-mp'>
            <img src ={profile} className='rb-pfp-mp'/>
            <div className='rb-title-mp'><div className='rb-name-mp' id = "rb-n-mp">{item.name}</div>
            <div className='rb-def-mp'>AI ML Professor </div>
            <div className='time_mp' id = "t-mp"> {item.created_at} </div>
            </div>
            <div className='flw-mp'> + Follow</div>
            <div className='heart-mp'><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="red"          
        strokeWidth="1"    
        width="20px"
        height="20px"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg></div>
          </div>
          <div className='rb-mid-mp'>
            <div className='rb-m-tit-mp' id = "i-j-t">{item.job_title}</div>
            <div className='rb-m-des-mp' id = "i-j-t-2">Payment: {item.payment} - {item.experience} - Est. Time: Less than 1 month</div>
            <div className='rb-m-body-mp' id = "ij-2">{item.desc}<br/>  Please do not extend time limit. Apply here 
            <a href='www.google.com' id = "h-12"> {item.link}</a>
            </div>
          </div>
         
          <div className='rb-mid-icon-mp'>
            SKILLS : 
            <div className='icon-1-mp-1' id = "it-1"> {item.skill_1}</div>, 
            <div className='icon-1-mp-2' id = "it-2"> {item.skill_2}</div>, 
            <div className='icon-1-mp-3' id = "it-3"> {item.skill_3}</div>
          </div>
          <div className='rb-mid-end-mp'>
          </div>
          <div className='rb-end-i-mp'>
          <div className='rb-end-icon1-mp'><FaThumbsUp style={{ fontSize: '25px', marginRight: '1rem' }}/>LIKE</div>
          <div className='rb-end-icon1-mp'><FaComment style={{ fontSize: '25px', marginRight: '1rem' }}/>COMMENT</div>
          <div className='rb-end-icon1-mp'><FaShare style={{ fontSize: '25px', marginRight: '1rem' }}/>SHARE</div>
          </div>
          
        </div>
        
        ))}

        </div>
         </div>
      <div>
      </div>
      </div>
    </div>
  )
}

