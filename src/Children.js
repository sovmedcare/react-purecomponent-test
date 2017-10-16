import React from 'react'

class Children extends React.PureComponent {
  state = {
    updateText: 'Update...'
  }
  handleClick = e => {
    const text = this.state.updateText + '.'

    this.setState({
      updateText: text})
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Children Updated!')
    console.log(this.state)
  }

  render () {
    console.log('Children Render~')
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>I'm Children</h1>
          {this.props.value.pureRenderMode
          ? <h3>PureRender Time~</h3>
          : <h3>{this.state.updateText}</h3>}
          <button onClick={this.handleClick}>Children change something</button>
        </header>
      </div>
    )
  }
}

export default Children
