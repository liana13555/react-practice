import React, { useRef } from 'react';

function TaskAddInput({ addItem, inputValue, changeInput }) {
    const inputRef = useRef(null);  // Получаем доступ к инпуту

    const handleInputValue = () => {
        addItem(inputRef.current.value)  // через current можно делать что угодно
    };

    return (
        <div>
            <input
                ref={inputRef}        // через ref получаем доступ 
                type='text'
                value={inputValue}
                onChange={changeInput}
                style={{ marginRight: '20px' }}
            />
            <button onClick={handleInputValue}>Add task</button>
        </div>
    );
}

export default TaskAddInput;