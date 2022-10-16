import React from "react";

const Button = (props) => {
    return (
        <div className="btn">
            <button>{props.data}</button>
        </div>
    );
}

export default Button;