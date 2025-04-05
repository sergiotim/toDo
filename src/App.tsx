import './App.css'
import { Navbar,Container, Stack } from 'react-bootstrap'
import {Task} from './components/tasks'

function App() {



  
  return (
    <>
      <div className="gap-3">
        <Navbar className='bg-primary mb-4 h-100'>
          <Container fluid="md justify-content-center">
            <Navbar.Brand className='text-light fs-1' href='#'>ToDo</Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid="md">
          <Stack gap={2}>
            <Task
              nameTask='comer banana'
            />
            <Task
              nameTask='comer banana'
            />
            <Task
              nameTask='comer banana'
            />
          </Stack>
        
        </Container>
      </div>
    </>
  )
}

export default App
