import React, {Component} from 'react'
import {render} from 'react-dom'
import {Icon} from 'antd';

class App extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Icon type="link" />
      </div>
    );
  }
}

render(<App />, document.body.appendChild(document.createElement('div')));