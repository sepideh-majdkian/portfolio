import {createTheme} from '@mui/material/styles'
import {blue , red} from '@mui/material/colors'

export const lightTheme = createTheme ({
    palette: {
        mode : "light",
        primary: {
            main: "#673ab7",
        },
        secondary:{
            main:"#e040fb",
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'dashed'},
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${blue[500]}`,
                    },
                },
                {
                    props: {variant: 'dashed', color: 'secondary'},
                    style: {
                        border: `4px dashed ${red[500]}`,
                    },
                },
            ],
        },
    },
});

export const darkTheme = createTheme ({
    palette: {
        mode : "dark",
        primary: {
            main: "#673ab7",
        },
        secondary:{
            main:"#e040fb",
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'dashed'},
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${blue[500]}`,
                    },
                },
                {
                    props: {variant: 'dashed', color: 'secondary'},
                    style: {
                        border: `4px dashed ${red[500]}`,
                    },
                },
            ],
        },
    },
});