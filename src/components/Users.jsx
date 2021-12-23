import React, { Component } from 'react';
import { getUsers, addUser } from '../store/request';
import UserCard from './UserCard';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            error: false,
            loading: false,
            userInputVal: ''
        };
    }

    componentDidMount() {
        this.setState({ loading: true })
        getUsers().then((users) => this.setState({ users, loading: false }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState.users) !== JSON.stringify(this.state.users)) {
            this.setState({ loading: false, userInputVal: "" });
        }
    };

    handleInputChange = (e) => {
        this.setState({ userInputVal: e.target.value })
    };

    postUser = () => {
        this.setState({ loading: true });
        addUser({ name: this.state.userInputVal, city: 'Madrid' }).then(
            userResult => {
                const stateClone = [...this.state.users];
                stateClone.push(userResult);
                this.setState({ users: stateClone });
            }
        )
    }

    render() {
        const { users, loading, userInputVal } = this.state;
        return loading ? (
            <div>Loading ...</div>
        ) : (
            <>
                <div style={{ padding: '30px ' }}>
                    <input
                        placeholder='Name'
                        value={userInputVal}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.postUser}>Add user</button>
                </div>
                < div style={{ display: 'flex', flexDirection: 'row' }}>

                    {users.map((user, index) => {
                        return (
                            <UserCard
                                key={index}
                                name={user.name}
                                avatar={user.avatar}
                                city={user.city}
                            />
                        )
                    })}
                </div >
            </>)
    }
}

export default Users;