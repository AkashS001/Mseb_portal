import React from 'react';
import { useState, useEffect } from "react";
// import { makeStyles } from '@mui/material';
import {
  Typography, Card, CardContent, Grid, Select, MenuItem,
  TextField, FormControl, InputLabel
} from "@mui/material";
// import "./App.css";
import { Table } from "./Table";
import { MeterTable } from "./MeterTable";
import { CurrentVoltTable } from "./CurrentVoltTable";
import { Button } from '../styles/Button';
import Other from './Other';
import Inspection from './Inspection';
//import Form_Phase1 from './Form_Phase1';


function Form() {
  //for Date and time
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();
  // Select Values
  const [meterin, setMeterIn] = useState('');

  const handleChangeYN = (event) => {
    setMeterIn(event.target.value);
  };
  const [capinst, setCapInt] = useState('');
  const [showField,setShowField] = useState(false);

  const handleChangeYNCap = (event) => {
    const selectedValue = event.target.value;
    setCapInt(event.target.value);
    setShowField(selectedValue === 'yes');
  };
  const [capadeq, setCapAdeq] = useState('');

  const handleChangeYadeq = (event) => {
    setCapAdeq(event.target.value);
  };

  const [meterbeforeafter, setMeterbeforeafter] = useState('');

  const handleChangeYNba = (event) => {
    setMeterbeforeafter(event.target.value);
  };
  const [meterinsteye, setMeterinsteye] = useState('');

  const handleChangeYNinstEye = (event) => {
    setMeterinsteye(event.target.value);
  };

  const [meterservice, setMeterservice] = useState('');
  const [showTextField, setShowTextField] = useState(false);

  const handleChangeYNmeterService = (event) => {
    const selectedValue = event.target.value;
    setMeterservice(event.target.value);
    setShowTextField(selectedValue === 'yes');
  };
  {/*const [externalct, setExternalct] = useState('');

const handleChangeYN1 = (event) => {
  setExternalct(event.target.value);
};*/}

  return (

    <React.Fragment>
      <div>


        <Card style={{ maxWidth: "500", padding: "40px 5px" }}>
          <CardContent>
            <form>
              {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
              <Grid container spacing={2}>
                <Grid xs={4} sm={3} item>
                  <TextField label="Serial Number" placeholder="Enter Serial Number " name="serialNumber" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>
                {/* theftDetectedBy */}
                <Grid xs={3} sm={2} item>
                  <TextField label="Case Inspected By" placeholder="
                   " name="flyingSquadUnit" varient="filled" autocomplete="off"  fullWidth required />
                </Grid>

                <Grid xs={3} sm={2} item>
                  <TextField label="Theft Detected By" placeholder="Theft Detected By" name="theftDetectedBy" varient="filled" autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={3} sm={2} item>
                  <TextField label="Place" placeholder="Enter place " name="place" varient="outlined" autocomplete="off" fullWidth required />
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
                <Grid xs={4} sm={3} item  >
                  <TextField label="Consumer Number" type="number" placeholder="Enter Consumer Number" name="consumerNumber" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>


                <Grid xs={4} sm={3} item  >
                  <TextField label="BU Number" type="number" placeholder="Enter BU Number" name="buNumber" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={10} sm={6} item>
                  <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="name" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField type="text" label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" autocomplete="off" multiline rows={4} fullWidth required />
                </Grid>

                <Grid xs={10} sm={6} item>
                  <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="nameOfOwner" varient="outlined"  autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="contactNumber" varient="outlined" autocomplete="off" fullWidth />
                </Grid>




                <Grid xs={4} sm={3} item>
                  <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="category" varient="outlined"  autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="typeOfInstallation" varient="outlined"  autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariffDetails" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="sanctionedLoad" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="connectedLoad" varient="outlined"  autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normalWorkingHours" varient="outlined" autocomplete="off"  fullWidth required />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="nameOfBillingOffice" varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

              </Grid>

              <Typography gutterBottom variant="h6" sx={{marginTop:5}}>Meter Details</Typography>
              <Grid  style={{marginBottom:30}}container spacing={2}>
                <Grid xs={4} sm={3} item>
                  <FormControl fullWidth>
                    <InputLabel id="meter-installed-select-label">Whether meter installed in meter box or not</InputLabel>
                    <Select labelId="meter-installed-select-label"
                      label="Whether meter installed in meter box or not"
                      id="meter-installed"
                      value={meterin}
                      onChange={handleChangeYN}
                      required>
                      <MenuItem value={"Yes"}>YES</MenuItem>
                      <MenuItem value={"No"}>NO</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Meter Serial No. As per Bill" placeholder="Enter Meter Serial No. As per Bill" name="meterSerialNumber" variant="outlined" autocomplete="off" fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="Meter Make" placeholder="Enter Meter Make" variant="outlined" name="make" autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Meter Capacity in Amp" placeholder="Enter Meter Capacity in Amp" name="capacity" variant="outlined" autocomplete="off" fullWidth />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="External CT ratio if any" placeholder="Enter External CT ratio" name="externalCtRatio" variant="outlined" autocomplete="off" fullWidth />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Lab No." placeholder="Enter Lab No." variant="outlined" name='labNo'  autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Type" placeholder="Enter Type" variant="outlined" name='type' autocomplete="off"  fullWidth required />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Rev, Imp/Wh" placeholder="Enter Rev, Imp/Wh" variant="outlined" name='revImpKwh' autocomplete="off" fullWidth required />
                </Grid>


                <Grid xs={4} sm={3} item>
                  <TextField label="meter CT ratio" placeholder="Enter Meter CT Ratio" variant="outlined" name='meterCTRatio' autocomplete="off"  fullWidth required />
                </Grid>

                <Grid xs={4} sm={3} item>
                  <TextField label="MF as per bill" placeholder="Enter Meter Make" variant="outlined" autocomplete="off" fullWidth required />
                </Grid>

              </Grid>
              
              <Grid xs={12} sm={9} item style={{ marginBottom: 20 }}>
                <MeterTable />
              </Grid>
              <Grid style={{  marginTop: "20px" }} container spacing={2}>

                
                <Grid  xs={4} sm={3} item>
                  <TextField label="Scale Factor" placeholder="Enter  Scale Factor" variant="outlined" name='scaleFactor' autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={4} sm={3} item>
                  <TextField label="Over all MF for units" placeholder="Enter  Over all MF for units" name='overallMFForUnit' variant="outlined" autocomplete="off" fullWidth required />
                </Grid>
                <Grid xs={3} sm={2} item  >
                         <TextField type='number' label="Freq.(in Hz)"  placeholder=""  name="freq"varient="outlined" autocomplete="off" fullWidth required />
                </Grid>

                {/* Here we  have call other component */}
                  <Other />
              </Grid>
             

              <Grid xs={12} sm={9} item>

              {/*here we called the CurrentVoltTable component  */}
                <CurrentVoltTable />
              </Grid>

              <Typography gutterBottom variant="h6" sx={{ marginTop: 5 }}> General Observations</Typography>


              <Grid  style={{ marginBottom:20}}container spacing={2}>
              <Grid xs={4} sm={3} item  >

<FormControl fullWidth variant="outlined">
  <InputLabel id="meter-cap-install-select-label" varient="outlined" required >Meter Capacitor is Installed</InputLabel>
  <Select
    labelId="meter-cap-install-select-label"
    label="Meter Capacitor is Installed"
    id="meterdata"
    value={capinst}
    onChange={handleChangeYNCap}
  >
    <MenuItem value="yes">YES</MenuItem>
    <MenuItem value="no">NO</MenuItem>
  </Select>
</FormControl>
</Grid>

               { showField && (<Grid sm={4} item  >
                  
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="meter-cap-adequate-select-label" varient="outlined" required > Whether capacity is adequate or not</InputLabel>
                    <Select
                      labelId="meter-cap-adequate-select-label"
                      label=" Whether capacity is adequate or not"
                      id="metercapadeq"
                      value={capadeq}
                      onChange={handleChangeYadeq}
                    >
                      <MenuItem value="adequate">Adequate</MenuItem>
                      <MenuItem value="notadeuqte">Not Adequate</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>)}
                <Grid xs={3} sm={2} item  >
                 
                 <FormControl fullWidth variant="outlined">
                   <InputLabel id="meter-install-beforeafter-select-label" varient="outlined" required >Meter installed at</InputLabel>
                   <Select
                     labelId="meter-install-befoteafter-select-label"
                     label="Meter installed at"
                     id="meterInstalledAt"
                     value={meterbeforeafter}
                     onChange={handleChangeYNba}
                   >
                     <MenuItem value="before cut out">before cut out</MenuItem>
                     <MenuItem value="after cut out">After cut out</MenuItem>
                   </Select>
                 </FormControl>
               </Grid>

               <Grid xs={4} sm={3} item  >
                
                 <FormControl fullWidth variant="outlined">
                   <InputLabel id="meter-install-eye-select-label" varient="outlined" required >Meter installed at eye sight</InputLabel>
                   <Select
                     labelId="meter-install-eye-select-label"
                     label="Meter installed at eye sight"
                     id="meterInstalledAtEyesight"
                     value={meterinsteye}
                     onChange={handleChangeYNinstEye}
                   >
                     <MenuItem value="yes">YES</MenuItem>
                     <MenuItem value="no">NO</MenuItem>
                   </Select>
                 </FormControl>
               </Grid>

               <Grid xs={3} sm={2} item  >
                 <TextField label="Other Observation if any" placeholder="" name="otherObservations" autocomplete="off" variant="outlined" />
               </Grid>


             </Grid>

                


             

              



              <Grid xs={12} sm={9} item>

                <Table />

              </Grid>

              <Grid container spacing={3} style={{ marginTop: "20px" }}>
              <Grid xs={6} sm={4} item  >
                 
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

                {showTextField && (<Grid sm={4} item  >
                  <TextField label="Justify" placeholder="" name="cap_adequate" varient="outlined" fullWidth required />
                </Grid>)}
              </Grid>
              <Inspection />

              <Grid xs={12} item style={{ marginTop: "20px" }}>
                <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
              </Grid>


            </form>
          </CardContent>

        </Card>


      </div>


    </React.Fragment>



  );
}
export default Form;