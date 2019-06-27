import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  const [pieState, userPieState] = useState({});

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(res =>
        userPieState({
          chartData: {
            labels: ['noOfCashTrips', 'noOfNonCashTrips'],
            datasets: [
              {
                label: 'Gender',
                data: [res.data.noOfCashTrips, res.data.noOfNonCashTrips],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(55, 162, 235, 0.6)',
                ],
              },
            ],
          },
        }),
      );
  }, []);
  return (
    <>
      <Pie data={pieState.chartData} options={{}} />
    </>
  );
}

export default PieChart;
