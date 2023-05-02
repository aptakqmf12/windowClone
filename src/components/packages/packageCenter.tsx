import { Box, Grid, Typography } from "@mui/material";
import { Apps } from "@mui/icons-material";
import React from "react";

export default function PackageCenter() {
  return (
    <Grid container>
      <Grid
        item
        md={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Apps color="info" sx={{ width: 66, height: 66 }} />
      </Grid>

      <Grid
        item
        md={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography fontWeight={600}>패키지 센터</Typography>
      </Grid>

      <Grid>
        <Box>나의 패키지</Box>
      </Grid>

      <div></div>
    </Grid>
  );
}
