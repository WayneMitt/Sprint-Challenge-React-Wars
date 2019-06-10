import React from 'react';
import CharName from './CharName'

const CardContainer = (props) => {
    console.log(props);
    return (
      <div className='CardContainer'>
            {props.charData.map(char => {
                return (
                    <CharName 
                    name={char.name}
                    />
                )
            })}
          {/* <Appearance /> */}
      </div>
    );
  };

export default CardContainer;