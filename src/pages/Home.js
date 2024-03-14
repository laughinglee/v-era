import { Container, Grid } from "@mui/material";
import { Profile } from "../components/index";
import Header from "./Header";
import Biz from "./Biz";
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

export default function Home() {
    return <>
        <Header></Header>
        <Container className="container">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Profile></Profile>
                </Grid>
                <Grid item xs={9}>
                    <Biz era={user.era}></Biz>
                </Grid>
            </Grid>
        </Container>
    </>
}