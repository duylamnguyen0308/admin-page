import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart1 = ({ aspect }) => {

    const data = [
        {
            name: '12:00',
            pv: 57,
            amt: 60,
        },
        {
            name: '1:00',
            pv: 40,
            amt: 50,
        },
        {
            name: '2:00',
            pv: 69,
            amt: 70,
        },
        {
            name: '3:00',
            pv: 3,
            amt: 0,
        },
        {
            name: '4:00',
            pv: 67,
            amt: 0,
        },
        {
            name: '5:00',
            pv: 50,
            amt: 0,
        },
        {
            name: '6:00',
            pv: 85,
            amt: 0,
        },
        {
            name: '7:00',
            pv: 50,
            amt: 0,
        },
        {
            name: '8:00',
            pv: 30,
            amt: 0,
        },
        {
            name: '9:00',
            pv: 65,
            amt: 0,
        },
        {
            name: '10:00',
            pv: 39,
            amt: 0,
        },
        {
            name: '11:00',
            pv: 47,
            amt: 0,
        },
    ];
    return (

        <ResponsiveContainer width="70%" height="25%"   aspect={2 / 0.5} >
            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#9747FF  " activeDot={{ r: 8 }} />

            </LineChart>
        </ResponsiveContainer>
    )
}
