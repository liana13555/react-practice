import React from 'react';

function ToDoItem({ list, changeCheckbox }) {

    const handleCheckbox = (e) => {
        changeCheckbox(list.id, e.target.checked);
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center'
            }}>
            <p>{list.todo_name}</p>
            <input type='checkbox' checked={list.completed} onChange={handleCheckbox} />
        </div>
    );
}

export default ToDoItem;