import { useState } from "react";
import { Grid, Typography, TextField, Stack, Chip } from "@mui/material";
import UsreCharactors from "../components/user-charactors/UserCharactors";

export default function NewEra() {
    const [sexy, setSexy] = useState('emperor');
    

    

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField required fullWidth
                    id="era-name"
                    label="Era Name"
                    defaultValue="My Era"
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField required fullWidth
                    id="era-name"
                    label="Era Name"
                    defaultValue="My Era"
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <Typography gutterBottom variant="body2">
                    Select type
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label="Emperor" size="small"
                        color={sexy === 'emperor' ? "primary" : "default"} 
                        onClick={e => setSexy('emperor')}
                        ></Chip>
                    <Chip label="Queen" size="small"
                        color={sexy === 'queen' ? "primary" : "default"} 
                        onClick={e => setSexy('queen')}
                        ></Chip>
                </Stack>
            </Grid>
            <Grid item xs={11}>
                <Typography gutterBottom variant="body2">
                    性格
                </Typography>
                <UsreCharactors></UsreCharactors>
            </Grid>
        </Grid>
    )
}