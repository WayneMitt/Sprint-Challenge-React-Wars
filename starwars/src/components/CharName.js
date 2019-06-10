import React from 'react';

const CharName = (props) => {
    console.log(props);
    return (
      <div className='CharName'>
          <h1>{props.name}</h1>
      </div>
    );
  };

export default CharName;