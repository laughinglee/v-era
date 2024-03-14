import { Card, Typography } from "@mui/material";

import './StatusBar.css'

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

export default function StatusBar({ name, age, date, time }) {
    return <Card className="status-bar" variant="outlined">
        <Typography sx={{ fontSize: 14, textAlign: "right" }}>{name}{ageConvertor(age)}年 {dateConvertor(date)} {timeConvertor(time)}</Typography>
    </Card>
}