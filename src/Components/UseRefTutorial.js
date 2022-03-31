import React, { useRef, useState } from "react";
// In vanilla JavaScript we often manually accessed DOM elements with
// statements such as getElementByClass... In React, we have a virtual DOM
// and do things a bit differently...
// useRef hook is a great way to access and manipulate state elements of our webpage
// and unlocks various functionality in a much cleaner and easier way.

const UseRefTutorial = () => {

    // First, we assign a constant, which in this case will reference an input element (inputRef)
    const inputRef = useRef(null);
    // And let's just make a simple useState constant just for fun (and practice!)
    const [saySomething, setSaySomething] = useState("");

    return (
        <>
            {/* We will be referencing this text input element */}
            <input
                type="text"
                placeholder="Say something..."
                // so we add a ref property with the name of our useRef constant (easy)
                ref={inputRef}
            />

            {/* Let's make it so that after this submit button is hit, the input field will clear */}
            {/* And our cursor automatically moves back into it so we can submit more stuff */}
            <button onClick={() => {
                // So in the onClick property, we write a function. First, it sets the saySomething element to the current value
                // We reference the input, take its current value, and give it to setSaySomething to change the state
                setSaySomething(inputRef.current.value);

                // Then we reference the input again to move the current focus (our cursor) back into it
                inputRef.current.focus();

                // And reference its current value again to clear its content with an empty string
                inputRef.current.value = "";
            }}>Submit</button>

            {/* This is the element being passed the input's current value */}
            <h1>{saySomething}</h1>
        </>
    )
}

// This is a very simple example, quite rudimentary in fact, but useRef is really a powerful tool
// There are a lot more properties you should explore but the most common use case is to access an element's value
// Imagine you have some CRUD functions and need to pass data back to an API to update a database
// This could be a good way to access the user input!
export default UseRefTutorial