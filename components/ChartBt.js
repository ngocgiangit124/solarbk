import React from 'react';
import { Line } from 'react-chartjs-2';
const data1 = [];

function ChartBt(props) {
    const labelsSV = props.chart.label;
    const dataAr = [];

    props.chart.DataChart.forEach((element, index, array) => {

        const dataX = [];
        element.data.forEach(element2 => {
            dataX.push(element2.y);

        });
        dataAr[index] = {
            label: String(element.label),
            fill: element.fill,
            lineTension: parseFloat(element.lineTension),
            backgroundColor: element.backgroundColor,
            borderColor: element.borderColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: parseFloat(element.borderDashOffset),
            borderJoinStyle: 'miter',
            pointBorderColor: element.borderColor,
            pointBackgroundColor: element.borderColor,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: element.borderColor,
            pointHoverBorderColor: element.borderColor,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataX
        };
    });

    const data = {
        labels: labelsSV,
        datasets: dataAr
    };
    return (
        <div>
            <h2 className="text-gray-600">
                Power / W
            </h2>
            <Line data={data} width={910} height={320} />
        </div>
    );
}

export default ChartBt;
