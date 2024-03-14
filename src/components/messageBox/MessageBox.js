import { Card, CardContent, Typography } from "@mui/material";

export default function MessageBox() {
    return <Card sx={{ width: '100%' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }}>消息盒子</Typography>
            <Typography sx={{ fontSize: 12 }} component="li">
                招募到贤臣: 宇文拓
            </Typography>
        </CardContent>
    </Card>
}