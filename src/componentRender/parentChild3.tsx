import React, { useState, memo } from 'react'
export default function Parent() {
    const [count, setCount] = useState(0)
    console.log("parent", count)
    return <div>
        <div>Parent {count}</div>
        <button onClick={() => setCount(count + 1)}>Click +1</button>
        <Child />
    </div>
}

const Child = memo(() => {
    console.log("child")
    return <div>Child</div>
})
