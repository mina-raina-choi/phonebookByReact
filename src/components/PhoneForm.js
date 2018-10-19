import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // state를 onCreate를 통하여 부모에게 전달...
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="phone number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">Submit</button>
                {/* <div>{this.state.name} : {this.state.phone}</div> */}
            </form>
        )
    }
}

export default PhoneForm;