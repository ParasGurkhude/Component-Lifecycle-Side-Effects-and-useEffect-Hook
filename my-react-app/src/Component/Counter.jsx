import React from "react";

function Counter() {
    const [count, setCount] = React.useState(0)

    function increase() {
        setCount(count+1)
    }
    function decrease() {
        setCount(count-1)
    }
    let Counter ={
        display: "flex",
        gap: "30px",
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <div style={Counter}>
                <button onClick={increase}>Increase Count by 1</button>
                <button onClick={decrease}>Decrease Count by 1</button>
            </div>
        </div>
    )
}

export default Counter