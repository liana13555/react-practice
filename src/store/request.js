export const getUsers = () => {
    return fetch('https://61c2495dde977000179b5455.mockapi.io/users', {
        method: "GET"
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => e);
};

export const addUser = (userData) => {
    return fetch('https://61c2495dde977000179b5455.mockapi.io/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    }).then(res => res.json())
        .then(res => res)
}

export const getToDoList = () => {
    return fetch('https://61c2495dde977000179b5455.mockapi.io/todos', {
        method: "GET"
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => e);
}

export const addToDoTask = (todoData) => {
    return fetch('https://61c2495dde977000179b5455.mockapi.io/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todoData)
    }).then(res => res.json())
        .then(res => res)
}

export const checkTask = (taskId, isChecked) => {
    return fetch(`https://61c2495dde977000179b5455.mockapi.io/todos/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: isChecked })
    }).then(res => res.json())
        .then(res => res)
}