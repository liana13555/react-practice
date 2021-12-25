import React, { useEffect, useState } from 'react';
import { getToDoList, addToDoTask, checkTask } from '../../store/request';
import TaskAddInput from './TaskAddInput';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
    const [toDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {      // async нельзя записать в useEffect, если запрос через промис, то записываем через then и catch, либо пишем отдельную ф-ю и эту ф-ю вызываем в useEffect
        getToDoList().then(res => setToDoList(res))
    }, [])

    const addTask = async (taskName) => {
        const postData = await addToDoTask({ todo_name: taskName, completed: false });

        if (postData) {
            setToDoList((prevState) => {
                let tmpState = [...prevState];
                tmpState = tmpState.concat(postData);

                return tmpState;
            });

            setInputValue('');
        }
    }

    const handleCheckbox = async (taskId, isChecked) => {
        const changeData = await checkTask(taskId, isChecked);

        if (changeData) {
            setToDoList(prevState => {
                let tmpState = [...prevState];
                const index = tmpState.findIndex((item) => item.id === changeData.id);
                if (index !== -1) {
                    tmpState.splice(index, 1, changeData);
                    return tmpState;
                } else {
                    return prevState;
                }
            });
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div style={{
            width: '700px',
            margin: '0 auto',
            border: '1px solid black',
            padding: '20px'
        }}>
            <TaskAddInput
                addItem={addTask}
                inputValue={inputValue}
                changeInput={handleInputChange}
            />
            {toDoList.length === 0 ? (
                'Задач пока что нет'
            ) : (
                toDoList.map(item => {
                    return < ToDoItem key={item.id} list={item} changeCheckbox={handleCheckbox} />
                })

            )}
        </div>
    );
}

export default ToDoList;
