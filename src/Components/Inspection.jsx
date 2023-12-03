import React, { useState } from 'react';
import { Typography, TextField, Grid, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
//import { ImageTable } from './ImageTable';
//import {Add }from './add';
//import SignatureTable from './SignatureTable';
function Inspection() {
    const [inspect, setInspect] = useState('');
    const [showTextField, setShowTextField] = useState(false);

    const handleChangeInspect = (event) => {
        const selectedValue = event.target.value;
    setInspect(event.target.value);
    setShowTextField(selectedValue === 'u/o case');

    };
    return (
        <React.Fragment>
            <form style={{ marginTop: "20px" }}>
                <Typography gutterBottom variant="h6" ></Typography>
                <Grid style={{ marginBottom: '40px' }} container spacing={2}>
                    <Grid xs={12} item  >
                        <TextField label="Irrgularaties Observed" placeholder="Enter Observed Irregularities" multiline rows={5} name="irregularitiesObserved" varient="outlined" fullWidth required />
                    </Grid>


                    <Grid xs={6} sm={4} item  >

                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="inspection-service-is-liable" varient="outlined" required >According to inspection service is liable to book</InputLabel>
                            <Select
                                labelId="inspection-service-is-liable"
                                label="According to inspection service is liable to book"
                                id="meterdata"
                                value={inspect}
                                onChange={handleChangeInspect}
                            >
                                <MenuItem value="u/s 135">U/s 135</MenuItem>
                                <MenuItem value="u/s 126">U/s 126</MenuItem>
                                <MenuItem value="nil">Nil</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                                <MenuItem value="u/o case">U/O Case</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {showTextField && <Grid xs={12} sm={6} item  >
                        <TextField label="If Under Observation" placeholder="" name="under_obser" varient="outlined" fullWidth />
                    </Grid>}

                    <Grid xs={12} sm={6} item  >
                        <TextField label="Remedial action proposed" placeholder="" name="remed_action" varient="outlined" fullWidth required />
                    </Grid>


                    <Grid xs={12} sm={6} item  >
                        <TextField label="Instruction to Consumer/Representative if any" placeholder="" name="instruct_consum" varient="outlined" fullWidth />
                    </Grid>

                    <Grid xs={12} sm={6} item  >
                        <TextField label="Instruction to billing Incharge" placeholder="" name="instruct_bill" varient="outlined" fullWidth required />
                    </Grid>

                </Grid>

                {/* <ImageTable/>*/}

            </form>


        </React.Fragment>

    );
}

export default Inspection;