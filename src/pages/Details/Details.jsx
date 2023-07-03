import React, { useEffect } from 'react'
import "./Details.css"
import { data } from '../../data';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLogout } from '../../state';

// import GifPlayer from "react-gif-player";

const Details = () => {

  const section = window.location.pathname.split("/")[1];
  const id = window.location.pathname.split("/")[3];
  const location = useLocation();
  const dispatch = useDispatch();

  const getDetails = (id) => {
    const details = data[section-1].data.filter((item) => item.id === parseInt(id));
    return details[0];
    };

    const [details, setDetails] = React.useState();

    useEffect(() => {
        const details = getDetails(id);
        setDetails(details);
    }, [id]);

  return (details &&
    <>
    <div className="nav-bar position-nav">
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
    <div className='details-container container'>
        <button className='btn btn-primary back-btn'><Link className='btn-link' to={`/sub/${section}`}>Back</Link></button>
        {/* <GifPlayer className='details-gif' gif="" /> */}
        <iframe className='details-gif' width={50} src={details.link}></iframe>
        <div className='details-text'>
            <span>{details.content}</span>
        </div>
    </div>
    </>
  )
}

export default Details