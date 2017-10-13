import React from 'react'

class Children extends React.PureComponent {
  state = {
    pureRenderMode: true,
    updateText: 'Update...'
  }
  componentWillUpdate = () => {
    console.log('Children Will Update')
    this.setState({
      pureRenderMode: this.props.value.pureRenderMode,
      updateText: this.state.updateText + '.'})
    console.log(this.state)
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Children Updated!')
    console.log(this.state)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>I'm Children</h1>
          {this.state.pureRenderMode
          ? <h3>PureRender Time~</h3>
          : <h3>{this.state.updateText}</h3>}
        </header>
      </div>
    )
  }
}

export default Children
