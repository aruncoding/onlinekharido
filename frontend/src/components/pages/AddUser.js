import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, 
    Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar
    } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useState} from 'react';

const AddUser = () => {
    const Input = styled("Input")({
        display: "none",
      });

    const [error, setError] = useState({
        status: false,
        type: "",
        message: ""
    })  

    const [userinfo, setUserInfo] = useState({
        name: "",
        email: "",
        address: [{laneno: "", address:""}],
        state: "",
        location: [],
        image: ""
    })

    const handleChange = (e) => {
        setUserInfo({
            ...userinfo,
            [e.target.name]: e.target.value
        })
        console.log('after set user info',userinfo)
    }

    const dynamicChange = (i, e) => {
        let newUserInfo = [...userinfo.address]
        console.log('first',newUserInfo)
        newUserInfo[i][e.target.name] = e.target.value
        console.log('newUserInfo',newUserInfo)
        setUserInfo({
            ...userinfo,
            address:newUserInfo
        })
    }

    const addField = () => {
        let newAddress = userinfo.address
        newAddress.push({
          laneno: "",
          address: ""
        })
        setUserInfo({
            ...userinfo,
            address:newAddress
        })
    }


    const getLocation = (e) => {
      const checked = e.target.checked;
      let data = userinfo.location;
      if(checked){
        data.push(e.target.value);
        setUserInfo({...userinfo, location: data})
      }
      
      if(!checked){
        const getIndex = data.indexOf(e.target.value);
        data.splice(getIndex,1)
        setUserInfo({...userinfo, location: data})
      }

    }

    const getImage = (e) => {
      console.log(e)
      let imageName = userinfo.image;
      imageName = e.target.files[0].name
      setUserInfo({...userinfo, image:imageName})
    }

    const formSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('name', userinfo.name)
      formData.append('email', userinfo.email)
      formData.append('address', JSON.stringify(userinfo.address))
      formData.append('state', userinfo.state)
      formData.append('location', userinfo.location)
      formData.append('image', userinfo.image)
      if(userinfo.name && userinfo.email && userinfo.address[0].laneno != '' && userinfo.address[0].address != '' && userinfo.state && userinfo.location.length>0 && userinfo.image){
        console.log('form submitted')
        console.log(formData.get('name'))
        console.log(formData.get('email'))
        console.log(formData.get('address'))
        console.log(formData.get('state'))
        console.log(formData.get('location'))
        console.log(formData.get('image'))
        console.log('form submitted')

        setError({status: true,type: "success", message: "User Created SuccessFully"})
      }else{
        setError({status: true, type: "error", message: "Fill All Field"})
      }

      

    }

    return (
        <>
    <Box display="flex" justifyContent="center"  sx={{ backgroundColor:'error.light', padding:2 }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "white" }}>Add User</Typography>
    </Box>
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <Box component="form" noValidate id="addproduct" sx={{padding:3}} onSubmit = {formSubmit}>
          <TextField id="name" name="name" required fullWidth margin="normal" label="User Name"  onChange = {handleChange}/>
          <TextField id="email" name="email" required fullWidth margin="normal" label="Enter Email" onChange = {handleChange} />
          { userinfo.address.map((element, index) => (
            <FormControl fullWidth margin="normal" display="flex" key={index}>
                <FormLabel component="legend">User Info</FormLabel>
                <TextField id="laneno" name="laneno" value={element.laneno} required sx={{width: 300}} margin="normal" label="Home Lane Number"  onChange = {(e) => {dynamicChange(index, e)}} />
                <TextField id="address" name="address" value={element.address} required sx={{width: 300}} margin="normal" label="Address"   onChange = {(e) => {dynamicChange(index, e)}} />
            </FormControl>
          ))}
          <Button variant="contained" disableElevation onClick = {addField}>
              Add
          </Button>
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">Select Category</InputLabel>
            <Select labelId='state-select-label' id="state-select" name="state" value={userinfo.state} label="st" onChange = {handleChange} >
              <MenuItem value="up">Uttar Pradesh</MenuItem>
              <MenuItem value="mp">Madhya Pradesh</MenuItem>
              <MenuItem value="rj">Rajasthan</MenuItem>
              <MenuItem value="gj">Gujarat</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Location Visited</FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Delhi" name="location" onChange = {getLocation}  value="Delhi"  />
              <FormControlLabel control={<Checkbox />} label="Noida" name="location" onChange = {getLocation} value="Noida"  />
              <FormControlLabel control={<Checkbox />} label="Gurgaon" name="location" onChange = {getLocation} value="Gurgaon"  />
              <FormControlLabel control={<Checkbox />} label="Pune"  name="location" onChange = {getLocation} value="Pune"  />
              <FormControlLabel control={<Checkbox />} label="Mumbai" name="location" onChange = {getLocation} value="Mumbai"  />
              <FormControlLabel control={<Checkbox />} label="Bangalore" name="location" onChange = {getLocation} value="Bangalore"  />
              <FormControlLabel control={<Checkbox />} label="Goa" name="location" onChange = {getLocation} value="Goa"  />
            </FormGroup>
          </FormControl>
          <Stack direction="row" alignItems="center" spacing={4} >
            <label htmlFor="profile-photo">
              <Input accept="image/*" id="profile-photo" type="file" onChange= {getImage} />
              <Button variant="contained" component="span">Upload Profile</Button>
            </label>
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt:3, mb:2, px:5 }} color="error">Submit</Button>
           { error.status ? <Alert severity={error.type}>{error.message}</Alert> : " "}
        </Box>
      </Grid>
    </Grid>
    </>
    )
}

export default AddUser