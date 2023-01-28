import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Box, TextField, styled, Stack, Button } from '@mui/material'
import { subMonths, subWeeks, subYears } from 'date-fns'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'

const CustomButton = styled(Button)(() => ({
    padding: '4px 8px',
    textTransform: 'none',
    color: '#4286f4',
    borderRadius: '10px',
}))

const CustomInput = styled(TextField)(() => ({
    '&:hover': {
        '& .MuiInputLabel-root': {
            color: '#4286f4',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#556270',
        fontWeight: 400,
        '&.Mui-focused': {
            color: '#4286f4',
        },
    },
    '& .MuiOutlinedInput-root': {
        '& input': { fontWeight: 500, color: '#373B44' },
        '&.Mui-focused fieldset': {
            borderWidth: '2px',
            borderColor: '#4286f4',
        },
        '&:hover fieldset': { borderColor: '#4286f4' },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px',
        borderWidth: '2px',
    },
}))
export default function DatePickers() {
    const [value, setValue] = React.useState<Date | null>(null)
    const handleChange = (newValue: Date | null) => {
        setValue(newValue)
    }
    const CustomToolBar = () => {
        return (
            <Stack direction='row' spacing={3} p='0 24px 16px'>
                <CustomButton
                    size='small'
                    onClick={() => {
                        const value = subWeeks(new Date(), 1)
                        setValue(value)
                    }}
                >
                    Past Week
                </CustomButton>
                <CustomButton
                    size='small'
                    onClick={() => {
                        const value = subMonths(new Date(), 1)
                        setValue(value)
                    }}
                >
                    Past Month
                </CustomButton>
                <CustomButton
                    size='small'
                    onClick={() => {
                        const value = subYears(new Date(), 1)
                        setValue(value)
                    }}
                >
                    Past Year
                </CustomButton>
            </Stack>
        )
    }
    return (
        <Box bgcolor='#fff' minHeight='100vh' p={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={4} direction='row'>
                    <DesktopDatePicker
                        label='Date desktop'
                        inputFormat='MM/dd/yyyy'
                        value={value}
                        mask='__/__/____'
                        PopperProps={{
                            placement: 'bottom-start',
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, 8],
                                    },
                                },
                            ],
                        }}
                        PaperProps={{
                            sx: {
                                borderRadius: '8px',
                                borderTop: '8px solid #4286f4',
                                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.15)',
                                '& .MuiPickersDay-root': {
                                    '&.MuiPickersDay-today': {
                                        border: 'none',
                                        color: '#4286f4',
                                        fontWeight: 700,
                                    },
                                    '&.Mui-selected': {
                                        bgcolor: '#4286f4',
                                    },
                                },
                                '& .MuiYearPicker-root': {
                                    '& button': {
                                        borderRadius: '10px',
                                        padding: '0 4px',
                                        height: 'auto',
                                        '&.Mui-selected': {
                                            bgcolor: '#4286f4',
                                            borderRadius: '10px',
                                        },
                                    },
                                },
                            },
                        }}
                        components={{
                            OpenPickerIcon: CalendarMonthOutlinedIcon,
                            RightArrowIcon: ChevronRightRoundedIcon,
                            LeftArrowIcon: ChevronLeftRoundedIcon,
                            ActionBar: CustomToolBar,
                        }}
                        onChange={handleChange}
                        renderInput={(params) => <CustomInput {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </Box>
    )
}
