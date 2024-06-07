import { LineChart, PieChart } from "@mui/x-charts";
import Layout from "../../components/template/Layout";
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Dashboard() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [barChartData, setBarChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [etatsFormations, setEtatsFormations] = useState(null);
    const [monthlyFormations, setMonthlyFormations] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setShow(true);
        } else {
            setShow(false);
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/regions/formations/count`);
                console.log("Data from regions API:", response.data);
                const formations = response.data.map(item => item.formation_count);
                const brouillons = response.data.map(item => item.brouillons_count);
                const t = {
                    series: [
                        {
                            data: formations,
                            label: 'Formations',
                            color: 'rgb(133, 200, 221)',
                        },
                        {
                            data: brouillons,
                            label: 'Brouillons',
                            color: 'rgb(245, 169, 98)',
                        },
                    ],
                    xAxis: [{ data: response.data.map(item => item.region), scaleType: 'band' }]
                };
                setBarChartData(t);
            } catch (error) {
                console.error("Error fetching regions data:", error);
                setError('Failed to fetch data');
            }
        };

        const fetchData2 = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/etats/formations/count`);
                console.log("Data from etats API:", response.data);
                setEtatsFormations(response.data);
            } catch (error) {
                console.error("Error fetching etats data:", error);
                setError('Failed to fetch data');
            }
        };

        const fetchFormationsData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/formations`);
                console.log("Data from formations API:", response.data);
                const formations = response.data;
                const months = Array(12).fill(0);

                formations.forEach(formation => {
                    const month = new Date(formation.date_debut).getMonth();
                    months[month]++;
                });

                console.log("Monthly formations data:", months);
                setMonthlyFormations(months);
                console.log(months);
            } catch (error) {
                console.error("Error fetching formations data:", error);
                setError('Failed to fetch data');
            }
        };

        fetchData1();
        fetchData2();
        fetchFormationsData();
        setLoading(false);
    }, []);


    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Formations par Mois',
            data: monthlyFormations,
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    if (!show) {
        return null;
    }

    return (
        <Layout>
            <header>
                <div className="">
                    <div style={{backgroundColor: "#F5A962"}} className="overflow-hidden w-full shadow-sm rounded-t-lg">
                        <div className="p-3 text-gray-900 flex justify-between">
                            <div className="flex justify-start items-center">
                                <h1 className="text-[20px] ml-2 text-white mr-5">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-2 gap-5 py-14 w-11/12">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <>
                        <div>
                            <h2 className="text-gray-700 font-thin underline text-lg text-center mb-5">Nombre de Formations et Brouillons par Région</h2>
                            {barChartData && (
                                <BarChart
                                    series={barChartData.series}
                                    height={290}
                                    xAxis={barChartData.xAxis}
                                />
                            )}
                        </div>
                        <div>
                            <h1 className="text-gray-700 font-thin underline text-lg text-center">Statistique sur les formations</h1>
                            {etatsFormations && (
                                <PieChart
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: etatsFormations?.passe, label: 'Passé', color: 'rgb(133, 200, 221)' },
                                                { id: 1, value: etatsFormations?.encoure, label: 'En cours', color: 'rgb(245, 169, 98)' },
                                                { id: 2, value: etatsFormations?.pasencore, label: 'Pas encore', color: 'rgb(221, 221, 221)' },
                                            ],
                                        },
                                    ]}
                                    width={400}
                                    height={200}
                                />
                            )}
                        </div>
                        <div className="p-3">
                            <h2 className="text-gray-700 font-thin underline text-lg text-center mb-5">Nombre de Formations Organisées par Mois</h2>
                            <Line data={data} options={options} />
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

















// import { Gauge, PieChart, SparkLineChart } from "@mui/x-charts";
// import Layout from "../../components/template/Layout";
// import { BarChart } from '@mui/x-charts/BarChart';
// import { gaugeClasses } from '@mui/x-charts/Gauge';
// import { Box } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";


// export default function Dashboard () {

//     const navigate = useNavigate();

//     const [show, setShow] = useState(false);

//     useEffect(()=>{
//         if(localStorage.getItem('user')){
//             setShow(true);
//         }else{
//             setShow(false);
//             navigate('/login');
//         }
//     },[]);

//     return (
//         show && (
//             <Layout>
//                 <header>
//                     <div className="">
//                         <div style={{backgroundColor: "#F5A962"}} className="overflow-hidden w-full shadow-sm  rounded-t-lg">
//                             <div className="p-3 text-gray-900 flex justify-between">
                                
//                                 <div className="flex justify-start items-center ">
//                                     <h1 className="text-[20px] ml-2 text-white  mr-5">Dashboard</h1>
//                                 </div>      
//                             </div>
//                         </div>
//                     </div>
//                 </header>  
//                 <div className="grid grid-cols-2 gap-5 mb-40 absolute -z-10 py-14 w-11/12">
//                     <div className="">
//                         <BarChart
//                             series={[
//                                 { data: [10, 15, 20, 25], color: 'rgb(133, 200, 221)' },
//                                 { data: [8, 12, 18, 22], color: 'rgb(245, 169, 98)' },
//                             ]}
//                             height={290}
//                             xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
//                         />
//                     </div>
//                     <div className="flex flex-col items-center justify-center">
//                         <h1 className="text-gray-700 font-thin underline text-lg">Statistique sur les formations</h1>
//                         <PieChart
//                             series={[
//                                 {
//                                     data: [
//                                         { id: 0, value: 5, label: 'Passé', color: 'rgb(133, 200, 221)' },
//                                         { id: 1, value: 2, label: 'En coure', color: 'rgb(245, 169, 98)' },
//                                         { id: 2, value: 1, label: 'Pas encore', color: 'rgb(221, 221, 221)' },
//                                     ],
//                                 },
//                             ]}
//                             width={400}
//                             height={200}
//                         />
//                     </div>
//                     {/* <div className="h-60">
//                         <Gauge
//                             value={75}
//                             startAngle={-110}
//                             endAngle={110}
//                             sx={{
//                                 [`& .${gaugeClasses.valueText}`]: {
//                                 fontSize: 40,
//                                 transform: 'translate(0px, 0px)',
//                                 },
//                             }}
//                             text={
//                                 ({ value, valueMax }) => `${value} / ${valueMax}`
//                             }
//                         />
//                     </div>
//                     <div className="">
//                         <Box sx={{ flexGrow: 1 }}>
//                             <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
//                         </Box>
//                         <Box sx={{ flexGrow: 1 }}>
//                         <SparkLineChart
//                             plotType="bar"
//                             data={[1, 4, 2, 5, 7, 2, 4, 6]}
//                             height={100}
//                         />
//                         </Box>
//                     </div> */}
//                 </div>
//             </Layout>
//         )
//     )
// }