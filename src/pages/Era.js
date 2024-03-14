import { Grid } from "@mui/material";
import { Profile } from "../components/index";
import Biz from "./Biz";

export default function Era({ user }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Profile></Profile>
            </Grid>
            <Grid item xs={9}>
                <Biz era={user.era}></Biz>
            </Grid>
        </Grid>
    )
}