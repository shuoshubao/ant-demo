import React, {Component} from 'react'
import {render} from 'react-dom'
import {Icon} from 'antd';

class App extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <span>link</span>
          <Icon type="link" />
        </li>
        <li>
          <span>message</span>
          <Icon type="message" />
        </li>
        <li>
          <span>windows</span>
          <Icon type="windows" />
        </li>
        <li>
          <span>windows-o</span>
          <Icon type="windows-o" />
        </li>
        <li>
          <span>loading</span>
          <Icon type="loading" spin="true" />
        </li>
      </ul>
    );
  }
}

render(<App />, document.body.appendChild(document.createElement('div')));