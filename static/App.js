function App() {
  const [ message, setMessage ] = React.useState('')
  const submit = React.useCallback(() => {
    
  }, [message])
  // alert('rendering app')
  return <form id="container" onsubmit={() => submit()} class="full">
    <Chat />
    <Userlist />
    <rel><input class="b full fence" value={message} id="messagebox" onChange={(e) => setMessage(e.target.value)} /></rel>
    <button class="b" type="submit" id="send">&gt;</button>
    <button class="b" id="attach">+</button>
    <button class="b" id="command">@</button>
  </form>
}

// alert('app loaded')