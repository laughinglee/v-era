import { useState } from "react";
import { Container } from "@mui/material";
import HeaderBar from "./HeaderBar";
import Era from "./Era";
import NewEra from "./NewEra";
import './default.css';

const user = {
    era: {
        name: '念君',
        age: 13,
        date: [8,21],
        time: [14,3]
    },
    power: 100,
    golden: 5000
}

const menuFunc = ['New','MyEra'];

export default function Home() {
    const [func, setFunc] = useState('New');

    function handleFunc(e, v) {
        setFunc(v); console.log(v)
    }

    return <>
        <HeaderBar menus={menuFunc} onChangeMenu={handleFunc}></HeaderBar>
        <Container className="container">
            {func === 'New' && <NewEra></NewEra>}
            {func === 'MyEra' && <Era user={user}></Era>}
        </Container>
    </>
}