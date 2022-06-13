import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card6 } from "./Cards";

const labels = [
  '0:00','1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  '23:00'
];



const lineChart = (props) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Temp",
            backgroundColor: "#f59e0b",
            borderColor: "#f59e0b",
            borderWidth: 3,
            data : props.data.map((val) => val.temp_c)
          },
        ],
    };

    return (
    <>
      <div className="bg-indigo-200 dark:bg-zinc-900 h-48 rounded-2xl w-full overflow-x-scroll my-2 scrollmih">
        <div className="w-full">
          <div className="flex p-4 dark:text-white">
            {props.data.map((val,index) => {
              return (
                <Card6 imgsrc={val.condition.icon} time = {labels[index]} temp = {val.temp_c}/>
              );
            })}
          </div>
            <div className="h-12 w-[1275px] pl-8">
              <Line
                data={data}
                options={{
                  scales: {
                      x:{
                          display:false,
                      },
                    y: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
        </div>
      </div>
    </>
  );
};

export default lineChart;
