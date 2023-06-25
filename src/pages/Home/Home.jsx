import React from 'react'
import { data } from '../../data';
import "./Home.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLogout } from '../../state';

const Home = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    console.log("test")
    navigate(`/sub/${id}`);
  };

  return (
    <div className='home-container'>
      <div className="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/home">SignLearnify</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {location.pathname !== '/' && location.pathname !== '/signup' && 
              <li class="nav-item">
                <a class="nav-link" onClick={() => dispatch(setLogout())} href="/">Logout</a>
              </li>
              }
            </ul>
          </div>
        </nav>
      </div>
      <div className="home-content">
          {data.map((item) => (
            <div key={item.id} onClick={() => navigateToDetails(item.id)} className="card section">
              <div className="card-body section-body">
                <span className='section-name'>{item.name}</span> 
              </div>
            </div>   
          ))}
      </div>
    </div>
  )
}

export default Home