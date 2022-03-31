import React, { useEffect, useLayoutEffect, useRef } from "react";
// useLayoutEffect, as its name would imply, is very similar to useEffect
// But it is fundamentally different in that it runs at an earlier stage in the app rendering
// useEffect activates only after all DOM mutations, or in other words after the page has FULLY rendered and is essentially idle
// useLayoutEffect activates while the DOM is being "drawn" 


const UseLayoutEffectTutorial = () => {
    // Because modern the modern web is so fast, it's very hard to demonstrate this effectively
    // So, here's an example where you will need to open your developer tools (f12)

    // We'll be using an input with a default value to show that its valye will be different than what's shown in the console.
    const inputRef = useRef(null);

    // Here we simply console.log the current value of the input
    // Remember: by current we mean at the moment this function runs
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    // Here we change the current value of the input to something else
    useEffect(() => {
        inputRef.current.value = "How are you?";
        // And just for demonstration sake let's also console log the current value (current as in the time this function runs)
        console.log(inputRef.current.value);
    }, []);


    return (
        // And here is the input element with a default value different than in the useEffect
        <input ref={inputRef} defaultValue="Hello World" />
    );
}

// Now, run the app and have your developer tools open (f12)
// Notice that in the console we have two messages, "Hello World" and "How are you?"
// And more importantly, notice the ORDER in which they come in
// Take a look back up at the code and you'll see that the order the strings are written are opposite.
// And take a look in the app itself at the value inside of the input field... it should say "How are you?"
// This proves that useLayoutEffect is happening before useEffect
export default UseLayoutEffectTutorial