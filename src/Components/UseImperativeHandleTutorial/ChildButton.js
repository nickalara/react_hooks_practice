import React, { forwardRef, useImperativeHandle, useState } from "react";
// This is the component that "shares" its method with the "outside" component
// But in order to do so we need to make use of not only the useImperativeHandle hook
// We also need to use the forwardRef function

// Our ChildButton is a type of forwardRef function, with props and the reference (ref) as parameters
const ChildButton = forwardRef((props, ref) => {

    // This is simply the useState constant that will toggle on and off the text
    const [toggle, setToggle] = useState(false);

    // Here we declare the alterToggle function inside of the useImperativeHandle hook
    // And be sure to pass the reference "ref" as the first parameter
    useImperativeHandle(ref, () => ({
        alterToggle() {

            // alterToggle then calls setToggle to do its magic (flip the useState from true to false)
            setToggle(!toggle);
        }
    }));

    return (
        <>
            {/* Realistically this button doesn't need to be here, but just for demonstration purposes let's render it anyways */}
            {/* But the implication is that you can have essentially "invisible" components */}
            <button>Child Button</button>

            {/* And this is simply the text which will be toggled "on/off" */}
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default ChildButton;