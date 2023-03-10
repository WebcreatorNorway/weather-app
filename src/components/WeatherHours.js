import React from "react";
import { WiDegrees, WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiDayCloudyHigh, WiCloudy, WiCloud, WiDayFog } from "react-icons/wi";
import "./WeatherHours.css";

function WeatherHours(props) {
  return (
    <>
      <div className={props.isActive === props.index ? "active" : "inactive"} key={props.index}>
        <hr />
        <div className="weatherTimeHoleConatiner">
          {props.mydata
            .filter((x) => new Date(x.validTime).getUTCDate() === new Date(props.weather.validTime).getUTCDate())
            .map((timeWeather) => {
              return (
                <>
                  <div className="weatherTimeConatiner">
                    <div className="hourContainer">
                      <div>{("0" + new Date(timeWeather.validTime).getUTCHours()).slice(-2)}:00</div>
                    </div>
                    {timeWeather.parameters
                      .filter((cloud) => cloud.name == "Wsymb2")
                      .map((cloud, i) => {
                        return (
                          <>
                            <div className="cloudTimeContainer" key={i}>
                              {cloud.values == 1 && <WiDaySunny />}
                              {cloud.values == 2 && <WiDaySunnyOvercast />}
                              {cloud.values == 3 && <WiDayCloudy />}
                              {cloud.values == 4 && <WiDayCloudyHigh />}
                              {cloud.values == 5 && <WiCloudy />}
                              {cloud.values == 6 && <WiCloud />}
                              {cloud.values == 7 && <WiDayFog />}
                              {cloud.values == 8 && <WiDaySunnyOvercast />}
                              {cloud.values == 9 && <WiDaySunnyOvercast />}
                              {cloud.values == 10 && <WiDaySunnyOvercast />}
                              {cloud.values == 11 && <WiDaySunnyOvercast />}
                              {cloud.values == 12 && <WiDaySunnyOvercast />}
                              {cloud.values == 13 && <WiDaySunnyOvercast />}
                              {cloud.values == 14 && <WiDaySunnyOvercast />}
                              {cloud.values == 15 && <WiDaySunnyOvercast />}
                              {cloud.values == 16 && <WiDaySunnyOvercast />}
                              {cloud.values == 17 && <WiDaySunnyOvercast />}
                              {cloud.values == 18 && <WiDaySunnyOvercast />}
                              {cloud.values == 19 && <WiDaySunnyOvercast />}
                              {cloud.values == 20 && <WiDaySunnyOvercast />}
                              {cloud.values == 21 && <WiDaySunnyOvercast />}
                              {cloud.values == 22 && <WiDaySunnyOvercast />}
                              {cloud.values == 23 && <WiDaySunnyOvercast />}
                              {cloud.values == 24 && <WiDaySunnyOvercast />}
                              {cloud.values == 25 && <WiDaySunnyOvercast />}
                              {cloud.values == 26 && <WiDaySunnyOvercast />}
                              {cloud.values == 27 && <WiDaySunnyOvercast />}
                            </div>
                          </>
                        );
                      })}
                    {timeWeather.parameters
                      .filter((temp) => temp.name == "t")
                      .map((temp, i) => {
                        return (
                          <>
                            <div className="temperatureTimeContainer" key={i}>
                              {temp.values}
                              <WiDegrees className="degrees" />
                            </div>
                          </>
                        );
                      })}
                  </div>
                  {timeWeather.parameters
                    .filter((cloud) => cloud.name == "Wsymb2")
                    .map((cloud, i) => {
                      return (
                        <>
                          <div className="cloudTextTimeContainer" key={i}>
                            {cloud.values == 1 && "Klart"}
                            {cloud.values == 2 && "L??tt molningt"}
                            {cloud.values == 3 && "Varierande molnigt"}
                            {cloud.values == 4 && "Halv klart"}
                            {cloud.values == 5 && "Molnigt"}
                            {cloud.values == 6 && "Mulet"}
                            {cloud.values == 7 && "Dimmigt"}
                            {cloud.values == 8 && "Svaga regnskurar"}
                            {cloud.values == 9 && "M??ttliga regnskurar"}
                            {cloud.values == 10 && "Kraftiga regnskurar"}
                            {cloud.values == 11 && "??skv??der"}
                            {cloud.values == 12 && "L??tt sn??slaskskurar"}
                            {cloud.values == 13 && "M??ttliga sn??slaskskurar"}
                            {cloud.values == 14 && "Kraftiga sn??slaskskurar"}
                            {cloud.values == 15 && "L??tta sn??skurar"}
                            {cloud.values == 16 && "M??ttliga sn??skurar"}
                            {cloud.values == 17 && "Kraftiga sn??skurar"}
                            {cloud.values == 18 && "Duggregn"}
                            {cloud.values == 19 && "M??ttligt regn"}
                            {cloud.values == 20 && "Kraftigt regn"}
                            {cloud.values == 21 && "??ska"}
                            {cloud.values == 22 && "L??tt sn??slask"}
                            {cloud.values == 23 && "M??ttlig sn??slask"}
                            {cloud.values == 24 && "Kraftig sn??slask"}
                            {cloud.values == 25 && "L??tt sn??fall"}
                            {cloud.values == 26 && "M??ttligt sn??fall"}
                            {cloud.values == 27 && "Kraftigt sn??fall"}
                          </div>
                        </>
                      );
                    })}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default WeatherHours;
