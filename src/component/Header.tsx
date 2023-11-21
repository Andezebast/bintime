import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

const Header: FC = () => {
    return (
        <Box sx={header}>
            <Typography variant='h1'>Formula</Typography>
        </Box>
    );
};

export default Header;

const header = {
    backgroundColor: '#1a232e',
    padding: '10px 0',
}