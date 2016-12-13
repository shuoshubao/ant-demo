import React, {Component} from 'react'
import {render} from 'react-dom'
import {Row, Col} from 'antd';

class ButtonSize extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
    );
  }
}

render(<ButtonSize />, document.body.appendChild(document.createElement('div')));