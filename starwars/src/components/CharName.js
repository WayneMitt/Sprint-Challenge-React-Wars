import React from 'react';

const CharName = (props) => {
    return (
      <div className='CharName'>
          <h1>{props.name}</h1>
          <ul>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
            <li>Birth Year: {props.birthYear}</li>
            <li>Gender: {props.gender}</li>
            <li>Hair Color: {props.hairColor}</li>
            <li>Eye Color: {props.eyeColor}</li>
            <li>Skin Color: {props.skinColor}</li>
          </ul>
      </div>
    );
  };

export default CharName;