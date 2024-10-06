import React, { useState } from 'react'
import { Box, Button, TextField } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const OrderPalne = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <Box
        sx={{
            height:"400px",
            backgroundImage:`url(https://cdn6.agoda.net/images/mobile/bg_mspa.jpg)`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}>

            <Box sx={{
                backgroundColor:"#fff",
                borderRadius:"12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                width:"80%",
                margin:"auto",
                padding:"16px",
                position:"relative",
                top:"100px"
            }}>

                <Box sx={{
                    display:"flex",
                    justifyContent:"space-around",
                    mb:2
                }}>
                    <Button
                    sx={{
                        textTransform:"none",
                        borderBottom:"3px solid #1976d2",
                        borderRadius:"0"
                    }}
                    >
                        Một chiều

                    </Button>
                    <Button
                    sx={{
                        textTransform:"none",
                        color:"black",
                        borderRadius:"0"
                    }}
                    >
                        Khứ hồi

                    </Button>
                </Box>
                <Box >
                    {/* <LocalAirportOutlinedIcon 
                    sx={{
                        marginTop:"10px",
                        fontSize:'30px'

                    }}/> */}
                    <TextField
                    variant="outlined"
                    label="Bay từ"
                    sx={{flex:1}}
                    
                    >


                    </TextField>
                    {/* <SwapHorizOutlinedIcon/>
                    <PlaceOutlinedIcon 
                    sx={{
                        marginTop:"10px",
                        fontSize:'30px'

                    }}/> */}
                    <TextField
                    variant="outlined"
                    label="Ngày"
                    sx={{flex:1}}
                    
                    >


                    </TextField>

                    
                    <Box sx={{display:"flex",gap:2,mt:2}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Ngày"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} sx={{ flex: 1 }} />}
            />
        </LocalizationProvider>
                    {/* <SwapHorizOutlinedIcon/> */}
                    {/* <PlaceOutlinedIcon 
                    sx={{
                        marginTop:"10px",
                        fontSize:'30px'

                    }}/> */}
                    <TextField
                    variant="outlined"
                    label="Bay từ"
                    sx={{flex:1}}
                    
                    >


                    </TextField>
                        
                    </Box>
                    
               </Box>                    
            </Box>
        </Box>

    )
}


export default OrderPalne