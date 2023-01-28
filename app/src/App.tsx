import React from 'react'
import './App.css'
import { Container, Box, Grid } from '@mui/material'
import DatePickers from './components/DatePicker'
import RichTextEditor from './components/RichTextEditor'

function App() {
    return (
        <Container maxWidth='lg'>
            <Box sx={{ height: '100vh' }}>
                <Grid container>
                    <Grid item xs>
                        <DatePickers />
                    </Grid>
                    <Grid item xs>
                        <RichTextEditor />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default App
