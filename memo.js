// To fix this, we can use memo.

// Use memoto keep the Todos component from needlessly re-rendering.

// Wrap the Todos component export in memo:


import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);