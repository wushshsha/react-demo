import React, { useState } from 'react'
export default function Parent(props: React.Props<{}>) {
    const [count, setCount] = useState(0)
    console.log("parent", count)
    return <div>
        <div>Parent {count}</div>
        <button onClick={() => setCount(count + 1)}>Click +1</button>
        {props.children}
    </div>
}
