import React from "react";
import {motion} from 'framer-motion'

function Button({type="",text, onClick,className}) {
    
    return (
        <>
            <motion.button type={type}
                className={`p-2 cursor-pointer ${className} `} onClick={onClick}
                whileTap={{scale:0.8}}
            >
                {text}
            </motion.button>
        </>
    );
}

export default Button;
