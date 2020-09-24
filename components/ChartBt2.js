import React from 'react'
//
import { Chart } from 'react-charts'

function MyChart() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    { primary: 1, secondary: 12 },
                    { primary: 2, secondary: 13 },
                    { primary: 3, secondary: 18 },
                    { primary: 4, secondary: 17 },
                    { primary: 5, secondary: 13 },
                    { primary: 6, secondary: 19 },
                    { primary: 7, secondary: 16 },
                ],
            },
            {
                label: 'Series 2',
                data: [
                    { primary: 1, secondary: 13 },
                    { primary: 2, secondary: 14 },
                    { primary: 3, secondary: 12 },
                    { primary: 4, secondary: 15 },
                    { primary: 5, secondary: 14 },
                    { primary: 6, secondary: 18 },
                    { primary: 7, secondary: 10 },
                ],
            },
            {
                label: 'Series 3',
                data: [
                    { primary: 1.1, secondary: 15 },
                    { primary: 2, secondary: 19 },
                    { primary: 3, secondary: 12 },
                    { primary: 4, secondary: 18 },
                    { primary: 5, secondary: 12 },
                    { primary: 6, secondary: 15 },
                    { primary: 7, secondary: 18 },
                ],
            },
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    return (
        <div
            style={{
                width: '100%',
                height: '330px',
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}
export default MyChart;