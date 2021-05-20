import React, { useState, useEffect, } from 'react';
import { getOneAvatar } from '../services/AvatarApi';


const DetailPage = (props) => {

  const [oneAvatar, setOneAvatar] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => { 

    getOneAvatar(props.match.params.id)
      .then(avatar => { 
        setOneAvatar(avatar);
      })
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div>
      {
        loading
          ?
          <h2>Loading...</h2>
          :
          <div>
            <img src={oneAvatar.photoUrl} alt={name} />
            <h2>{oneAvatar.name}</h2>
        
          </div>
      }
    </div>
  ); 
};

export default DetailPage;
