import './App.css'
import Button, {value} from './components/Button'
import Container from './components/Container'

function App(args) {
  console.log(args)
  const str = "Hello world!"

  return (
    <Container className="title" onClick={() => console.log('1')}>
      <Button description="Me xo lamazi var?" color="yellow"/>
      <Button />
      
    </Container>
  )
}

export default App
