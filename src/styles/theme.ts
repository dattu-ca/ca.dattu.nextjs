import {createTheme} from '@mui/material/styles';



const primary = '#139587';
const secondary = '#986D42'


const theme = createTheme({
    spacing: 10,
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        common:{
            brandGreen: primary,
            brandBrown: secondary,
        }
    }
});

export {theme};