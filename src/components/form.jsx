import React, { useState } from "react";

//importando do material
import { TextField, Button, Paper } from "@mui/material"; 

export default function Form({addTodo}){
    
    const [text, setText] = useState(null); // Variável para guardar o texto digitado
    const [id, setId] = useState(0); // Variável para o id dos itens da lista

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj)
    }

    return(
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField 
                id="outlined-basic" 
                label="To Do" 
                variant="outlined" 
                onChange={(e) => setText(e.target.value)} 
                fullWidth/>
                <Button variant="text" onClick={() => todoCreate(text)}>ADD</Button>
            </div>
        </Paper>
    );
}