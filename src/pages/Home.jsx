import { Container, List } from "@mui/material";

import React, { useState } from "react";

import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";


export default function Home(){

    const[todos, setTodos] = useState([])

    const addTodo = (todo) => {
        console.log(todo)
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        console.log(id);
    }

    return(
        <Container maxWidth="xs" style={{marginTop: "1em"}}> 
            <Form addTodo={addTodo}/>
            <List sx={{ marginTop: '1em' }}>
                {todos.map((todo) => 
                <div style={{ marginTop: '1em' }} key={todo.id}>
                    <ToDoItem todo={todo} deleteTodo={deleteTodo}/>
                </div>                
                )}  
            </List>
        </Container>
    );
}