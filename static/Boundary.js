class Boundary extends React.Component {
  state = { hasError: false }
  render() {
    if (this.state.hasError) {
      // alert('rendering boundary with error')
      return <>
        <h1>{this.props.name ? "Error!" : `Error in ${this.props.name}!`}</h1>
        <pre>{this.lastError.stack}</pre>
        <button onClick={() => this.setState({hasError: false})}>Remount</button>&nbsp;<button onClick={() => history.go(0)}>Reload</button>
      </>
    } else {
      // alert('rendering boundary')
      return this.props.children
    }
  }
  componentDidCatch(lastError, info) {
    alert('boundary caught!')
    alert(lastError.stack)
    this.setState({ hasError: true, lastError, info })
  }
}
// alert('boundary loaded')