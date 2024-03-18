import { useState } from "react";
import { Grid, Typography, Stack, Chip, FormControl, InputLabel, InputAdornment, IconButton, Input, Button } from "@mui/material";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDice5 } from "@mdi/js";
import UsreCharactors from "../components/user-charactors/UserCharactors";

export default function NewEra() {
    const [sexy, setSexy] = useState('emperor');
    const [isCreate, setCreate] = useState(false);

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="country">国号</InputLabel>
                    <Input id="country"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="random-country">
                                    <Icon path={mdiDice5} size={1} color="lightgray"></Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                        ></Input>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="family">家族</InputLabel>
                    <Input id="family"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="random-faimly">
                                    <Icon path={mdiDice5} size={1} color="lightgray"></Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                        ></Input>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="name">名称</InputLabel>
                    <Input id="name"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="random-name">
                                    <Icon path={mdiDice5} size={1} color="lightgray"></Icon>
                                </IconButton>
                            </InputAdornment>
                        }
                        ></Input>
                </FormControl>
            </Grid>
            
            <Grid item xs={4}>
                <Typography variant="body2">角色</Typography>
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
            <Grid item xs={12}>
                <Typography gutterBottom variant="body2">
                    性格
                </Typography>
                <UsreCharactors></UsreCharactors>
            </Grid>
            <Grid item xs={11}>
                <Typography gutterBottom variant="body2">
                    才能
                </Typography>
            </Grid>
            <Grid item xs={12} alignContent="center" textAlign="center">
                <Button variant="contained" onClick={() => setCreate(true)}>创建</Button>
                <Button variant="text">重置</Button>
                <CreateEra isOpen={isCreate} closeEvent={() => setCreate(false)}></CreateEra>
            </Grid>
        </Grid>
    )
}

function CreateEra({ isOpen, closeEvent }) {
    return (
        <Dialog open={isOpen}>
            <DialogContent>
                ready to create era!
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeEvent}>关闭</Button>
            </DialogActions>
        </Dialog>
    )
}