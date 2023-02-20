import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <Link to="/">
      <div className='Home'>
        <img className='Home_image'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E2vBfVNZjTOp0gyKaIBYHMRZ_Yk4JM8ziA&usqp=CAU"
        alt="banner" 
        />
      </div>
    </Link>
    
  );
}

export default Home;
