import React, {Component} from 'react'
import {render} from 'react-dom'
import antd, {Button} from 'antd';


class App extends Component {
  static defaultProps = {

  }
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <br />
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button type="ghost" shape="circle" icon="search" />
        <Button type="ghost" icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">Search</Button>
      </div>
    )
  }
}


render(<App />, document.body.appendChild(document.createElement('div')))