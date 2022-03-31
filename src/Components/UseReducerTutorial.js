import React, { useReducer } from "react";
// While useState can handle multiple states, useReducer is better equipped
// useState is probably good enough for most use cases
// But as your app grows in complexity you might consider useReducer instead

const UseReducerTutorial = () => {

    // First, build a reducer function to be called by our HTML elements
    // pass a general state and action variables as parameters
    const reducer = (state, action) => {

        // Use a switch statement to handle different scenarios that will be needed in the app
        // Assigning a process to the types of action (action.type)
        switch (action.type) {

            case "INCREMENT":
                return {
                    count: state.count + 1,
                    showText: state.showText
                    // Here, the INCREMENT type of action increments the count state by 1
                    // And we simply give showText its same value since we don't want it to change
                };

            case "toggleShowText":
                return {
                    count: state.count,
                    showText: !state.showText
                    // This time, we don't want count to change, so we set it to the current state
                    // But toggleShowText type of action changes showText to its opposite (i.e. true|false)
                };

            default:
                return state
            // Most likely you'll want to return the current state by default, in case of any errors
        };
    };


    // Now, we finally call useReducer as we declare the state and dispatch constants
    const [state, dispatch] = useReducer(
        // Call the reducer function we built earlier
        reducer,
        {
            // Then set the initial state values of all the parameter variables
            count: 0,
            showText: true
        });

    return (
        <div>
            <h1>{state.count}</h1>

            {/* Now, on the button properties we build a light function which references dispatch */}
            {/* And pass it the type (remember action.type) desired */}
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "toggleShowText" }) }}>Toggle Text</button>

            {/* We can even make one button that affects multiple states at once */}
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" })
            }}>Do Both!</button>

            {state.showText && <h1>useReducer 😎</h1>}
        </div>
    )
};

export default UseReducerTutorial;