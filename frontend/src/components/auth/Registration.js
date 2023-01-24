import { useState } from 'react';
import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, 
    Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar, useStepperContext
    } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

     // Style for Upload Button
    const Input = styled("Input")({
        display: "none",
    });

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    // States
    const [name, setName] =useState()
    const [email, setEmail] =useState()
    const [st, setSt] =useState('')
    const [gender, setGender] =useState()
    const [pjl, setPjl] =useState([])
    const [pimage, setPimage] =useState('')
    const [rdoc, setRdoc] =useState('')
    const [password, setPassword] =useState('')
    const [passwordconfirmation, setPasswordconfirmation] =useState('')

    //Function to push all prefered location in a Array
    const getPjl = (e) => {
        let data = pjl
        data.push(e.target.value)
        setPjl(data)
    }



    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('st', st)
        data.append('gender', gender)
        data.append('pjl', pjl)
        data.append('pimage', pimage)
        data.append('rdoc', rdoc)
        data.append('Password', password)
        data.append('password_confirmation', passwordconfirmation)
        if(name && email && st && gender && pjl && password && passwordconfirmation){
          if(password === passwordconfirmation){
            console.log(data.get('name'))
            console.log(data.get('email'))
            console.log(data.get('st'))
            console.log(data.get('gender'))
            console.log(data.get('pjl'))
            console.log(data.get('pimage'))
            console.log(data.get('rdoc'))
            console.log(data.get('Password'))
            console.log(data.get('password_confirmation'))
            
            setError({status: true, msg: "successfull", type: "success"})
          }else{
            setError({status: true, msg: "Password and Confirm Password Doesn't Match", type: "error"})
          }
        }else{
          setError({status: true, msg: "All Fields Are Required", type: "error"})
        }
      }

  return <>
    <Grid container justifyContent="center">
     
        <Box component="form" noValidate id="resume-form" sx={{padding:3}} onSubmit={handleSubmit} >
          <TextField id="name" name="name" required fullWidth margin="normal" label="Name" onChange={(e) => {setName(e.target.value)}}/>
          <TextField id="email" name="email" required fullWidth margin="normal" label="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">State</InputLabel>
            <Select labelId='state-select-label' id="state-select" value={st} label="st" onChange={(e) => {setSt(e.target.value)}}>
              <MenuItem value="up">Uttar Pradesh</MenuItem>
              <MenuItem value="br">Bihar</MenuItem>
              <MenuItem value="mp">Madhya Pradesh</MenuItem>
              <MenuItem value="jh">Jharkhand</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel id="gender-radio">Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e) => {setGender(e.target.value)}}/>
              <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e) => {setGender(e.target.value)}}/>
              <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e) => {setGender(e.target.value)}}/> 
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Preferred Job Location</FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Delhi" value="Delhi" onChange= {(e) => getPjl(e)}/>
              <FormControlLabel control={<Checkbox />} label="Noida" value="Noida" onChange= {(e) => getPjl(e)}/>
              <FormControlLabel control={<Checkbox />} label="Gurgaon" value="Gurgaon" onChange= {(e) => getPjl(e)}/>
              <FormControlLabel control={<Checkbox />} label="Pune" value="Pune" onChange= {(e) => getPjl(e)}/>
              <FormControlLabel control={<Checkbox />} label="Mumbai" value="Mumbai" onChange= {(e) => getPjl(e)}/>
            </FormGroup>
          </FormControl>
          <Stack direction="row" alignItems="center" spacing={4} >
            <label htmlFor="profile-photo">
              <Input accept="image/*" id="profile-photo" type="file" onChange = {(e) => {setPimage(e.target.files[0])}}/>
              <Button variant="contained" component="span">Upload Photo</Button>
            </label>
            <label htmlFor="resume-file">
              <Input accept="doc/*" id="resume-file" type="file" onChange = {(e) => {setRdoc(e.target.files[0])}}/>
              <Button variant="contained" component="span">Upload File</Button>
            </label>
          </Stack>
          <TextField margin='normal' required fullWidth id='Password' name='Password' label='Password' type='password' onChange={ (e) => { setPassword(e.target.value) } } />
          <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' onChange= { (e) => { setPasswordconfirmation(e.target.value) } } />   
          <Button type="submit" variant="contained" sx={{ mt:3, mb:2, px:5 }} color="error">Submit</Button>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }
        </Box>
    </Grid>
  </>
}

export default Registration