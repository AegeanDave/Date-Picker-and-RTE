import React from "react";
import { Container, Box, Grid } from "@mui/material";
import { RichTextEditor } from "../../components";

export default function RichTextEditorPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <Grid container>
          <Grid item xs>
            <RichTextEditor />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
