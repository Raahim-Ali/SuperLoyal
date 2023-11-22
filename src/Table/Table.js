import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./Table.css";
import profile from "../Assets/profile.svg";
import Divider from "@mui/material/Divider";
import email from "../Assets/email.svg";
import location from "../Assets/location.svg";
import { handleSearchChange } from "../Dashboard/Dashboard";

function createData(name, email, location, points, loyalty) {
  return { name, email, location, points, loyalty };
}

const loyaltyColor = (loyaltyLevel) => {
  let color;
  if (loyaltyLevel === "Gold") {
    color = "#FFD700";
  } else if (loyaltyLevel === "Silver") {
    color = "#C0C0C0";
  } else if (loyaltyLevel === "Bronze") {
    color = "#CD7F32";
  }
  return { color };
};

const rows = [
  createData(
    "William Cork",
    "william.cork@gmail.com",
    "London, England",
    "851 points",
    "Bronze"
  ),
  createData(
    "Alice de Luca",
    "alicedeluca@gmail.com",
    "New York, USA",
    "4,510 points",
    "Bronze"
  ),
  createData(
    "Jasyn Cook",
    "jason@gmail.com",
    "Dubai, UAE",
    "11,100 points",
    "Bronze"
  ),
  createData(
    "Angela Park",
    "angela@gmail.com",
    "Paris, France",
    "18,241 points",
    "Gold"
  ),
  createData(
    "Mark Donaghy",
    "mark@gmail.com",
    "Goa, India",
    "1,491 points",
    "Bronze"
  ),
  createData(
    "Johanna Avery",
    "johanna@gmail.com",
    "Marrakesh, Morocco",
    "35,891 points",
    "Silver"
  ),
  createData(
    "Peter Lewis",
    "peter@gmail.com",
    "Stockholm, Sweden",
    "1,195 points",
    "Bronze"
  ),
  createData(
    "Mariana Mazzucato",
    "mariana@gmail.com",
    "Lisbon, Portugal",
    "3,895 points",
    "Bronze"
  ),
];

export default function BasicCard() {
  const [selectedUser, setSelectedUser] = useState({
    name: "William Cork",
    loyalty: "Bronze",
    email: "william.cork@gmail.com",
    location: "London, England",
    points: "851",
  });
  const [Uname, setName] = useState("");
  const filteredRows = rows.filter((row) => {
    return row.name.toLowerCase().includes(Uname.toLowerCase());
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            width: "65%",
            height: "1264px",
            bottom: "110px",
            left: "36px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Typography variant="h5">User list</Typography>
              <div>
                <TextField
                  variant="outlined"
                  placeholder="Search users"
                  size="small"
                  onChange={(event) => handleSearchChange(event, setName)}
                  value={Uname}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon
                        sx={{ marginRight: "5px", color: "#64748B" }}
                      />
                    ),
                    sx: {
                      background: "#EFF6FF",
                      borderRadius: "20px",
                      width: "300px",
                    },
                  }}
                />
              </div>
            </Box>
            <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#EFF6FF" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#64748B" }}>Name</TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#64748B", textAlign: "left" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#64748B", textAlign: "left" }}
                    >
                      Location
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#64748B", textAlign: "left" }}
                    >
                      Total points
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#64748B", textAlign: "left" }}
                    >
                      Loyalty level
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row) => (
                    <TableRow
                      className="table-row"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={() =>
                        setSelectedUser({
                          name: row.name,
                          loyalty: row.loyalty,
                          email: row.email,
                          location: row.location,
                          points: row.points,
                        })
                      }
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="left">
                        {row.email}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="left">
                        {row.location}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="left">
                        {row.points}
                      </TableCell>
                      <TableCell align="left" sx={loyaltyColor(row.loyalty)}>
                        {row.loyalty}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "25%",
            height: "1264px",
            bottom: "110px",
            left: "36px",
            marginLeft: "50px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Typography sx={{ textAlign: "center" }}>
              <img
                src={profile}
                alt="/"
                style={{ width: "150px", height: "150px" }}
              />
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "15px",
                fontWeight: "Bold",
              }}
              variant="h5"
              component="div"
            >
              {selectedUser.name}
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                textAlign: "center",
                color: loyaltyColor(selectedUser.loyalty),
              }}
              color="text.secondary"
            >
              {selectedUser.loyalty}
            </Typography>
            <Divider
              sx={{
                backgroundColor: "#grey",
                width: "400px",
                margin: "0 auto",
                marginTop: "20px",
              }}
            />
            <Typography sx={{ marginTop: "25px" }} variant="h5" component="h4">
              Contact Info
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  sx={{ marginRight: "10px", marginBottom: "4px" }}
                  src={email}
                  alt="/"
                />
                <Typography sx={{ marginLeft: "20px", color: "#64748B" }}>
                  {selectedUser.email}
                </Typography>
              </div>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  sx={{ marginRight: "10px", marginBottom: "4px" }}
                  src={location}
                  alt="/"
                />
                <Typography sx={{ marginLeft: "20px", color: "#64748B" }}>
                  {selectedUser.location}
                </Typography>
              </div>
            </Box>
            <Divider
              sx={{
                backgroundColor: "#grey",
                width: "400px",
                margin: "0 auto",
                marginTop: "20px",
              }}
            />
            <Typography
              sx={{ marginTop: "25px", marginBottom: "30px" }}
              variant="h5"
              component="h4"
            >
              Insights
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ color: "#64748B" }}>Total Points</Typography>
                <Typography sx={{ color: "#64748B" }}>
                  {selectedUser.points}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ color: "#64748B" }}>
                  Rewards Redeemed
                </Typography>
                <Typography sx={{ color: "#64748B" }}>5</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ color: "#64748B" }}>Total Orders</Typography>
                <Typography sx={{ color: "#64748B" }}>8</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ color: "#64748B" }}>
                  Number of invited users
                </Typography>
                <Typography sx={{ color: "#64748B" }}>32</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ color: "#64748B" }}>
                  Number of referred brands
                </Typography>
                <Typography sx={{ color: "#64748B" }}>32</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
