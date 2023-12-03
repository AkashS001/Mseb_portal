import { useState } from "react";
import React,{Suspense} from "react";
// import { makeStyles } from '@mui/material';
import {
    Grid, Select, MenuItem,
    FormControl, InputLabel
} from "@mui/material";
import Form from "./Form";
//import HtForm from "./HtForm";
//import Form_Phase1 from "./Form_Phase1";

const FormSelect = () => {
    const [form, setForm] = useState('');

    const handleChangeForm = (event) => {
        setForm(event.target.value);
    };

    return (<>



        <Grid container style={{ height: "230px"}}>

            <Grid xs={4} sm={3} style={{alignItems:"center"}} item>
                <FormControl fullWidth>
                    <InputLabel id="select-form">Select Form</InputLabel>
                    <Select labelId="select-form"
                        label="Select Form"
                        id="form-selected"
                        value={form}
                        onChange={handleChangeForm}
                        required>
                        <MenuItem value={"phase1"}>1 PH Form</MenuItem>
                        <MenuItem value={"phase3"}>3 PH Form</MenuItem>
                        <MenuItem value={"htform"}>HT Form</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>


        <Suspense fallback={<div>Loading...</div>}>
        {form === 'phase1' && (
          <Form/>
        )}

        {form === 'phase3' && (
          <Form/>
        )}
        
        {form === 'htform' && (
          <Form/>
        )}
        
      </Suspense>

      
    </>);
}
export default FormSelect;