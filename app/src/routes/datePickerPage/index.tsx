import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { DatePickers } from "../../components";

export default function DatePickerPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <Grid container>
          <Grid item xs>
            <DatePickers />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
