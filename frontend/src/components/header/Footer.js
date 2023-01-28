import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, 
    Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar
    } from '@mui/material';

const Footer = () => {
    return (
        <>
        <Box display="flex" justifyContent="center" sx={{ backgroundColor:'error.light', padding:2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: "bold", color: "white" }}>Footer</Typography>
        </Box>
        </>
    )
}

export default Footer