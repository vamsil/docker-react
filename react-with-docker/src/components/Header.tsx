// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const Header: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    My Application
                </Typography>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search />
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ ml: 1, color: 'inherit' }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
