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

    const [liuBu, setLiuBu] = useState('户部');

    function handleLiuBu(event, value) {
      setLiuBu(value);
    }

    return <>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Box sx={{ width: '20%', textAlign: 'center' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {departments.map(d => (
                    <ListItemButton selected={liuBu === d} key={d} onClick={e => handleLiuBu(e, d)}>
                        <ListItemText primary={d} sx={{ textAlign: 'center' }}/>
                    </ListItemButton>))}
            </List>
        </Box>
        <Box sx={{ width: '100%', padding: '8px' }}>
          <Typography component='span'>this is a {liuBu}</Typography>
        </Box>
      </div>
        
    </>
}