import { Heading } from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { Bar,Pie } from "react-chartjs-2";

function Chart1(){
    const labels=['Jan','Feb','Mar','Apr','May'];
    
    const data={
        labels:labels,
        datasets:[
            {
                label:"Chart",
                backgroundColor: ["rgb(255, 99, 132)","rgb(254,45,128)","#50AF95","#f3ba2f","#2a71d0"],
                borderColor: "rgb(255, 99, 132)",
                data: [70, 76, 95  , 82, 88, ],
            },
        ],
    };

    const data1={
        labels:labels,
        datasets:[
            {
                label:"Pie",
                backgroundColor: ["rgb(255, 99, 132)","rgb(254,45,128)","#50AF95","#f3ba2f","#2a71d0"],
                borderColor: "rgb(255, 255, 255)",
                data: [90,87,94,79,65],
            },
        ],
    };
    return(
        <div className="flex justify-around">
        <div className=" w-1/2">
        <Heading>Performance Chart</Heading><br/>
            <Bar data={data}/>
            </div>
            <div className="w-1/4">
            <Heading>Progress Chart</Heading><br/>
            <Pie data={data1}/>
            </div>
            
        </div>
       
    )
}

export default Chart1;