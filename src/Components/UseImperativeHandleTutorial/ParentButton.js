import React, { useRef } from "react";
// This is the component which will ultimately have access to the method which toggles the visibility of a string of text
// Thus, first must import the component which contains the method. In this case, ChildButton
import ChildButton from "./ChildButton";

const ParentButton = () => {
    // We useRef to reference the component so we can then navigate to the desired method
    const buttonRef = useRef(null);
    return (
        <>
            {/* And here is the button containing the onClick property to call the alterToggle method */}
            <button onClick={() => { buttonRef.current.alterToggle() }}>Parent Button</button>
            {/* With the ChildButton button component containing the reference */}
            <ChildButton ref={buttonRef} />
        </>
    );
}

export default ParentButton;