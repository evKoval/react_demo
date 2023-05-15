import {JSX, useEffect, useState} from "react";
import {Dot, generateData, generateDataInPosition} from "./chartData";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export const Chart = (): JSX.Element => {
    const [data, setData] = useState<Dot[]>(generateData())

    useEffect(() => {
        const timeout = setTimeout(() => setData((prev) => [...prev, generateDataInPosition(prev.length)]), 2000)
        return () => clearTimeout(timeout);
    }, [data.length])
    return (
        <>
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{top: 5, right: 20, left: 10, bottom: 5}}
                throttleDelay={10}
            >
                <YAxis/>
                <XAxis/>
                <Tooltip/>
                <CartesianGrid stroke="#777" strokeDasharray="5 5"/>
                <Line
                    // type="monotone"
                    type="basis"
                    dataKey="yValue"
                    stroke="#02A1AFFF"
                    // dot={{r: 2, stroke: "#02A1AFFF", strokeWidth: 2}}
                    dot={false}
                    // animationDuration={100}
                    // isAnimationActive={false}
                />
            </LineChart>
    </>
    )
}