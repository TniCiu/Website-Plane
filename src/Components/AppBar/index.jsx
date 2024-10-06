import React from "react"
import AppBar  from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import Avatar from '@mui/material/Avatar'


const AppBarComponent = () => {
    return(

        <AppBar 
            position = "fixed"
            sx={{
                backgroundColor:"#fff",
                color:"#000",
                boxShadow:"none"   

            }}
            
        >
        <Toolbar 
        sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"

        }}
        >
            <Box sx={{ display:"flex",alignItems:"center" }}>
            <img src="https://cdn6.agoda.net/images/MVC/default/agoda-logo-v2.png"
            
            style ={{height: "40px", marginRight:"16px"}}
            />
            <Button href="/account/OrderPalne" sx={{color:"#000", textTransform:"none",fontSize:16}}>
            Máy Bay + K.sạn
            </Button>
            <Button sx={{color:"#000", textTransform:"none",fontSize:16}}>
            Chỗ ở
            </Button>
            <Button sx={{color:"#000", textTransform:"none",fontSize:16}}>
            Hoạt động
            </Button>
            <Button sx={{color:"#000", textTransform:"none",fontSize:16}}>
            Phiếu giảm giá và ưu đãi
            </Button>
            <Button sx={{color:"#000", textTransform:"none",fontSize:16}}>
            eSim
            </Button>
            </Box>

            <Box>
            <Button href="/account/login"sx={{color:"#000", textTransform:"none",fontSize:16}} >
            Đăng Nhập
            </Button>
            <Button
            href="/account/SignUp" 
            sx={{
                color:"#000", 
                textTransform:"none",
                fontSize:16,
                border:"1px solid #000",
                marginLeft:"8px",
                padding:"4px 16px",
                borderRadius:"20px"
            }}>
            Đăng Ký
            </Button>
            <Button>
                {/* <ShoppingCartOutlinedIcon/> */}
            <Avatar sx={{width:35,height:35}}
            src="https://th.bing.com/th/id/OIP.olh4HeDtdB7jTL-VBThBkwHaEK?rs=1&pid=ImgDetMain"/>
            </Button>

            </Box>
            </Toolbar>
            </AppBar >
    )

}

export default AppBarComponent