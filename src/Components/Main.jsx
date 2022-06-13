import React from 'react';

const weekdays = ['Sunday', 'Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const Main = (props) =>{
    let currentDay = weekdays[new Date().getDay()];
    // console.log(currentDate);
    let currenthr = new Date().getHours();
    let currentmin = new Date().getMinutes();
    return(
        <>
        <div className="flex flex-col lg:w-1/3 sm:w-full sm:max-h-96 lg:max-h-full relative text-white rounded-2xl overflow-hidden bg-zinc-900">
          {
              (props.is_day) ?
                (<img
                    className="h-full w-full object-cover"
                    src="./images/day.jpg"
                />) :
                (<img
                    className="h-full w-full object-cover opacity-50"
                    src="./images/night.jpg"
                />)
          }
          <div className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${(props.is_day)? "text-black" : "text-white"}`}>
            <h1 className="text-8xl">
              {props.temp_c}
              <sup>o</sup>
            </h1>
            <h2 className="text-3xl tracking-wider capitalize">
                <img className='inline w-8 h-8' src='./images/pin.png'/>{props.city}
            </h2>
            <h2 className='font-bold text-2xl'>{props.condition}</h2>
            <h2 className='text-md font-semibold'>
              {props.max_temp}<sup>o</sup> / {props.min_temp}<sup>o</sup> Feels like {props.feels_like}<sup>o</sup>
            </h2>
            <h2 className="text-lg">{currentDay}, {currenthr}:{currentmin}</h2>
          </div>
        </div>
        </>
    );
}

export default Main;

