import { Doughnut } from "react-chartjs-2";
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from "@mui/material";
import CountertopsIcon from "@mui/icons-material/Countertops";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import DeckIcon from "@mui/icons-material/Deck";
import axios from "axios";
import { useState, useEffect } from "react";

export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const [totalReservation, setTotalReservation] = useState(0);

  const [MovingPer, setMovingPer] = useState(0);
  const [CleaningPer, setCleaningPer] = useState(0);
  const [PlumbingPer, setPlumbingPer] = useState(0);
  const [ElectricityPer, setElectricityPer] = useState(0);

  useEffect(() => {
    calculate();
  }, [ElectricityPer]);

  const purcente = (num, numPrin) => {
    return (num / numPrin) * 100;
  };

  const calculate = () => {
    axios
      .get(`http://localhost:5000/carts/getNumberReservation`)
      .then((res) => {
        console.log("-------------->" + JSON.stringify(res.data[0]["NUM"]));
        setTotalReservation(Number(res.data[0]["NUM"]));
      })
      .then(() => {
        axios.get(`http://localhost:5000/carts/getServiceNumber/${1}`).then((res) => {
          console.log("------Moving-------->" + JSON.stringify(res.data[0]["NUM"]));
          const theNumber = Number(res.data[0]["NUM"]);
          const purc = Math.floor(purcente(theNumber, totalReservation));
          setMovingPer(purc);
        });

        axios.get(`http://localhost:5000/carts/getServiceNumber/${2}`).then((res) => {
          console.log("------Cleaning-------->" + JSON.stringify(res.data[0]["NUM"]));
          const theNumber = Number(res.data[0]["NUM"]);
          const purc = Math.floor(purcente(theNumber, totalReservation));
          setCleaningPer(purc);
        });

        axios.get(`http://localhost:5000/carts/getServiceNumber/${3}`).then((res) => {
          console.log("------Plumbing-------->" + JSON.stringify(res.data[0]["NUM"]));
          const theNumber = Number(res.data[0]["NUM"]);
          const purc = Math.floor(purcente(theNumber, totalReservation));
          setPlumbingPer(purc);
        });

        axios.get(`http://localhost:5000/carts/getServiceNumber/${4}`).then((res) => {
          console.log("------Electricity-------->" + JSON.stringify(res.data[0]["NUM"]));
          const theNumber = Number(res.data[0]["NUM"]);
          const purc = Math.floor(purcente(theNumber, totalReservation));
          setElectricityPer(purc);
        });
      })
      .then(() => {
        console.log(MovingPer + " " + CleaningPer + " " + PlumbingPer + " " + ElectricityPer);
      });
  };

  const data = {
    datasets: [
      {
        data: [MovingPer, CleaningPer, PlumbingPer, ElectricityPer],
        backgroundColor: ["#1C2765", "#ada8a8", "#ED5C00", "#ff9d5e"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Moving", "Cleaning", "Plumbing", "Electricity"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "Moving",
      value: data.datasets[0].data[0],
      icon: CountertopsIcon,
      color: "#1C2765",
    },
    {
      title: "Cleaning",
      value: data.datasets[0].data[1],
      icon: CountertopsIcon,
      color: "#ada8a8",
    },
    {
      title: "Plumbing",
      value: data.datasets[0].data[2],
      icon: CountertopsIcon,
      color: "#ED5C00",
    },
    {
      title: "Electricity",
      value: data.datasets[0].data[3],
      icon: CountertopsIcon,
      color: "#ff9d5e",
    },
  ];

  return (
    <Card
      sx={{
        height: 628,
      }}
    >
      <CardHeader title="Product By Category" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
