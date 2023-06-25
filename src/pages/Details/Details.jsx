import React, { useEffect } from 'react'
import "./Details.css"
import { data } from '../../data';
import { Link } from 'react-router-dom';
// import GifPlayer from "react-gif-player";

const Details = () => {

  const section = window.location.pathname.split("/")[1];
  const id = window.location.pathname.split("/")[3];

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
    <div className='details-container container'>  
        <button className='btn btn-primary back-btn'><Link className='btn-link' to={`/sub/${section}`}>Back</Link></button>
        {/* <GifPlayer className='details-gif' gif="" /> */}
        <img className='details-gif' src={details.link} alt="" />
        <div className='details-text'>
            <span>{details.content}</span>
        </div>
    </div>
  )
}

export default Details