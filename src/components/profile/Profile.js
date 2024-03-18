import { Card, CardHeader, CardContent, Stack, Box, Typography, Avatar } from "@mui/material";
import './Profile.css'

const numberMaps = ['一','二','三','四','五','六','七','八','九'];
const monthMaps = ['正月','二月','三月','四月','五月','六月','七月','八月','九月','十月','冬月','腊月'];
const hourMaps = ['子时','丑时','寅时','卯时','辰时','巳时','午时','未时','申时','酉时','戌时','亥时'];

function ageConvertor(age) {
    const quotient = Math.round(age/10);
    const remainder = Math.round(age%10);

    return `${quotient > 1 ? numberMaps[quotient-1]+'十' : quotient === 1 ? '十' : ''}${numberMaps[remainder-1]}`
}

function dateConvertor(date) {
    const [month, day] = date;
    
    return `${monthMaps[month-1]}${ageConvertor(day)}`;
}

function timeConvertor(time) {
    const [hour,quantor] = time;
    const idx = Math.floor((hour + 1) / 2);

    return `${idx >= 12 ? hourMaps[0] : hourMaps[idx]}`;
}

export default function Profile({user}) {
    // user = {
    //     era: "万吉",
    //     name: "风吉"
    // }

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    }
      
    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split('')[0]}`,
        };
    }

    function titleConcat({name,age,date,time}) {
        return `${name}${ageConvertor(age)}年 ${dateConvertor(date)} ${timeConvertor(time)}`;
    }

    function nameConcat(family,name) {
        return `${family} ${name}`;
    }

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar {...stringAvatar(user.country)}></Avatar>
                }
                title={nameConcat(user.family, user.name)}
                subheader={titleConcat(user.era)}
                sx={{ backgroundColor: 'aliceblue', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            />
            <CardContent>
                
                <Typography variant="body2" component="div">
                    体力: {user.power}</Typography>
                <Typography variant="body2" component="div">
                    魅力: {user.power}</Typography>
                <Typography variant="body2" component="div">
                    智力: {user.power}</Typography>
                    
            </CardContent>
            <CardContent>
                <Stack direction="row" sx={{ display: "flex", justifyContent: "", flexDirection: "column", flexWrap: "wrap" }}>
                    <Typography variant="body2">
                        木材: 4522234</Typography>
                    <Typography variant="body2">
                        石料: 30432</Typography>
                    <Typography variant="body2">
                        黄金: 4522234</Typography>
                    <Typography variant="body2">
                        白银: 30432</Typography>
                    <Typography variant="body2">
                        铁: 4522234</Typography>
                </Stack>
                
            </CardContent>
        </Card>
    )
}