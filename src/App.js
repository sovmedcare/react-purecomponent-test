import React from 'react'
import Children from './Children'
import logo from './logo.svg'
import './App.css'

class App extends React.PureComponent {
  state = {
    text: 'PureRender',
    pureRenderMode: true
  }
  value = {pureRenderMode: true}
  componentWillUpdate = (prevProps, prevState) => {
    console.log('Parent Will Updated!')
    console.log(this.state)
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Parent Updated!')
    console.log(this.state)
  }
  handleClick = e => {
    const str = this.state.text + '!'
    this.setState({text: str})
  }
  handleSwitch = e => {
    this.setState({pureRenderMode: !this.state.pureRenderMode})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to {this.state.text}</h1>
        </header>
        <button onClick={this.handleClick}>Add !</button>
        <button onClick={this.handleSwitch}>Switch Mode</button>
        <Children value={
          this.state.pureRenderMode
            ? this.value
            : {pureRenderMode: this.state.pureRenderMode}
        } />
      </div>
    )
  }
}

export default App
