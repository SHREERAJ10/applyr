import React from "react";

function Button({type="",text, onClick}) {
    
    return (
        <>
            <button type={type}
                className="p-2 cursor-pointer" onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}

export default Button;
