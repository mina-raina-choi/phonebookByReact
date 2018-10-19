import React, { Component } from 'react';

class PhoneInfo extends Component {

    static defaultProps = {
        info: {
            name: 'name',
            phone: '010-2482-1231',
            id: 0
        }
    }

    state = {
        // 수정버튼 클릭하면 true, true일 경우, 기존 텍스트형태에서 input type으로 변경.
        editting: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        // 삭제 버튼 클릭되면 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // editting 반전
    handleToggleEdit = () => {
        const { editting } = this.state;
        // setState를 한다는 것은 render()를 호출한다는 의미.
        this.setState({ editting: !editting });
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    // render() 호출 후, 바로
    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate", prevState, this.state)
        const { info, onUpdate } = this.props;


        // 수정버튼 클릭
        if (!prevState.editting && this.state.editting) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editting && !this.state.editting) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }


    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        // 수정모드
        const { editting } = this.state;

        if (editting) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="phone number"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>Apply</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            )
        } 
        
        else {

            // 일반모드

            const { name, phone } = this.props.info;

            return (
                <div style={style}>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>
                    <button onClick={this.handleToggleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            )

        }

    }
}

export default PhoneInfo;