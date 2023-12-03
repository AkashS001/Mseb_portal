import React from 'react';
import { useState ,useEffect} from "react";
// import { makeStyles } from '@mui/material';
import { Typography, Card, CardContent, Grid, Select,MenuItem,
  TextField,FormControl,InputLabel } from "@mui/material";
import { Button } from '../styles/Button';
import { CurrentVoltTablePhase1 } from './CurrentVoltTablePhase1';
import { ConnectedLoadPhase1 } from './ConnectedLoadPhase1';
//import HtForm from './HtForm';
const Form_Phase1 = () => {

  //for Date and time
  const [dateTime, setDateTime] = useState(new Date());
  const [meterservice, setMeterservice] = useState('');

  const handleChangeYNmeterService = (event) => {
    setMeterservice(event.target.value);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();
    const [meterin, setMeterIn] = useState('');

const handleChangeYN = (event) => {
  setMeterIn(event.target.value);
};

  return (
    <>
        <Card style={{maxWidth:"500",padding:"40px 5px"}}>
        <CardContent>
            <form action="">
            <Grid container spacing={2}>
          <Grid xs={4} sm={3} item>
              <TextField label="Serial Number" placeholder=" " name="serialNumber"varient="outlined" autoComplete="off"  fullWidth required />
            </Grid>
{/* theftDetectedBy */}
            <Grid xs={4} sm={3} item>
              <TextField label="Flying Squad Unit" placeholder="Enter Flying Squad Unit " name="flyingSquadUnit" varient="filled" autoComplete="off"  fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Theft Detected By" placeholder="Theft Detected By" name="theftDetectedBy" varient="filled" autoComplete="off" fullWidth required />
            </Grid>
            <Grid xs={3}  sm={2}  item>
              <TextField label="Place" placeholder="Enter place " name="place" varient="outlined" autoComplete="off" fullWidth required />
            </Grid>

            <Grid item xs={1.5}>
          <TextField
            label="Time"
            name="time"
            id="time"
            variant="outlined"
            value={formattedTime}
            fullWidth
            
            InputProps={{
              readOnly: true, // Prevent user input
              style: { fontWeight: "bold" },
            }}
           />
           </Grid>
           <Grid item xs={1.5}>
          <TextField
            label="Date"
            name="date"
            id="date"
            variant="outlined"
            value={formattedDate}
            fullWidth
            
            InputProps={{
              readOnly: true, // Prevent user input
              style: { fontWeight: "bold" },
            }}
           />
           </Grid>
            <Grid xs={12} sm={6} item  >
              <TextField label="Consumer Number"  type="number" placeholder="Enter Consumer Number"  name="consumerNumber"varient="outlined" autoComplete="off"  fullWidth required />
            </Grid>
            {/* buNumber; */}

            <Grid xs={12} sm={6} item  >
              <TextField label="BU Number"  type="number" placeholder="Enter BU Number"  name="buNumber"varient="outlined" autoComplete="off"  fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="name"varient="outlined" autoComplete="off"  fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField  type="text"label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" autocomplete="off" multiline rows={4} fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="nameOfOwner"varient="outlined" autocomplete="off" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="contactNumber" varient="outlined" autoComplete="off"  fullWidth  />
            </Grid>

            {/* <Grid xs={4} sm={3} item>
              <TextField type="number" label=" Mobile Number Of User" placeholder="Enter User Mobile Number" name="mob_num-user"varient="outlined" fullWidth  />
            </Grid> */}


            <Grid xs={4} sm={3} item>
              <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="category"varient="outlined" autoComplete="off"  fullWidth required />
            </Grid>
            
            <Grid xs={4} sm={3}item>
              <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="typeOfInstallation" varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariffDetails" varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3}item>
              <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="sanctionedLoad" varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={4} sm={3} item>
              <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="connectedLoad" varient="outlined"  autocomplete="off" fullWidth required />
            </Grid>
            <Grid xs={4} sm={3}item>
              <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normalWorkingHours" varient="outlined" autocomplete="off" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="nameOfBillingOffice" varient="outlined" autocomplete="off" fullWidth required />
            </Grid>

             </Grid>
             
            <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
            <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
        <FormControl fullWidth>
          <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
          <Select labelId="meter-installed-select-label" 
          label="Whether meter installed in meter box or not"
          id="meter-installed"
          value={meterin}
          onChange={handleChangeYN}
          required>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
        </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill"  name="meterSerialNumber" variant="outlined" autoComplete="off" fullWidth required/>
          </Grid>
          {/* <Grid xs={12} sm={6} item>
          <TextField label="Actual Meter Serial No. at Site" placeholder="Enter Actual Meter Serial No. at Site" variant="outlined" fullWidth required/>
          </Grid> */}
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" name="make" autoComplete="off" fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" name="capacity" variant="outlined" autoComplete="off" fullWidth required/>
          </Grid>
          
          
          <Grid xs={12} sm={6} item>
          <TextField label="Type" placeholder="Enter Type" variant="outlined" name='type'  autoComplete="off"  fullWidth required/>
          </Grid>
          <Grid xs={12} sm={6} item>
          <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" name='revImpKwh' autoComplete="off" fullWidth required/>
          </Grid> 
          </Grid>
          <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Current and Volt measurement</Typography>
          <Grid xs={12} sm={9} item>
                <CurrentVoltTablePhase1/>
            </Grid>
          
        <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Details of Connected Loads</Typography>
          

          
          <Grid xs={12} sm={9} item>
              <ConnectedLoadPhase1/>
              
          </Grid>
          

            <Grid xs={12}  item  style={{marginTop:"20px"}}>
                <TextField label="Irrgularaties Observed" placeholder="Enter Observed Irregularities" multiline rows={5} name="irregularitiesObserved" varient="outlined" fullWidth required />
            </Grid>
           

            <Grid container spacing={3} style={{ marginTop: "20px" }}>
                <Grid xs={6} sm={4} item  >
                  {/*<TextField label="Whether Meter / Service kept under Observation?"  placeholder=""  name="whetherMeterServiceKeptUnderObservation"varient="outlined" fullWidth required />*/}
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="meter-service-select-label" varient="outlined" required >Whether Meter / Service kept under Observation?</InputLabel>
                    <Select
                      labelId="meter-service-select-label"
                      label="Whether Meter / Service kept under Observation?"
                      id="meterkeptservice"
                      value={meterservice}
                      onChange={handleChangeYNmeterService}
                    >
                      <MenuItem value="yes">YES</MenuItem>
                      <MenuItem value="no">NO</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid sm={4} item  >
                  <TextField label="If Yes, Justify" placeholder="" name="cap_adequate" varient="outlined" fullWidth />
                </Grid>
              </Grid>
             

              <Grid xs={12} item style={{ marginTop: "20px" }}>
                <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
         
            </form> 

         
        </CardContent>
        </Card>
        

    </>
  )
}

export default Form_Phase1;