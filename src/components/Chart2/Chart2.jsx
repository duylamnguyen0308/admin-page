import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



export const Chart2 = (aspect) => {


    const data2 = [
        {
            name: 'Bank',
            uv: 60,
            pv: 2400,
            fill: '#F3BA2F',
        },
        {
            name: 'Token',
            uv:60,
            pv: 4567,
            fill: '#54C2C1',
        },
        {
            name: 'Cash',
            uv: 70,
            pv: 1398,
            fill: '#0F0F3F',
        },
        {
            name: 'Stock',
            uv: 90,
            pv: 9800,
            fill: '#9020E9',
        },


    ];
    const style = {
        bottom: '-50%',
        transform: 'translate(0, -50%)',
        lineHeight: '100px',
    };

    return (
        <div>
            <h1>Money Allocation</h1>
            <ResponsiveContainer width="50%" aspect={2 / 1}>
            
            <RadialBarChart cx='50%'
                cy='50%'
                innerRadius='10%'
                outerRadius='80%'
                barSize={12}
                startAngle={90}
                endAngle={-270}
                data={data2}
                >
                    
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend iconSize={30} layout='horizontal' verticalAlign='middle' wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>
        </div>
        



    );

}
