// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © 2023 My Application. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
