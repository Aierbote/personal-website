export function Child ( props ) {
    console.log("working from inside Child");

    return (
        <>
            <p>I'm the Child</p>
            <p>ciao, my value = {props.value}</p>
        </>
    )
};

// handleClick1 is give as custom argument to send back data to parent in the console
export function Child1 ( {_value, handleClick1} ) {
    console.log("working from inside Child1 WITH CLICK");
    let a = "Howdy";

    return (
        <>
            <p>I'm the Child1</p>
            <p>ciao, my value = {_value}</p>
            <button onClick={handleClick1} value={a}> Greeting </button>
        </>
    )
};

export function Child2 ( {_value, handleClick2} ) {
    console.log("from inside Child2 same but different syntax");
    let b = "42"

    return (
        <>
            <p>I'm the the Child2</p>
            <p>c140, my value = {_value}</p>
            {/* // NONO, like this I'm calling right away the function */}
            {/* <button onClick={handleClick2(b)}>Try Guess</button> */}
            {/* I need to give a callback */}
            <button onClick={() => handleClick2(b)}>Try Guess</button>
        </>
    )
};