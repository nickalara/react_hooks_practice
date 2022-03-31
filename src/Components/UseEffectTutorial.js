import React, { useEffect, useState } from "react";
import axios from "axios";
// To begin, be sure to install axios: https://axios-http.com/docs/intro
// The useEffect is used to make the app "do something" every time something in its 2nd parameter's list changes
// In otherwords, everytime the page or something in the page refreshes, useEffect acts
// It's often used in conjunction with useState as seen here


const UseEffectTutorial = () => {
    // First, declare some useState objects to work with useEffect
    // One for the data we will be fetching with axios
    const [data, setData] = useState("");

    // One counter to not trigger useEffect
    const [count, setCount] = useState(0);
    // One to trigger useEffect
    const [trigger, setTrigger] = useState("Hello World");

    // For this example, call some sample data from jsonplaceholder
    // It doesn't need to call an API but this is a common use case (to set some sort of data every time a button is pressed. Maybe to call a new page of a table for example? *Wink wink*)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {

                // Take the JSON response and set the email of the first result to the data state (useState setData above)
                setData(response.data[0].email)
                console.log("API WAS CALLED")
            });

        // Note that this array is the second parameter: a list of values that useEffect is "listening" for a change in.
        // You can have multiple things in here if you want to "listen" for specific changes across a page
        // Or you can completely omit this second parameter if you want it to trigger when anything on the page happens (think about tracking user behavior maybe?)
    }, [trigger]);

    return (
        <>
            {/* Here we will just display our three state objects */}
            <h1>{data}</h1>
            <h1>{count}</h1>
            <h1>{trigger}</h1>

            {/* First button setCount only */}
            <button onClick={() => setCount(count + 1)}>Increment</button>

            {/* Second button useEffect only */}
            <button onClick={() => setTrigger("Triggered! 😳")}>Trigger</button>

            {/* Third button setCount AND setTrigger */}
            <button onClick={() => {
                setCount(count + 984479163759);
                setTrigger("MEGA TRIGGERED 😡")
            }}>Don't Click...</button>

        </>
    )
}

// When you run this, open the developer tools in your browser (usually by hitting f12)
// Watch the console as you press the various buttons to see the console.log and note how many time the API is called
export default UseEffectTutorial