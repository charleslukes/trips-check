import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
  const [barState, userState] = useState({});

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(res =>
        userState({
          chartData: {
            labels: ['billedTotal', 'cashBilledTotal', 'nonCashBilledTotal'],
            datasets: [
              {
                label: 'Cash bill',
                data: [
                  res.data.billedTotal,
                  res.data.cashBilledTotal,
                  res.data.nonCashBilledTotal,
                ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(55, 162, 235, 0.6)',
                  'rgba(15, 122, 25, 0.6)',
                ],
              },
            ],
          },
        }),
      );
  }, []);

  // data: {
  //   male: 30,
  //   female: 20,
  //   noOfCashTrips: 26,
  //   noOfNonCashTrips: 24,
  //   billedTotal: 128224.69,
  //   cashBilledTotal: 69043.8,
  //   nonCashBilledTotal: 59180.89,
  // },

  return (
    <>
      <Bar data={barState.chartData} options={{}} />
    </>
  );
}

export default BarChart;
