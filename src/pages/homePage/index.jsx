import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import service from "../../services/getContent"
import service2 from "../../services/navbarTags"
import { Grid, Box, Toolbar, Tabs } from '@mui/material';


export default () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        service.getContent().then((resp) => {
            setData(resp)
            console.log("data=>", resp)
        })
        service2.getNavbarTag().then((resp) => {
            setData2(resp);
            console.log("data=>", resp);
        });
    }, [])
    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "1%", margin: "1%" }}>
            <Toolbar sx={{ borderBottom: "1px solid #373737", margin: "1%" }}>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Tabs
                        >
                            {data2.map((val, index) => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }} key={index} >
                                    <Box sx={{ padding: "2px 14px", borderRadius: "17px", border: "1px solid #4B4B4B", backgroundColor: "#373737", color: "#FFFFFF", margin: "5px", fontWeight: 500, ":hover": { cursor: "pointer" } }}>{val.tag}</Box>
                                </Box>
                            ))}
                        </Tabs>
                    </Box>
                </Box>
            </Toolbar>
            <Grid container spacing={0} >
                {data.map((val, index) => (
                    <Grid item xs={12} md={4} sm={6} lg={3} key={index} padding="1%" zInex="888">
                        <Box sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)", backgroundColor: "#181818" }, transitionDuration:" 1s",transitionTimingFunction: "linear",transitionDelay: "1s" }}>
                        <Box sx={{ width: "100%" }}>
                            <img src={val.img} alt="" style={{ width: "100%", height: "20%", }} />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <img src={val.logo} alt="bu yerda rasm bor" style={{ borderRadius: "50%", width: "12%", height: "12%" }} />
                            <Container>
                                <Typography sx={{ width: "100%", fontFamily: "sans-serif", color: "white", fontWeight: "700", fontSize: "14px" }}>
                                    {val.title}
                                </Typography>
                                <Typography sx={{ width: "100%", fontFamily: "sans-serif", color: "#A1A1A1", fontWeight: "540", paddingTop: "2%", fontSize: "13px" }}>
                                    {val.name}
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ width: "100%", fontFamily: "sans-serif", color: "#A1A1A1", fontWeight: "540", paddingTop: "0%", fontSize: "12px" }}>
                                        {val.eye} views • {val.time}
                                    </Typography>
                                </Box>
                            </Container>
                        </Box>
                    </Box>

                    </Grid>
                ))}
        </Grid>
        </div >
    )
}
