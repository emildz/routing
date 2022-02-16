import React, { useState } from "react";

function Form() {

    const [name, setName] = useState('Emil')
    const onSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <>
        <h1>Fill out your info or else</h1>
        <form onSubmit={(event) =>onSubmit(event)}>
            <input 
            type="text" 
            placeholder="Type Your Name Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button type='submit'>Submit!</button>
            </form>
            </>
    );
}
export default Form;