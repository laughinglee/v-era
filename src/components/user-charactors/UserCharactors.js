import { useState } from "react";
import { Stack, Chip, Grid, Typography } from "@mui/material";

const characters = [
    '薄情寡义','不谙世事','秉节持重','傲骨嶙峋','爱恨分明','长袖善舞','气逾霄汉'
    ,'城府颇深','持才傲物','从善如流','斗筲之人','洞幽烛微','跌宕放言','生性多疑'
    ,'佛口蛇心','放浪形骸','风趣幽默','孤云野鹤','刚柔并济','惯于风月','见微知著'
    ,'谨小慎微','克己慎独','敏而好学','轻供风流','铁面无私','玩世不恭','孔武有力'
];

const propertyies = [
    '智慧','体力','魅力','缘分'
]

const bindings = characters.map(ch => ({ name: ch, flag: false, color: 'default' }));

export default function UsreCharactors() {
    const [status, setStatus] = useState(bindings);
    const [count, setCount] = useState(0);

    function handleCharactors(v) {
        const temp = status.map(s => {
            if (s.name === v.name) {
                return {
                    ...v,
                    flag: !v.flag, 
                    color: !v.flag ? 'primary': 'default'
                }
            }
            else {
                return s;
            }
        })

        setStatus(temp);
        setCount(temp.filter(e => e.flag).length);
    }

    return (
        <Grid container>
            <Grid item xs={9}>
                <Stack direction="row" sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {status.map(s => (
                        <Chip 
                            color={s.color}
                            disabled={count === 6 && !s.flag}
                            label={s.name} 
                            key={s.name} 
                            size="small" 
                            sx={{ margin: '2px' }}
                            onClick={() => handleCharactors(s)}
                            ></Chip>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack direction="column">
                        {propertyies.map(p => (
                            <Typography sx={{ margin: '5px'}}>{p}</Typography>
                        ))}
                </Stack>
            </Grid>
        </Grid>
        
    )
}