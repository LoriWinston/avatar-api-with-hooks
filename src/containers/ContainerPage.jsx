import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/AvatarApi';
import CharacterList  from '../components/display/CharacterList';


const ContainerPage = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(characters => {
        setAvatars(characters);
      })
      .finally(() => setLoading(false));

  }, []);

  if(loading) return <h2>Loading...</h2>;

  return (
    <div>
      <CharacterList 
        characters={avatars}
       
      />
    </div>
  );
    
};

export default ContainerPage;
