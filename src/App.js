import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [data, setData] = useState(false);
  const [info, setInfo] = useState("auto:ip");
  //const [input, setInput] = useState('');
  useEffect(
   function () {
   (async function(){
     try{
     let response =  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5645245767d44a31a47134430222712&q=${info}&days=5&aqi=yes&alerts=yes`);
     let datas = await response.json();
     if(!datas.error){setData(datas)}
     }
     catch(err){
       alert('Use a valid city');
       setInfo("auto:ip");
     }
    })();
   },
    [info]
  );
  function date(e) {
    e = e.split(" ")[0].split("-");
    const [year, month, day] = e;
    const yearList = [
      "JAN",
      "FEB",
      "MAR",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
    return `${day} ${yearList[month - 1]} ${year}`;
  }
  function time(e) {
    e = e.split(" ")[0];
    let y = new Date(e);
    const dayList = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    return dayList[y.getDay()];
  }
  function tim(e) {
    e = e.split(" ")[0];
    let y = new Date(e);
    const dayList = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    return dayList[y.getDay()];
  }
  let eachOf;
  if (data) {
    eachOf = data.forecast.forecastday.map(function (item,id) {
      return (
        <>
          <li key={id} className="active">
            <img
              src={"http:" + item.day.condition.icon}
              className="day-icon"
              data-feather="sun"
              alt=""
            />
            <span className="day-name">{tim(item.date)}</span>
            <span className="day-temp">{item.day.maxtemp_c}°C</span>
          </li>
        </>
      );
    });
  }
  const X = () => {
    return (
      <>
        <div className="container">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{time(data.location.localtime)}</h2>
            <span className="date-day">{date(data.location.localtime)}</span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location">
              {data.location.name} {data.location.country}
            </span>
          </div>
          <div className="weather-container">
            <img
              className="weather-icon"
              data-feather="sun"
              alt=""
              src={"https:" + data.current.condition.icon}
            />
            <h1 className="weather-temp">{data.current.temp_c}°C</h1>
            <h3 className="weather-desc">{data.current.condition.text}</h3>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation">
                {" "}
                <span className="title">PRECIPITATION</span>
                <span className="value">{data.current.precip_in} IN</span>
                <div className="clear"></div>
              </div>
              <div className="humidity">
                {" "}
                <span className="title">HUMIDITY</span>
                <span className="value">{data.current.humidity} %</span>
                <div className="clear"></div>
              </div>
              <div className="wind">
                {" "}
                <span className="title">WIND</span>
                <span className="value">{data.current.wind_kph} kmh</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              {/*
		        <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
		        <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
		        <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
		        <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>*/}
              {eachOf}
              <div className="clear"></div>
            </ul>
          </div>
          <div className="location-container">
            <input
              type="text"
              placeholder="Change location"
              onKeyPress={(e) => {
                setInfo(e.target.value);
              }}
              className="location-button"
            />
          </div>
        </div>
      </>
    );
  };
  const y = typeof data == "object" && <X />;
  return <>{y}</>;
}
