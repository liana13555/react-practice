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