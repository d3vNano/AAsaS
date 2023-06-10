import express from "express";

const server = express();

const forecast = [
  { day: 1, temperature: "32 °C", wind: "8 km/h", views: 0 },
  { day: 2, temperature: "27 °C", wind: "9 km/h", views: 0 },
  { day: 3, temperature: "30 °C", wind: "8 km/h", views: 0 },
  { day: 4, temperature: "32 °C", wind: "7 km/h", views: 0 },
  { day: 5, temperature: "31 °C", wind: "8 km/h", views: 0 },
  { day: 6, temperature: "26 °C", wind: "10 km/h", views: 0 },
  { day: 7, temperature: "27 °C", wind: "9 km/h", views: 0 }
];


server.get("/forecast", (req, res) => {
  forecast.forEach(value => value.views++)
  res.send(forecast)
})

server.get("/forecast/:day", (req, res) => {
  const day = Number(req.params.day)
  const daySelec = forecast.find(value => value.day === day);

  daySelec.views++
  res.send(daySelec)
  })


server.listen(5000, () => {
  console.log("Listen ON 5000!")
})