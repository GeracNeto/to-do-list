import { Container } from '@mui/system';
import './App.css';

import Form from './components/Form';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}> 
      <Form />
      <ToDoItem />
    </Container>
  );
}

export default App;
