import { Gauge, PieChart, SparkLineChart } from "@mui/x-charts";
import Layout from "../../components/template/Layout";
import { BarChart } from '@mui/x-charts/BarChart';
import { gaugeClasses } from '@mui/x-charts/Gauge';
import { Box } from "@mui/material";


export default function Dashboard () {

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-5 mb-40 ">
                <div className="">
                    <BarChart
                        series={[
                            { data: [35, 44, 24, 34] },
                            { data: [51, 6, 49, 30] },
                            { data: [15, 25, 30, 50] },
                            { data: [60, 50, 15, 25] },
                        ]}
                        height={290}
                        xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
                <div className="h-60">
                    <Gauge
                        value={75}
                        startAngle={-110}
                        endAngle={110}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 40,
                            transform: 'translate(0px, 0px)',
                            },
                        }}
                        text={
                            ({ value, valueMax }) => `${value} / ${valueMax}`
                        }
                    />
                </div>
                <div className="">
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart
                        plotType="bar"
                        data={[1, 4, 2, 5, 7, 2, 4, 6]}
                        height={100}
                    />
                    </Box>
                </div>
            </div>
        </Layout>
    )
}