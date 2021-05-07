import React from 'react';

function Hello({name}) {
    const [count, setCount] = React.useState(0);
    React.useEffect(()=> {
        document.title = `You clicked ${count} times`;
    }, [count]);

    const style = {
        color: 'white',
        backgroundColor: 'skyblue'
    };

    return (
        <>
            <p>You clicked {count} times</p>
            <button 
                onClick={
                    ()=>{setCount(count+1)}
                }>Click</button>
            <h1 style={style}>Hello, {name}!</h1>
        </>
    );
}

export default Hello;