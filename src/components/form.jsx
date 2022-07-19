import React from "react";

//importando do material
import { TextField } from "@mui/material"; 
import { Button } from "@mui/material"; 

export default function Form(){
    return(
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Add</Button>
        </div>
    );
}