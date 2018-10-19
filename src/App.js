import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  // 컴포넌트 내부에서 필요한 값 중에서, 렌더링 되는 것과 상관이 없는 것들은
  // 굳이 state에 넣어줄 필요가 없다.
  
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ? { ...info, ...data} : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;

    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    )

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}/>

        <p>
          <input
            placeholder="Put on search text"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>

        <hr/>
        <PhoneInfoList 
          data={filteredList} 
          onRemove={this.handleRemove}
          onUpdate= {this.handleUpdate}  
        />
      </div>
    );
  }
}

export default App;
