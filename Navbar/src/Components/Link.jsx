import React from "react";

const Link = (props) => {


    return (
        <div className="link-div">
            <ul>
                {props.data.map((el) => (
                     <li key={el}>{el}</li>
                ))}
            </ul>
        </div>
    );
}

export default Link;