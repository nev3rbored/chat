// alert(`typeof React === "${typeof React}"`)
// alert(`typeof ReactDOM === "${typeof ReactDOM}"`)
const container = document.getElementById('root');
// alert(`typeof container === "${typeof container}"`)
const root = ReactDOM.createRoot(container);
// alert('root created')
root.render(<Boundary name="root"><App /></Boundary>)

alert(1)