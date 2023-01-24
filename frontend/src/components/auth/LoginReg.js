import {Grid,Card,Typography,Tabs,Tab,Box} from '@mui/material';
import { useState } from 'react';
import pic1 from '../../images/pic1.png';
import UserLogin from './UserLogin';
import Registration from './Registration';
import { ShoppingBag } from '@mui/icons-material';

const TabPanel = (props) => {
    const {children, value, index} = props;
    return(
        <div role='tabpanel' hiddden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}


const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        // console.log('newValue',newValue)
        // console.log('value',value)
        // console.log('event',event)
    }
  return <>
   <Grid container sx={{height:'90vh'}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage:`url(${pic1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display:{xs:'none', sm:'block'}
        }}>
        </Grid>
        <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{height:'100%', width:'100%'}}>
                <Box>
                    <Box sx={{borderBottom:1, borderColr:'divider'}}>
                        <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange = {handleChange}>
                            <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                            <Tab label='Registartion' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                        </Tabs>
                    </Box>
                        <TabPanel value={value} index={0}><UserLogin /></TabPanel>
                        <TabPanel value={value} index={1}><Registration /></TabPanel>
                </Box>
                <Box textAlign='center' sx={{ mt: 2 }}>
                    <ShoppingBag sx={{ color: 'purple', fontSize: 100 }}/>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>OnLine-Kharido</Typography>
                </Box>
            </Card>
        </Grid>
   </Grid>

  </>
}

export default LoginReg