import React from "react";
import { Box, Button, Checkbox, TextField, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: "400px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          padding: "32px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          Đăng Ký
        </Typography>

        {/* Form Fields */}
        <TextField label="Tên" fullWidth margin="normal" variant="outlined" />
        <TextField label="Họ" fullWidth margin="normal" variant="outlined" />
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
        <TextField
          label="Mật khẩu"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
        />
        <TextField
          label="Xác Nhận Mật Khẩu"
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
        />

        {/* Checkbox */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
          <Checkbox />
          <Typography variant="body2">
            Tôi đồng ý nhận thông tin cập nhật và chương trình khuyến mãi về Agoda và các chi nhánh hoặc đối tác.
          </Typography>
        </Box>

        {/* Sign-Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "16px", height: "48px" }}
        >
          Đăng ký
        </Button>

        {/* Divider */}
        <Divider sx={{ margin: "24px 0" }}>hoặc tiếp tục với</Divider>

        {/* Social Login Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Button
            variant="outlined"
            sx={{ minWidth: "48px", padding: "12px" }}
            startIcon={<img src="https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg" alt="Google" width="20px" />}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            sx={{ minWidth: "48px", padding: "12px" }}
            startIcon={<img src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg" alt="Facebook" width="20px" />}
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            sx={{ minWidth: "48px", padding: "12px" }}
            startIcon={<img src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg" alt="Apple" width="20px" />}
          >
            Apple
          </Button>
        </Box>

        {/* Footer Links */}
        <Typography variant="body2" sx={{ textAlign: "center", marginTop: "16px" }}>
          Bạn đã có tài khoản?{" "}
          <Typography  
            component={Link}
            to="/account/login"   sx={{ color: "#1976d2", cursor: "pointer", textDecoration: "none" }}>
            Đăng nhập
          </Typography>
        </Typography>

        <Typography variant="caption" sx={{ display: "block", textAlign: "center", marginTop: "24px" }}>
          Khi đăng nhập, tôi đồng ý với các{" "}
          <Typography component="span" sx={{ color: "#1976d2", cursor: "pointer" }}>
            Điều khoản sử dụng
          </Typography>{" "}
          và{" "}
          <Typography component="span" sx={{ color: "#1976d2", cursor: "pointer" }}>
            Chính sách bảo mật
          </Typography>{" "}
          của Agoda.
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
