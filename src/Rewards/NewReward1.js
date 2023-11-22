import React, { useRef, useState } from "react";
import Navbar from "../AppBar/Navbar";
import TopBg from "../TopBg/TopBg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NewReward1() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const currencies = [
    {
      value: "Default Value",
      label: "Select Status",
    },
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    },
  ];

  return (
    <div>
      <Navbar />
      <TopBg />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "80%",
            height: "680px",
            bottom: "110px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Reward Details
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px", display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "628px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "30px" }}
                    id="standard-multiline-static"
                    label="Reward Name"
                    multiline
                    rows={1}
                    defaultValue="Write name of reward here"
                    variant="outlined"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "628px" },
                    marginTop: "20px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "30px" }}
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    rows={13}
                    defaultValue="Write description of reward here"
                    variant="outlined"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "628px" },
                    marginTop: "20px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    sx={{ width: "30px" }}
                    id="standard-multiline-static"
                    label="Redemption Details"
                    multiline
                    rows={1}
                    defaultValue="Write description of reward here"
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "200px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Status"
                    defaultValue="Default Value"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <div
                  style={{
                    width: 600,
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                    ref={fileInputRef}
                  />

                  <Box
                    mt={2}
                    border="1px dashed #ccc"
                    width="100%"
                    height="288px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="30px"
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    ) : (
                      "No image selected"
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "rgba(191, 219, 254, 1)",
                        color: "black",
                        textTransform: "none",
                      }}
                      variant="contained"
                      onClick={handleButtonClick}
                    >
                      Upload Image
                    </Button>
                  </Box>
                </div>
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="form"
                    width={200}
                    sx={{
                      m: 1,
                      marginTop: "20px",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-multiline-static"
                      label="Cost of Reward"
                      multiline
                      rows={1}
                      defaultValue="0"
                      variant="outlined"
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Points</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box>
                <Link to="/rewards" className="nav-item">
                  <Button
                    sx={{
                      backgroundColor: "rgba(191, 219, 254, 1)",
                      color: "black",
                      borderRadius: "30px",
                      textTransform: "none",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Cancel
                  </Button>
                </Link>
              </Box>
              <Box sx={{ marginLeft: "20px" }}>
                <Link to="/rewards" className="nav-item">
                  <Button
                    sx={{ borderRadius: "30px", textTransform: "none" }}
                    variant="contained"
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default NewReward1;
