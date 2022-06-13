import React, { useState } from "react";
import Chart from "./Chart";

const Card1 = (props) => {
  // let[UV_status,setStatus] = useState('');
  const status = (index) => {
    if (index >= 0 && index <= 2) {
      return "Low";
    } else if (index >= 3 && index <= 7) {
      return "Medium";
    } else {
      return "High";
    }
  };
  return (
    <>
      <div className="w-full py-6 flex justify-evenly items-center dark:text-white bg-indigo-200 dark:bg-zinc-900 rounded-2xl">
        <div className="flex justify-center items-center flex-col text-md font-bold pr-4 border-r-2 border-black dark:border-white">
          <img src="https://img.icons8.com/color/48/000000/sun--v1.png" />
          <div>UV index</div>
          <div>{status(props.uv)} ({props.uv})</div>
        </div>
        <div className="flex justify-center items-center flex-col text-md font-bold pr-8 border-r-2 border-black dark:border-white">
          <img src="https://img.icons8.com/color/48/000000/wind.png" />
          <div>Wind</div>
          <div>{props.wind} km/h</div>
        </div>
        <div className="flex justify-center items-center flex-col text-md font-bold">
          <img
            alt="img"
            src="https://img.icons8.com/color/48/000000/humidity.png"
          />
          <div>Humidity</div>
          <div>{props.humidity} %</div>
        </div>
      </div>
    </>
  );
};

const Card2 = (props) => {
  return (
    <>
      <div className="w-full flex justify-evenly dark:text-white bg-indigo-200 dark:bg-zinc-900 rounded-2xl">
        <div className="flex justify-center items-center flex-col p-1 text-md font-bold">
          <div>Sunrise</div>
          <div>{props.sunrise}</div>
          <img src="./images/sun.png" />
        </div>
        <div className="flex justify-center items-center flex-col p-1 text-md font-bold">
          <div>Sunset</div>
          <div>{props.sunset}</div>
          <img src="./images/sunset.png" />
        </div>
      </div>
    </>
  );
};

const Card4 = (props) => {
  return (
    <>
      <tr>
        <td className="px-4 capitalize font-semibold">{props.day}</td>
        <td>
          <img className="w-16 h-16" src={props.imgsrc} />
        </td>
        <td className="px-4 font-semibold">
          {props.max_c}
          <sup>o</sup>
        </td>
        <td className="px-4 font-semibold">
          {props.min_c}
          <sup>o</sup>
        </td>
      </tr>
    </>
  );
};

const Card5 = (props) => {
  const AQI = (index) => {
    if (index >= 1 && index <= 3) return "Low";
    else if (index >= 4 && index <= 6) return "Moderate";
    else if (index >= 7 && index <= 9) return "High";
    else if (index >= 10) return "Very High";
  };

  const driving = (index) => {
    if (index >= 3) return "none";
    else if (index >= 0.1 && index <= 2.9) return "moderate";
    else if (index <= 0) return "high";
  };

  const running = (index) => {
    if (index >= 0 && index <= 20) return "Very good";
    else if (index >= 21 && index <= 40) return "Good";
    else if (index >= 41 && index <= 50) return "Moderate";
    else if (index >= 51 && index <= 65) return "Poor";
    else if (index >= 66) return "Very poor";
  };

  return (
    <>
      <div className="w-full h-48 justify-center px-8 flex flex-col bg-indigo-200 dark:bg-zinc-900 dark:text-white rounded-2xl font-semibold">
        <div className="flex flex-row justify-between py-2">
          <div>
            <img
              className="inline mr-1"
              src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/undefined/external-speedometer-car-service-kiranshastry-gradient-kiranshastry.png"
            />{" "}
            AQI
          </div>
          <div>
            {AQI(props.defra)} ({props.defra})
          </div>
        </div>
        <div className="flex flex-row justify-between pb-2">
          <div>
            <img
              className="inline mr-1"
              src="https://img.icons8.com/fluency/30/undefined/pollen.png"
            />{" "}
            Pollen
          </div>
          <div>Low</div>
        </div>
        <div className="flex flex-row justify-between pb-2">
          <div>
            <img
              className="inline mr-1"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/30/undefined/external-driving-vacation-planning-road-trip-flaticons-lineal-color-flat-icons-2.png"
            />{" "}
            Driving Difficulty
          </div>
          <div>{driving(props.visibility)}</div>
        </div>
        <div className="flex flex-row justify-between ">
          <div>
            <img
              className="inline mr-1"
              src="https://img.icons8.com/fluency/30/undefined/running.png"
            />{" "}
            Running
          </div>
          <div>{running(props.humidity)}</div>
        </div>
      </div>
    </>
  );
};

const Card6 = (props) => {
  return (
    <>
      <div className="p-2 pb-0">
        <h3>{props.time}</h3>
        <img className="w-8 h-8" src={`https:${props.imgsrc}`} />
        <h3>
          {props.temp}<sup>o</sup>
        </h3>
      </div>
    </>
  );
};

export default Card1;
export { Card2, Card4, Card5, Card6 };
