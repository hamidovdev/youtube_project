import React from 'react'
import { Container, Box, Grid, Typography } from "@mui/material"
import { dataPage } from "../../components/Saidbar/data/data"
export default () => {
    return (
        <div style={{ width: "100%", height: "100%", paddingTop: "2%" }}>
            <Container maxWidth="lg">
                <Box sx={{ width: "100%" }}>
                    <Grid container spacing="1">
                        {dataPage.map((val, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2.4} sx={{ display: "flex", flexDirection: "column", }}>

                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{margin:"1%"}}>
                                    <Box sx={{ width: "100%", borderRadius: "10px", backgroundColor: "#181818", padding: "15%",":hover":{cursor:"pointer",backgroundColor:"#383838"} }}>
                                        <Typography sx={{ fontSize: "35px", color: val.color }}>
                                            {val.icon}
                                        </Typography>
                                        <Typography sx={{ color: "white", fontWeight: "600", fontFamily: "sans-serif", fontSize: "16px", letterSpacing: "1px",width:"100%" }}>
                                            {val.text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}
