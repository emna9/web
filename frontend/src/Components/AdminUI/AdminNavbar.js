import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminNavbar = () => (
  <Box sx={{ display: "flex", gap: 2, padding: 2, background: "#f5f5f5" }}>
    <Button
      component={Link}
      to="/products"
      sx={{
        backgroundColor: "#f8f7f1",
        "&:hover": {
          backgroundColor: "#e0e0e0", // Optional: Change hover color
        },
        color: "#000", // Ensures the text is readable (optional)
      }}
    >
      Products
    </Button>
    <Button
      component={Link}
      to="/orders"
      sx={{
        backgroundColor: "#f8f7f1",
        "&:hover": {
          backgroundColor: "#e0e0e0", // Optional: Change hover color
        },
        color: "#000", // Ensures the text is readable (optional)
      }}
    >
      Orders
    </Button>
    <Button
      component={Link}
      to="/admin"
      sx={{
        backgroundColor: "#f8f7f1",
        "&:hover": {
          backgroundColor: "#e0e0e0", // Optional: Change hover color
        },
        color: "#000", // Ensures the text is readable (optional)
      }}
    >
      Admin
    </Button>
  </Box>
);

export default AdminNavbar;
