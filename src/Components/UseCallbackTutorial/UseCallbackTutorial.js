import React, { useCallback, useState } from "react";
import Child from './Child';

export default function UseCallbackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hello World");

    const returnComment = useCallback(
        () => {
            return data;
        },
        [data]

    );

    return (
        <div>
            <Child returnComment={returnComment} />

            <button onClick={() => { setToggle(!toggle); }}>
                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    );
}