import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        h1: {
            color: '#fff',
            fontSize: '48px',
            fontWeight: '500',
            textAlign: 'center',
        },
        h2: {
            color: '#212932',
            fontSize: '22px',
            fontWeight: '500',
        },
        h3: {
            color: 'rgba(33, 41, 50, 1)',
            fontSize: '16px',
            fontWeight: '700',
        },
        h4: {
            color: 'rgba(33, 41, 50, 1)',
            fontSize: '16px',
            fontWeight: '500',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        },
        h5: {
            color: 'rgba(33, 41, 50, 1)',
            fontSize: '16px',
            fontWeight: '500',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textDecoration: 'transparent',
            cursor: 'pointer',
            ":hover": {
                textDecoration: 'underline',
                textDecorationColor: '#212932'
            }
        },
        h6: {
            color: 'rgba(78, 84, 96, 1)',
            fontWeight: '500',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
        },
        subtitle1: {
            color: 'rgba(33, 41, 50, 1)',
            fontSize: '16px',
            fontWeight: '500',
        },
        subtitle2: {
            color: 'rgba(33, 41, 50, 0.54)',
            fontSize: '16px',
            fontWeight: '600',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    marginTop: '20px',
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '15px',
                    lineHeight: 'unset',
                    borderRight: '1px solid rgb(236, 240, 246)',
                    ":nth-last-of-type": {
                        borderRight: 'none',
                    }
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                }
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#1a232e',
                }
            }
        },
    }
})