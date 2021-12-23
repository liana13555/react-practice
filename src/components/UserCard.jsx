import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        const { name, avatar, city } = this.props;
        return (
            < div >
                <img src={avatar} alt="avatar" />
                <div>Name: {name}</div>
                <div>City: {city}</div>
            </div>
        );
    }
}

export default UserCard;