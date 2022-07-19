
import { Container, List } from '@mui/material/';

import './App.css';

import Form from './components/Form';
import ToDoItem from './components/ToDoItem';


function App() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}> 
      <Form />
      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <ToDoItem />

      </List>
    </Container>
  );
}

export default App;
