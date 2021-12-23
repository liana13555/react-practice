import React, { Component, Fragment } from "react";
import FormTextInput from './formFields/FormTextInput';

class Form extends Component {
    constructor() {
        super();

        this.state = {           // state - это имутабельный объект, т.е. его напрямую менять нельзя - всегда работаем через setState
            name: '',
            surname: '',
            position: '',
            isRegistered: false,
            showErrorMsg: false
        };
    }

    setForm = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitForm = (e) => {
        e.preventDefault();
        const { name, surname } = this.state;
        if (name === '' || surname === '') {
            this.setState({ showErrorMsg: true })
        } else {
            this.setState({ isRegistered: true, showErrorMsg: false });
        }

    }

    render() {
        const { isRegistered, showErrorMsg } = this.state;
        return isRegistered ? (
            <div>
                <h1>You are registered successfully!</h1>
            </div>
        ) : (
            <Fragment>
                < form onSubmit={this.submitForm} >
                    <FormTextInput
                        required
                        label={'Name'}
                        value={this.state.name}
                        inputName="name"
                        handleInputValue={this.setForm}
                    />
                    <FormTextInput
                        required
                        label={'SurName'}
                        value={this.state.surname}
                        inputName="surname"
                        handleInputValue={this.setForm}
                    />
                    <FormTextInput
                        required={false}
                        label={'Position'}
                        value={this.state.position}
                        inputName="position"
                        handleInputValue={this.setForm}
                    />
                    <button type="submit">Sign up</button>
                </form >
                {showErrorMsg && <div><h1>Fill all inputs!</h1></div>}
            </Fragment>
        );
    }
}

export default Form;
