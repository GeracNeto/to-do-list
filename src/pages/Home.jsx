import { Container, List } from "@mui/material";

import React, { useState } from "react";

import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";


export default function Home(){

    const[todos, setTodos] = useState([])

    const addTodo = (todo) => {
        console.log(todo)
        if(todo.text === "" || todo.text === null){
            alert('To Do is Empty');
        }
        else{
            setTodos([...todos, todo]);
        }
    }

    const deleteTodo = (id) => {
        console.log(`Deletado ID: ${id}`);

        let filtered = todos.filter((todo) => todo.id !== id); // Array com os objetos não excluidos

        setTodos(filtered);
    }

    const editTodo = (id, editedText) => {
        todos.splice(id, 1, {text:editedText, id: id})

        let todosArray = [...todos]; // Cópia do array todos

        // for para não criar outro item na lista quando editamos

        for(let i in todosArray){
            if(todosArray[i].id === id){
                todosArray[i].text = editedText;
            }
        }

        setTodos(todosArray);
    }

    return(
        <Container maxWidth="xs" style={{marginTop: "1em"}}> 
            <Form addTodo={addTodo}/>
            <List sx={{ marginTop: '1em' }}>
                {todos.map((todo) => 
                <div style={{ marginTop: '1em' }} key={todo.id}>
                    <ToDoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
                </div>                
                )}  
            </List>
        </Container>
    );
}