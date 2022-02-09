import { useState } from "react";

const PokeSearch = () => {
    const [text, setText] = useState('');


    return (
        <div style={inputContainerStyling}>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={inputStyling} 
                placeholder="Enter Pokemon Name"
            />
        </div>

    )
}

const inputContainerStyling = {
    margin: '1rem auto',
    display: 'flex',
    justifyContent: 'center'
}
const inputStyling = {
    padding: '.7rem 1rem'
}

export default PokeSearch;