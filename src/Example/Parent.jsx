import { useState } from "react";
import { Child , Child1 , Child2 } from "./Child.jsx"

export function Parent () {
    console.log("working from inside Parent");

    return (
        <div>
            <p>I'm the parent</p>
            <Child value="hello from father side"/>
        </div>
    )
};

// the state with the event works to let the parent get back the data from child
export function Parent1 () {
    console.log("working from inside Parent1 WITH CLICK");

    const [greet, setGreet] = useState("_____");

    const handleClick1 = (e) =>{
        console.log(`variab is = ${e.target.value}`);

        // it will wait the return of the event form child
        setGreet(e.target.value);
    };

    return (
        <div>
            <p>I'm the parent</p>
            <Child1 _value="hello from Vader side" handleClick1={handleClick1}/>
            <p>ciao, my greeting = {greet}</p>
        </div>
    )
};

// another way to write the callback
export function Parent2 () {
    console.log("Parent2 says: different callback syntax");
    const [num, setNum] = useState(0);

    const handleClick2 = (variable) => {
        console.log(`your new number is ${variable}`);

        // it will wait the return of the event form child
        setNum(variable);
    };

    return (
        <div>
            <p>I'm the last parent</p>
            <Child2 _value="hello for last time" handleClick2={handleClick2}/>
            <p>guess, my number is = {num}</p>
        </div>
    )
};