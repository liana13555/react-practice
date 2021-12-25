import React, { Component } from 'react';
import TextInput from "./FormTextInput.styled";

class FormTextInput extends Component {
    state = {
        isEmpty: false
    }

    handleInputBlur = e => {
        if (this.props.required && e.target.value.trim() === '') {
            this.setState({ isEmpty: true })
        } else {
            this.setState({ isEmpty: false })
        }
    }

    render() {
        const { label, value, handleInputValue, inputName, required } = this.props;
        return (
            <label>
                {required ? `${label}*` : label}
                <TextInput
                    type="text"
                    placeholder={label}
                    name={inputName}
                    value={value}
                    onChange={handleInputValue}
                    onBlur={this.handleInputBlur}
                    fieldIsEmpty={this.state.isEmpty}
                />
            </label>
        );
    }
}

export default FormTextInput;