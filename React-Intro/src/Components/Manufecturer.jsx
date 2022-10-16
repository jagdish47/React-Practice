import React from 'react';


const Manufetectures = (props) => {

    return (
        <div>
            <h1>{props.data[1].headManu}</h1>
            <ul>
                {props.data[0].manu.map((el) =>
                    <li>{el}</li>
                )}
                
            </ul>
        </div>
    );
}

export default Manufetectures;