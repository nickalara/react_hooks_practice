import React, { useState } from "react";
// Rather than "getting elements by id" as in vanilla JS
// React makes altering DOM elements easier with hooks
// Here we see the useState hook in action


const UseStateTutorial = () => {
    // constant to be incremented
    const [counter, setCounter] = useState(0);
    // function to add +1 to the counter constant
    const increment = () => {
        setCounter(counter + 1);
    };

    // constant to display the user's input
    const [inputValue, setInputValue] = useState("Hello World");
    // function to set the inputValue object to the value of the input
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    // useState can also manage two states at once
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return (
        <>
            {/* This button is linked to the increment function */}
            {/* We use curly braces inside of HTML to display our JS elements */}
            <button onClick={increment}> Increment </button><br />
            {counter}<br />

            {/* This input is linked to the onChange function */}
            <input placeholder="enter something..." onChange={onChange} /><br />
            {inputValue}<br />

            {/* This button contains 2 simple functions to alter the state of the objects below it */}
            <button
                onClick={() => {
                    // Note here you can pass simple operators to the useState functions
                    setCount(count + 1);
                    setShowText(!showText);
                }}>Click</button>
            <h3>{count}</h3>
            {showText && <p>This is a text</p>}
        </>
    )
};

export default UseStateTutorial;