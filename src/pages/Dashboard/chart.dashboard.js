import { Line, Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import { CSecondary, CPrimary } from '../../Component/utl'

export const ChartGAP = ({ type }) => {
  const [dataSet, setDataSet] = useState([])
  const [dataSet2, setDataSet2] = useState([])
  const [month, setMonth] = useState(['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Des"])


  for (let i = 0; i < 12; i++) {
    dataSet[i] = Math.floor(Math.random() * 100000);
  }
  for (let i = 0; i < 12; i++) {
    dataSet2[i] = Math.floor(Math.random() * 100000);
  }

  const data = {
    labels: month,
    datasets: [
      {
        label: `Barang Masuk`,
        data: dataSet,
        fill: false,
        backgroundColor: type === "masuk" ? CSecondary : "#E2808A",
        borderColor: type === "masuk" ? CPrimary : "#E2808A",
      },
      {
        label: `Barang Keluar`,
        data: dataSet2,
        fill: false,
        backgroundColor: type === "masuk" ? CSecondary : "#F1CCD7",
        borderColor: type === "masuk" ? CPrimary : "#F1CCD7",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />
}

export const ChartLine = ({ type, label }) => {

  const [dataSet, setDataSet] = useState([])
  const [month, setMonth] = useState(['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Des"])


  for (let i = 0; i < 12; i++) {
    dataSet[i] = Math.floor(Math.random() * 100000);
  }

  const data = {
    labels: month,
    datasets: [
      {
        label: `${label}`,
        data: dataSet,
        fill: false,
        backgroundColor: type === "masuk" ? CSecondary : "#B5E5CF",
        borderColor: type === "masuk" ? CPrimary : "#3D5B59",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />
}