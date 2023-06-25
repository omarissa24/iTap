import React, { useEffect } from 'react'
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';
import "./Sub.css"

const Sub = () => {

  const id = window.location.pathname.split("/")[2];
  const navigate = useNavigate();

    const getDetails = (id) => {
        const details = data.filter((item) => item.id === parseInt(id));
        return details[0];
        };
    
        const [details, setDetails] = React.useState();
    
        useEffect(() => {
            const details = getDetails(id);
            setDetails(details);
        }, [id]);

    const navigateToDetails = (id) => {
        navigate(`/${details.id}/details/${id}`);
    };

  return ( details && 
    <div className='container'>
        <button className='btn btn-primary back-btn'><a className='btn-link' href="/home">Back</a></button>
        <div className='title-wrapper'>
            <h2 className='title'>{details.name}</h2>
        </div>
        <div className="home-content">
          {details.data.map((item) => (
            <div key={item.id} onClick={() => navigateToDetails(item.id)} className="card section">
              <div className="card-body section-body">
                <span className='section-name'>{item.content}</span> 
              </div>
            </div>   
          ))}
      </div>
    </div>
  )
}

export default Sub