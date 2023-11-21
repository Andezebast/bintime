import React, {FC} from 'react';
import {Box, Container, Typography} from "@mui/material";
import Mail from "../svg/Mail";
const Footer: FC = () => {
    return (
        <Box sx={footer}>
            <Container maxWidth='xl'>
                <Typography variant='h2' sx={footerTitle}>Formula</Typography>
                <Box sx={footerContent}>
                    <Typography variant='h6'>©Formula 2023. All Rights Reserved</Typography>
                    <Typography variant='h6'><Mail /><span style={footerSpan}>info@formula.com</span></Typography>
                </Box>
            </Container>
        </Box>
    );
};
const footer = {
    padding: '10px 0',
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
}
const footerTitle ={
    paddingBottom: '10px',
}
const footerContent = {
    display: 'flex',
    justifyContent: 'space-between',
}
const footerSpan = {
    paddingLeft: '5px',
}
export default Footer;