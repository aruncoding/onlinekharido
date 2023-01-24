import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, 
    Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar
    } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useState} from 'react';

const AddProduct = () => {
    const Input = styled("Input")({
        display: "none",
      });

    const [product, setProduct] = useState({
        product: '',
        description: '',
        category:'',
        location: [],
        image: '',

    })

    const selectLocation = (e) => {
        console.log(e);
        let data = product.location
        data.push(e.target.defaultValue)
        console.log('data',data)
        console.log('location',...product.location)
        setProduct({...product,location:data})
    }

    const getImage = (e) => {
        console.log(e)
        let images = product.image
        images = e.target.files[0]
        let imagename = images.name
        console.log(images)
        setProduct({...product,image:imagename})
    }

      const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
        console.log(product)
      }

      const [error, setError] = useState({
          status: false,
          type: "",
          message: ""
      });

      const formSubmit = (e) => {
          e.preventDefault();
          const data = new FormData()
          data.append('product',product.product)
          data.append('description',product.description)
          data.append('category',product.category)
          data.append('location',product.location)
          data.append('image',product.image)
          if(product.product && product.description && product.category && (product.location).length>0 && product.image){
            console.log("form submitted")
            console.log(data.get('product'))
            console.log(data.get('description'))
            console.log(data.get('category'))
            console.log(data.get('location'))
            console.log(data.get('image'))
            console.log("form submitted")
            setError({status: true, message: 'Product Added Successfully.....', type: "success"})
          }else{
            setError({status: true, message: ' All Field Required', type: "error"})
          }
      }


    return (
        <>
    <Box display="flex" justifyContent="center" sx={{ backgroundColor:'error.light', padding:2 }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "white" }}>Add Product</Typography>
    </Box>
    <Grid container justifyContent="center">
      <Grid item xs={5}>
        <Box component="form" noValidate id="addproduct" sx={{padding:3}} onSubmit={formSubmit}>
          <TextField id="product" name="product" required fullWidth margin="normal" label="Product Title" onChange = {handleChange} />
          <TextField multiline id="description" name="description" required fullWidth margin="normal" label="Product Description" onChange = {handleChange} />
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">Select Category</InputLabel>
            <Select labelId='state-select-label' id="state-select" name="category" value={product.category} label="st" onChange={handleChange}>
              <MenuItem value="ec">Electronic</MenuItem>
              <MenuItem value="fw">FootWear</MenuItem>
              <MenuItem value="tw">TopWear</MenuItem>
              <MenuItem value="iw">InnerWear</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Preferred Sale Location</FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Delhi" name="location"  value="Delhi" onChange = {selectLocation} />
              <FormControlLabel control={<Checkbox />} label="Noida" name="location"  value="Noida" onChange = {selectLocation} />
              <FormControlLabel control={<Checkbox />} label="Gurgaon" name="location"  value="Gurgaon" onChange = {selectLocation} />
              <FormControlLabel control={<Checkbox />} label="Pune"  name="location" value="Pune" onChange = {selectLocation} />
              <FormControlLabel control={<Checkbox />} label="Mumbai" name="location"  value="Mumbai" onChange = {selectLocation} />
            </FormGroup>
          </FormControl>
          <Stack direction="row" alignItems="center" spacing={4} >
            <label htmlFor="profile-photo">
              <Input accept="image/*" id="profile-photo" type="file" onChange={getImage} />
              <Button variant="contained" component="span">Upload Photo</Button>
            </label>
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt:3, mb:2, px:5 }} color="error">Submit</Button>
          {error.status ? <Alert severity={error.type}>{error.message}</Alert> : '' }
        </Box>
      </Grid>
    </Grid>
    </>
    )
}

export default AddProduct;