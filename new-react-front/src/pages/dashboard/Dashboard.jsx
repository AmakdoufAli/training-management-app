import { Gauge, PieChart, SparkLineChart } from "@mui/x-charts";
import Layout from "../../components/template/Layout";
import { BarChart } from '@mui/x-charts/BarChart';
import { gaugeClasses } from '@mui/x-charts/Gauge';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function Dashboard () {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('user')){
            setShow(true);
        }else{
            setShow(false);
            navigate('/login');
        }
    },[]);

    return (
        show && (
            <Layout>
                <header>
                    <div className="">
                        <div style={{backgroundColor: "#F5A962"}} className="overflow-hidden w-full shadow-sm  rounded-t-lg">
                            <div className="p-3 text-gray-900 flex justify-between">
                                
                                <div className="flex justify-start items-center ">
                                    <h1 className="text-[20px] ml-2 text-white  mr-5">Dashboard</h1>
                                </div>      
                            </div>
                        </div>
                    </div>
                </header>  
                <div className="grid grid-cols-2 gap-5 mb-40 absolute -z-10 py-14 w-11/12">
                    <div className="">
                        <BarChart
                            series={[
                                { data: [10, 15, 20, 25], color: 'rgb(133, 200, 221)' },
                                { data: [8, 12, 18, 22], color: 'rgb(245, 169, 98)' },
                            ]}
                            height={290}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-gray-700 font-thin underline text-lg">Statistique sur les formations</h1>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 5, label: 'Passé', color: 'rgb(133, 200, 221)' },
                                        { id: 1, value: 2, label: 'En coure', color: 'rgb(245, 169, 98)' },
                                        { id: 2, value: 1, label: 'Pas encore', color: 'rgb(221, 221, 221)' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </div>
                    {/* <div className="h-60">
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
                    </div> */}
                </div>
            </Layout>
        )
    )
}