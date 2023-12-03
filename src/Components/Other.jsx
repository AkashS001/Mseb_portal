import React,{useState}from 'react';


import { Typography, Grid, TextField, FormControl, InputLabel, MenuItem,Select } from "@mui/material";
function Other(){
  const [meterRead, setMeterRead] = useState('');
  const [showTextField,setShowTextField] = useState(false);

  const handleChangeYNM = (event) => {
  
    setMeterRead(event.target.value);
  
  };


  const [meterData, setMeterData] = useState('');

const handleChangeYNmeterdata = (event) => {
  const selectedValue = event.target.value;
  setMeterData(event.target.value);
  setShowTextField(selectedValue === 'no');
};
    return(
     <React.Fragment>
        
   

    
        <form>
       
                    <Grid  style={{marginTop:'10px',marginLeft:'3px'}} container spacing={2}>
                   {/* <Grid xs={3} sm={2} item  >
                         <TextField label="Over all MF for unit"  placeholder=""  name="overall_mf"varient="outlined" fullWidth required />
                   </Grid> */}
{/*
                   <Grid xs={3} sm={2} item  >
                         <TextField type='number' label="Freq.(in Hz)"  placeholder=""  name="freq"varient="outlined" fullWidth required />
                   </Grid>*/}

                   <Grid xs={5} sm={4} item>
                   <FormControl fullWidth variant="outlined">
                    <InputLabel id="meter-data-read-select-label" varient="outlined" required >Whether Meter data read through MRI/Laptop</InputLabel>
                    <Select
                     labelId="meter-data-read-select-label"
                     label="Whether Meter data read through MRI/Laptop"
                     id="meterdata"
                     value={meterRead}
                     onChange={handleChangeYNM}
                      >
                      <MenuItem value="yes">YES</MenuItem>
                      <MenuItem value="no">NO</MenuItem>
                    </Select>
                   </FormControl>
                   </Grid>

                   <Grid xs={5} sm={4} item>
                   <FormControl fullWidth variant="outlined">
                    <InputLabel id="meter-data-collect-select-label" varient="outlined" required>Whether meter data collected successfully</InputLabel>
                    <Select
                     labelId="meter-data-collect-select-label"
                     label="Whether meter data collected successfully"
                     id="meterdata"
                     value={meterData}
                     onChange={handleChangeYNmeterdata}
                     >
                      <MenuItem value="yes">YES</MenuItem>
                      <MenuItem value="no">NO</MenuItem>
                    </Select>
                   </FormControl>
                   </Grid>

                   
                   
                  {showTextField &&( <Grid xs={5} sm={4} item  >
                         <TextField label="If NO, specify reason"  placeholder=""  name="ifNoSpecifyReason"varient="outlined" fullWidth required />
                   </Grid> )} 
                   

                   



        </Grid>



        <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Details of seals and its condition</Typography>
          <Grid style={{marginLeft:'3px',marginBottom:30}}container spacing={2}>
            <Grid xs={3} sm={2} item  >
              <TextField label="On Meter Box"  placeholder=""  name="onMeterBox"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4}  sm={3} item>
              <TextField label="On Meter Body" placeholder="" name="onMeterBody"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3}item>
              <TextField  type="text"label=" On Meter terminal cover" placeholder="" name="onMeterTerminalCover" varient="outlined"  fullWidth required />
            </Grid>

            

            {/* <Grid xs={3}  sm={2} item>
              <TextField label="MD Reset" placeholder="" name="md_reset" varient="outlined" fullWidth required />
            </Grid> */}

            <Grid xs={3} sm={2} item>
              <TextField  label="On Optical Port" placeholder="" name="onOpticalPort" varient="outlined" fullWidth  required />
            </Grid>

            <Grid xs={3} sm={2} item>
              <TextField  label="CT Box if any" placeholder="" name="ctBoxIfAny" varient="outlined" fullWidth  />
            </Grid>


            <Grid xs={4} sm={3} item>
              <TextField label="Other" placeholder="" name="other"varient="outlined" fullWidth required />
            </Grid>
            </Grid> 
            </form>
        


     </React.Fragment>



    );
}

export default Other;