import React, { useState } from "react";

//importando do material
import { TextField, Button, Paper } from "@mui/material"; 

export default function Form(){
    
    const [text, setText] = useState(null); // Variável para guardar o texto digitado


    return(
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField 
                id="outlined-basic" 
                label="Tarefa" 
                variant="outlined" 
                onChange={(e) => setText(e.target.value)} 
                fullWidth/>
                <Button variant="text">ADD</Button>
            </div>
        </Paper>
    );
}