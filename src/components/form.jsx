import React from "react";

//importando do material
import { TextField, Button, Paper } from "@mui/material"; 

export default function Form(){
    return(
        <Paper>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Add</Button>
        </Paper>
    );
}