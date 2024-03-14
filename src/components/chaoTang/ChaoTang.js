import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Button, List, ListItemButton, ListItemText } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

export default function ChaoTang() {
    const departments = ['户部','工部','兵部'];

    const [selected, setSelected] = useState('户部');

    function handleLiuBu(event, value) {
        setSelected(value);
    }

    function handleListItemClick(event, value) {
        setSelected(value);
    }

    return <>
        <Box sx={{ width: '20%', textAlign: 'center' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {departments.map(d => (
                    <ListItemButton selected={selected === d} 
                        onClick={(event) => handleListItemClick(event,{d})}>
                        <ListItemText primary={d} sx={{ textAlign: 'center' }}/>
                    </ListItemButton>))}
            </List>
        </Box>
    </>
}