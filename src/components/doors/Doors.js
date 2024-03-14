import { useState } from 'react';
import { Box, Tabs, Tab } from "@mui/material";
import ChaoTang from "../chaoTang/ChaoTang";
import './Doors.css';

const insides = ['朝堂','西殿','东殿','禁苑']

export default function Doors() {
    const [door, setDoor] = useState('朝堂')

    function handleChange(event, value) {
        setDoor(value);
    }

    return <>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={door}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary">
                {insides.map(p => (<Tab value={p} label={p} key={p} />))}
            </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
            {door === '朝堂' && <ChaoTang></ChaoTang>}
            {door === '西殿' && <></>}
        </Box>
    </>
}