import React from 'react';

const Mobile = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.data[1].headOs}</h1>
            <ul>
                {props.data[0].os.map((el) =>
                    <li>{el}</li>
                )}
            </ul>
        </div>
    );
}



export default Mobile;