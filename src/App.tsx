import React, { useState } from 'react';
import './App.css';
import ParentChild from './componentRender/parentChild3'
function App() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>App {count}</div>
            <button onClick={() => setCount(count + 1)}>App Click +1</button>
            <ParentChild></ParentChild>
        </div>
    );
}

export default App;
