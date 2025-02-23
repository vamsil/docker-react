// src/components/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Info, ContactMail } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { ListItemProps } from '@mui/material/ListItem';
import SpaceManager from './SpaceManager';

// Custom Link component to handle ListItem and Link compatibility
interface ListItemLinkProps extends ListItemProps {
    to: string;
    icon?: React.ReactNode;
    primary: string;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, primary, ...props }) => {
    return (
        <ListItem button component={RouterLink} to={to} {...props}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
        </ListItem>
    );
};

const Sidebar: React.FC = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            }}
        >
            <List>
                <ListItemLink to="/" primary="Home" icon={<Home />} />
                <ListItemLink to="/about" primary="About" icon={< SpaceManager/>} />
                <ListItemLink to="/contact" primary="Contact" icon={<ContactMail />} />
            </List>
        </Drawer>
    );
};

export default Sidebar;
