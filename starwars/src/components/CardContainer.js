import React from 'react';
import CharName from './CharName'
import './StarWars.css'

const CardContainer = (props) => {
    console.log(props);
    return (
        <div className='CardContainer'>
            {/* <div className='card'> */}
                {props.charData.map(char => {
                    return (
                        <CharName
                            name={char.name}
                            height={char.height}
                            mass={char.mass}
                            hairColor={char.hair_color}
                            eyeColor={char.eye_color}
                            skinColor={char.skin_color}
                            gender={char.gender}
                            birthYear={char.birth_year}
                        />
                    )
                })}
            {/* </div> */}

        </div>
    );
};

export default CardContainer;