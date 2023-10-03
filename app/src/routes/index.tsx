import { Container, Box, Grid } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <Grid container>
          <Grid item xs>
            <h1>Welcome to My Component Showcase</h1>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
