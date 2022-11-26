import {createTheme} from "@mui/material/styles";
import {lighten} from "@mui/material";
import {createBreakpoints} from "@mui/system";


const breakpoints = createBreakpoints({});


const primary = "#139587";
const secondary = "#986D42";


const theme = createTheme({
    spacing: 10,
    palette: {
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        },
        common: {
            brandGreen: primary,
            brandBrown: secondary
        },
        text: {
            primary: "#222222"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {}

            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    height: "auto",
                    minHeight: 32,
                    paddingTop: 5,
                    paddingBottom: 5,
                    whiteSpace: "break-spaces",
                    [breakpoints.down("md")]: {
                        whiteSpace: "break-spaces"
                    }
                },
                label: {
                    whiteSpace: "break-spaces",
                    [breakpoints.down("md")]: {
                        whiteSpace: "break-spaces"
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline"
                    }
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline"
                    }
                },
                code: {
                    background: lighten(primary, 0.9),
                    paddingLeft: 5,
                    paddingRight: 5,
                    
                    display: "inline-block",
                    borderRadius: 5
                }
            }
        }
    },
    typography: {
        allVariants: {},
        h1: {
            fontFamily: "'Teko', sans-serif",
            letterSpacing: "unset"
        },
        h2: {
            fontFamily: "'Teko', sans-serif",
            letterSpacing: "unset"
        },
        h3: {
            fontFamily: "'Teko', sans-serif",
            letterSpacing: "unset"
        }
    }
});


export {theme};