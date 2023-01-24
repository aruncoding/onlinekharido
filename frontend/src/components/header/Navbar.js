import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Box sx={{FlexGrow:1}}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                            OnLine-Kharido
                        </Typography>
                        <Button component={NavLink} to ='/' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Home</Button>
                        <Button component={NavLink} to ='/aboutus' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>AboutUs</Button>
                        <Button component={NavLink} to ='/addproduct' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>AddProduct</Button>
                        <Button component={NavLink} to ='/userprofile' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>UserProfile</Button>
                        <Button component={NavLink} to ='/adduser' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>AddUser</Button>
                        <Button component={NavLink} to ='/changepassword' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>ChangePassword</Button>
                        <Button component={NavLink} to ='/contact' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Contact</Button>
                        
                        <Button component={NavLink} to ='/dashboard' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Dashboard</Button>
                        <Button component={NavLink} to ='/login' style={({isActive}) => {return  {backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Login/Registration</Button>

                        
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Navbar